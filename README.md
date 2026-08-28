# Cava React Components

A first-pass callable code component library derived from Cava Figma `Page 2`.

This solves a different problem from `components.html`: OpenDesign can inspect a GitHub codebase and reuse named code components, while HTML uploaded as a file is only a reference.

Core mappings are stored in `figma-component-map.json`.

Recommended workflow:
1. Put this folder in a GitHub repository.
2. Give that GitHub repository URL to OpenDesign in the `GitHub or website` field.
3. Keep the parser-safe Cava DESIGN.md in OpenDesign's dedicated DESIGN.md field.
4. Tell OpenDesign to reuse these exports rather than redraw equivalents.
5. Once the GitHub URL exists, create Figma Code Connect mappings from the Figma master node IDs to these exact source files.
