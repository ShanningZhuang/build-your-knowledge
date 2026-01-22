/**
 * Escape LaTeX math delimiters to prevent Vue template parsing conflicts
 * This plugin runs before other markdown processing to protect {{ }} in math expressions
 *
 * IMPORTANT: Only escapes the FULL pattern {{...}} (double braces on both sides)
 * Does NOT escape single }} or {{ that are just normal LaTeX syntax
 */
import type MarkdownIt from 'markdown-it'

export function escapeLaTeXForVue(md: MarkdownIt) {
  // Store original parse function
  const originalParse = md.parse.bind(md)

  // Override parse to escape LaTeX before processing
  md.parse = (src: string, env: any) => {
    // Escape ONLY the pattern {{...}} within LaTeX math delimiters
    // This is the Vue template syntax that causes conflicts
    let escapedSrc = src

    function escapeVueTemplateInMath(content: string): string {
      // Only escape the full {{...}} pattern, not individual } or {
      // Match {{ followed by anything (non-greedy) followed by }}
      return content.replace(/\{\{(.*?)\}\}/g, '&#123;&#123;$1&#125;&#125;')
    }

    // Pattern to match inline math: \( ... \)
    escapedSrc = escapedSrc.replace(/\\\((.*?)\\\)/gs, (match, content) => {
      const escaped = escapeVueTemplateInMath(content)
      return `\\(${escaped}\\)`
    })

    // Pattern to match display math: \[ ... \]
    escapedSrc = escapedSrc.replace(/\\\[([\s\S]*?)\\\]/g, (match, content) => {
      const escaped = escapeVueTemplateInMath(content)
      return `\\[${escaped}\\]`
    })

    // Pattern to match $$ ... $$ (multiline display math)
    // Use [\s\S] instead of . to match newlines, even though /s flag is present
    escapedSrc = escapedSrc.replace(/\$\$([\s\S]*?)\$\$/g, (match, content) => {
      const escaped = escapeVueTemplateInMath(content)
      return `$$${escaped}$$`
    })

    // Pattern to match single $ ... $ (if used)
    escapedSrc = escapedSrc.replace(/(?<!\\)\$(?!\$)(.+?)(?<!\\)\$(?!\$)/gs, (match, content) => {
      const escaped = escapeVueTemplateInMath(content)
      return `$${escaped}$`
    })

    return originalParse(escapedSrc, env)
  }
}
