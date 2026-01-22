# Getting Started

Welcome to your new knowledge base!

## Adding Content

Simply create markdown files anywhere in the project:

```
my-kb/
├── topic1/
│   ├── note1.md
│   └── subtopic/
│       └── note2.md
├── topic2/
│   └── note3.md
└── index.md
```

The sidebar is **automatically generated** from your folder structure.

## Math Support

### Inline Math

Use `$...$` or `\(...\)` for inline math:

- Einstein's equation: $E = mc^2$
- Greek letters: \(\alpha, \beta, \gamma\)
- Subscripts: $x_1, x_2, x_n$

### Display Math

Use `$$...$$` or `\[...\]` for display math:

$$
\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

\[
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix}
\]

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

See the deployment guide in the README.

## Customization

Edit `.vitepress/config.ts` to:

- Change the site title
- Add navigation items
- Configure excluded files
- Customize the theme
