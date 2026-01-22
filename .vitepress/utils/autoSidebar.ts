import { readdirSync, statSync } from 'fs'
import { join, relative, sep } from 'path'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

interface SidebarConfig {
  [key: string]: SidebarItem[]
}

/**
 * Convert filename to readable title
 * Example: "RL_for_LLMs.md" -> "RL for LLMs"
 */
function formatTitle(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .trim()
}

/**
 * Check if a file/folder should be excluded
 */
function shouldExclude(name: string, excludePatterns: string[]): boolean {
  return excludePatterns.some(pattern => {
    if (pattern.includes('*')) {
      const regex = new RegExp(pattern.replace(/\*/g, '.*'))
      return regex.test(name)
    }
    return name.includes(pattern)
  })
}

/**
 * Recursively scan directory and build sidebar items
 */
function scanDirectory(
  dirPath: string,
  baseDir: string,
  excludePatterns: string[] = []
): SidebarItem[] {
  const items: SidebarItem[] = []

  try {
    const entries = readdirSync(dirPath)

    // Sort entries: directories first, then files alphabetically
    const sorted = entries.sort((a, b) => {
      const aPath = join(dirPath, a)
      const bPath = join(dirPath, b)
      const aIsDir = statSync(aPath).isDirectory()
      const bIsDir = statSync(bPath).isDirectory()

      if (aIsDir && !bIsDir) return -1
      if (!aIsDir && bIsDir) return 1
      return a.localeCompare(b)
    })

    for (const entry of sorted) {
      const fullPath = join(dirPath, entry)
      const relativePath = relative(baseDir, fullPath)

      // Skip if should be excluded
      if (shouldExclude(relativePath, excludePatterns)) {
        continue
      }

      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        // Recursively scan subdirectory
        const subItems = scanDirectory(fullPath, baseDir, excludePatterns)

        if (subItems.length > 0) {
          items.push({
            text: formatTitle(entry),
            items: subItems,
            collapsed: false
          })
        }
      } else if (entry.endsWith('.md') && entry !== 'README.md') {
        // Add markdown file
        const link = '/' + relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
        items.push({
          text: formatTitle(entry),
          link: link
        })
      }
    }
  } catch (error) {
    console.warn(`Error scanning directory ${dirPath}:`, error)
  }

  return items
}

/**
 * Generate sidebar configuration for all top-level directories
 */
export function generateSidebar(
  rootDir: string,
  excludePatterns: string[] = []
): SidebarConfig {
  const sidebar: SidebarConfig = {}

  try {
    const entries = readdirSync(rootDir)

    for (const entry of entries) {
      const fullPath = join(rootDir, entry)

      // Skip excluded patterns
      if (shouldExclude(entry, excludePatterns)) {
        continue
      }

      // Skip special files/directories
      if (entry.startsWith('.') ||
          entry === 'node_modules' ||
          entry === 'index.md' ||
          entry.endsWith('.json') ||
          entry.endsWith('.ts') ||
          entry.endsWith('.md')) {
        continue
      }

      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        const items = scanDirectory(fullPath, rootDir, excludePatterns)

        if (items.length > 0) {
          sidebar[`/${entry}/`] = [
            {
              text: formatTitle(entry),
              items: items
            }
          ]
        }
      }
    }
  } catch (error) {
    console.error('Error generating sidebar:', error)
  }

  return sidebar
}
