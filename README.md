# Build Your Knowledge

> **Learn systematically with AI by building your own knowledge base**

## Why Build Your Knowledge?

In the AI era, everyone can learn with AI. But simply chatting with AI has problems:

- **Duplication** - AI repeats similar answers across conversations
- **Hallucination** - Long contexts lead to inaccurate responses
- **Fragmented knowledge** - Chat history doesn't help you learn systematically

### The Solution: Build a Knowledge Base with AI

Using Claude Code (or Cursor) to construct your own knowledge base:

✅ **100% customized** to your background
✅ **Systematically organized** - not scattered chat logs
✅ **Expandable** - grow from your existing knowledge
✅ **Shareable** - publish as a beautiful website

### The Best Way to Learn

> "The best way to learn is to build something."

After reading AI-generated content:
1. **Derive it from scratch** - understand the fundamentals
2. **Raise questions** - challenge what you've learned
3. **Solve them** - deepen your understanding

Let AI handle the cumbersome parts. You focus on **constructing your own mind flow**.

---

## What This Template Solves

Simply using Claude Code to write markdown has issues:
- ❌ Math equations don't render properly
- ❌ File structure isn't clear
- ❌ Can't share with others easily

This template fixes all of that:
- ✅ **Full math support** - Both `$...$` and `\(...\)` syntax work perfectly
- ✅ **Auto-generated sidebar** - Folder structure becomes navigation
- ✅ **One-click deploy** - Share your knowledge with the world

---

## Quick Start

### 1. Use this template

```bash
# Clone this template
git clone https://github.com/ShanningZhuang/build-your-knowledge.git my-knowledge
cd my-knowledge

# Install dependencies
npm install
```

### 2. Start building with AI

Open in Claude Code or Cursor, then ask AI to help you learn:

```
"Help me learn [topic]. Create a structured knowledge base
starting from the fundamentals, building up to advanced concepts."
```

### 3. Run locally

```bash
npm run docs:dev
```

Visit http://localhost:5173/

### 4. Deploy & Share

```bash
vercel
```

Your knowledge base is now live!

---

## Features

| Feature | Description |
|---------|-------------|
| 📁 **Auto Sidebar** | Folder structure → Navigation automatically |
| 🔢 **Math Support** | KaTeX with `$...$`, `\(...\)`, `$$...$$`, `\[...\]` |
| 🔍 **Local Search** | Built-in search functionality |
| 🚀 **Fast Builds** | Powered by Vite |
| 📱 **Responsive** | Works on all devices |
| 🌐 **One-click Deploy** | Vercel, Netlify, GitHub Pages |

## Math Examples

Inline: `$E = mc^2$` renders as $E = mc^2$

Display:
```latex
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

Complex LaTeX with `{{...}}` also works (Vue conflict resolved).

---

## File Structure

```
your-knowledge-base/
├── topic1/
│   ├── basics.md
│   └── advanced/
│       └── deep-dive.md
├── topic2/
│   └── notes.md
├── index.md              # Homepage
└── .vitepress/
    ├── config.ts         # Configuration
    └── utils/            # Auto-sidebar & math support
```

Just add markdown files - the sidebar updates automatically!

---

## Example: Learning AI Infrastructure

Here's how I used this template to learn AI Infra:

```
AI_Infra/
├── AI_Infra.md           # Overview & learning roadmap
├── basic/
│   └── Flash_Attention.md
├── inference/
│   ├── 01_KV_Cache.md
│   ├── 02_Batching.md
│   └── 03_Speculative_Decoding.md
└── rl/
    ├── 01_Algorithms.md   # PPO, DPO, GRPO...
    └── 02_Infrastructure.md
```

Each file was created with Claude Code, following my learning flow.

---

## Configuration

Edit `.vitepress/config.ts`:

```typescript
export default defineConfig({
  title: "My Knowledge Base",      // Your site title
  description: "...",              // Your description
  // ...
})
```

---

## Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
Push to GitHub, enable Pages in settings.

### Netlify
Connect repo, set build command: `npm run docs:build`

---

## License

MIT - Build your knowledge freely!

## Credits

Created by [ShanningZhuang](https://github.com/ShanningZhuang)

Built with Claude Code 🤖
