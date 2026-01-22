import DefaultTheme from 'vitepress/theme'
import './custom.css'
import FolderCards from './components/FolderCards.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FolderCards', FolderCards)
  }
}
