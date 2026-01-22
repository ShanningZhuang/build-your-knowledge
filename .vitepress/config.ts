import { defineConfig } from 'vitepress'
import { generateSidebar } from './utils/autoSidebar'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import texmath from 'markdown-it-texmath'
import katex from 'katex'
import { escapeLaTeXForVue } from './utils/escapeLaTeXForVue'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

// Patterns to exclude from sidebar generation
const excludePatterns = [
  'node_modules',
  '.vitepress',
  'template',
  'README.md'
]

// Generate sidebar automatically from file structure
const autoSidebar = generateSidebar(rootDir, excludePatterns)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Build Your Knowledge",
  description: "Learn systematically with AI by building your own knowledge base",
  base: '/',

  // Ignore dead links
  ignoreDeadLinks: true,

  srcExclude: ['**/template/**', 'README.md'],

  themeConfig: {
    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      // Add your navigation items here
    ],

    // Auto-generated sidebar from file structure
    sidebar: autoSidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ShanningZhuang/build-your-knowledge' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  },

  markdown: {
    config(md) {
      // Escape {{ }} in LaTeX FIRST to prevent Vue template parsing
      md.use(escapeLaTeXForVue)

      // Use texmath plugin with KaTeX engine
      // Support BOTH delimiter styles: dollars ($) and brackets (\(...\))
      md.use(texmath, {
        engine: katex,
        delimiters: ['dollars', 'brackets'],
        katexOptions: {
          throwOnError: false,
          errorColor: '#cc0000',
          strict: false
        }
      })
    }
  },

  head: [
    // Include KaTeX CSS
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.includes('-'),
        whitespace: 'preserve'
      }
    }
  },

  vite: {
    ssr: {
      noExternal: ['katex', 'markdown-it-texmath']
    }
  }
})
