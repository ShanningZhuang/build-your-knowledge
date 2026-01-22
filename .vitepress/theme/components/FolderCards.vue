<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme } = useData()

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

const folders = computed(() => {
  const sidebar = theme.value.sidebar
  if (!sidebar || typeof sidebar !== 'object') return []

  // Handle both array format and object format (keyed by path)
  if (Array.isArray(sidebar)) {
    return sidebar.filter((item: SidebarItem) => item.items && item.items.length > 0)
  }

  // Object format: { '/path/': [...] }
  const result: SidebarItem[] = []
  for (const [path, items] of Object.entries(sidebar)) {
    if (Array.isArray(items)) {
      for (const item of items as SidebarItem[]) {
        if (item.items && item.items.length > 0) {
          result.push(item)
        }
      }
    }
  }
  return result
})

function getFirstLink(folder: SidebarItem): string {
  if (folder.link) return folder.link
  if (folder.items && folder.items.length > 0) {
    return getFirstLink(folder.items[0])
  }
  return '/'
}

function countItems(folder: SidebarItem): number {
  if (!folder.items) return 0
  let count = 0
  for (const item of folder.items) {
    if (item.link) count++
    if (item.items) count += countItems(item)
  }
  return count
}
</script>

<template>
  <div class="folder-cards">
    <a
      v-for="folder in folders"
      :key="folder.text"
      :href="getFirstLink(folder)"
      class="folder-card"
    >
      <div class="folder-icon">📁</div>
      <div class="folder-info">
        <h3>{{ folder.text }}</h3>
        <p>{{ countItems(folder) }} items</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.folder-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.folder-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  background: var(--vp-c-bg-soft);
}

.folder-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.folder-icon {
  font-size: 2rem;
}

.folder-info h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.folder-info p {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>
