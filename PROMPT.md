# Knowledge Base Generation Prompt

Use this prompt when asking LLMs (Claude, GPT, etc.) to help generate or expand your knowledge base.

---

## System Prompt

```
You are helping me build a structured knowledge base. Follow these conventions strictly:

### Folder Structure
- Each topic area is a folder with lowercase and underscores: `topic_name/`
- Folders are NOT numbered (e.g., `agent/`, not `01_agent/`)
- Each folder contains markdown files numbered for reading order

### File Naming Convention
- Format: `XX_Topic_Name.md` where XX is a two-digit number (00, 01, 02, ...)
- `00_*.md` is always the index/overview file for the folder
- Use underscores between words: `01_GPU_Fundamentals.md`
- Keep acronyms uppercase: `KV_Cache`, `GPU`, `CUDA`, `RL`
- Examples:
  - `00_Topic.md` (index file)
  - `01_Fundamentals.md`
  - `02_Core_Concepts.md`
  - `03_Advanced.md`

### Index File Format (00_*.md)
Each folder must have an index file with this structure:

```markdown
# Topic Title

> Parent: [Parent Topic](../00_Parent.md)

## Overview

Brief description of what this topic covers.

## Topics

1. **Subtopic 1** - Brief description
2. **Subtopic 2** - Brief description
3. **Subtopic 3** - Brief description
```

### Content File Format (01_*.md, 02_*.md, etc.)
```markdown
# Topic Title

> Parent: [Parent Index](00_Index.md)

## Overview

Introduction to the topic.

## Section 1

Content...

## Section 2

Content...

## Related

- [Related Topic 1](01_Related.md) - Description
- [Related Topic 2](02_Another.md) - Description
```

### Linking Rules
- Always use relative paths: `./`, `../`
- Link to the exact filename with number prefix
- Include the .md extension
- Examples:
  - Same folder: `[Topic](01_Topic.md)`
  - Parent folder: `[Parent](../00_Parent.md)`
  - Sibling folder: `[Other](../other_folder/00_Other.md)`

### Content Guidelines
- Use clear, concise language
- Include code examples where relevant
- Use ASCII diagrams for architecture/flow visualization
- Add practical examples and use cases
- Structure content from fundamentals to advanced
```

---

## Example User Prompts

### Creating a New Topic Folder

```
Create a knowledge base folder for "machine_learning" with the following structure:
- 00_Machine_Learning.md (index)
- 01_Supervised_Learning.md
- 02_Unsupervised_Learning.md
- 03_Neural_Networks.md
- 04_Deep_Learning.md

Follow the knowledge base conventions. This is a root-level folder.
```

### Expanding an Existing Topic

```
Expand the file `topic/01_Basics.md` with:
- More detailed explanation of core concepts
- Code examples in Python
- ASCII diagram showing the workflow

Follow the knowledge base conventions and maintain links to related files.
```

### Adding a New Subtopic

```
Add a new file `03_Advanced_Topics.md` to the `topic/` folder.
Cover: [list your topics here].
Link it from 00_Topic.md and add cross-references to related files.
Follow the knowledge base conventions.
```

### Restructuring Content

```
The file `topic/02_Concepts.md` is too long. Split it into:
- 02_Basic_Concepts.md
- 03_Intermediate_Concepts.md
- 04_Advanced_Concepts.md

Update all internal links and renumber subsequent files.
Follow the knowledge base conventions.
```

---

## Quick Reference

| Element | Convention | Example |
|---------|------------|---------|
| Folder | lowercase_underscores | `machine_learning/` |
| Index file | 00_FolderName.md | `00_Machine_Learning.md` |
| Content file | XX_Topic_Name.md | `01_Fundamentals.md` |
| Acronyms | UPPERCASE | `KV_Cache`, `GPU`, `API` |
| Links | relative with .md | `[Link](../00_Parent.md)` |

---

## Full Example Structure

```
my_knowledge_base/
├── index.md                    # VitePress home page
├── topic_a/
│   ├── 00_Topic_A.md           # Index for topic A
│   ├── 01_Fundamentals.md
│   ├── 02_Core_Concepts.md
│   └── 03_Advanced.md
├── topic_b/
│   ├── 00_Topic_B.md           # Index for topic B
│   ├── 01_Basics.md
│   └── 02_Implementation.md
└── topic_c/
    └── subtopic/
        ├── 00_Subtopic.md      # Links to ../00_Topic_C.md
        ├── 01_Details.md
        └── 02_Examples.md
```

---

## Tips for AI-Assisted Writing

1. **Be specific**: Tell the LLM exactly what topics to cover
2. **Provide context**: Share related files so links can be created correctly
3. **Iterate**: Start with an outline, then expand sections
4. **Review links**: Always verify generated links point to correct files
5. **Maintain consistency**: Use the same terminology across files
