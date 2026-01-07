# Copilot Instructions for DLang42.github.io

This repository hosts a simple static personal website deployed via GitHub Pages.

## Architecture Overview
- **Main Entry Point**: `index.html` - Single-page HTML structure with navigation and content sections.
- **Styling**: `styles.css` - Minimal CSS for layout and appearance.
- **No Build Process**: Files are served directly; no compilation or bundling required.
- **Deployment**: Automatic via GitHub Pages on pushes to `main` branch.

## Key Components
- Navigation bar (`#navBar` in `index.html`): Horizontal menu with anchor links to page sections.
- Content area (`#bodyDiv` in `index.html`): Main content container.
- Outer wrapper (`#outerDiv` in `index.html`): Top-level container for layout.

## Developer Workflows
- **Editing Content**: Modify `index.html` directly for HTML changes.
- **Styling Updates**: Edit `styles.css` for visual adjustments.
- **Deployment**: Commit changes to `main` branch; GitHub Pages handles publishing.
- **No Local Server Needed**: View changes by opening `index.html` in a browser.

## Code Patterns
- **HTML Structure**: Uses semantic elements like `<h1>`, `<p>`, with ID-based sections.
- **CSS Selectors**: Primarily ID selectors (e.g., `#navBar { background-color: #333; }`).
- **No External Dependencies**: Pure HTML/CSS, no frameworks or libraries.
- **Navigation**: Anchor links for internal page sections (e.g., `<a href="#about">About</a>`).

## Conventions
- Keep styles minimal and directly in `styles.css`.
- Use descriptive IDs for elements (e.g., `navBar`, `bodyDiv`).
- Content is static; no dynamic features or JavaScript.

Reference: `index.html` for page structure, `styles.css` for styling examples.