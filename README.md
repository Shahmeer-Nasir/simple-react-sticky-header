# Simple React Sticky Header

A lightweight, customizable sticky header component for React projects.

---

## Table of Contents

- [Simple React Sticky Header](#simple-react-sticky-header)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
  - [Props](#props)
  - [Styling](#styling)
  - [Examples](#examples)
    - [Hide on Scroll Down, Show on Scroll Up](#hide-on-scroll-down-show-on-scroll-up)
  - [License](#license)

---

## Installation

Install the package via npm:

```bash
npm install @shahmeernasir/simple-react-sticky-header
```

> Requires `react` and `react-dom` as peer dependencies.

---

## Features

- ⚡ **Lightweight**: Minimal footprint and easy to integrate.
- 🎯 **Customizable**: Control scroll behavior via props and CSS.
- 🧩 **No Runtime Dependencies** (other than React).
- ✅ **TypeScript Support**: Fully typed props and return types.
- 🛠️ **Modern Tooling**: Built with Vite and TypeScript.

---

## Usage

```tsx
import React from 'react';
import StickyHeader from '@shahmeernasir/simple-react-sticky-header';
import './App.css'; // Your global styles

function App() {
  return (
    <>
      <StickyHeader
        className="my-header"
        style={{ backgroundColor: '#fff' }}
        onHeaderHeightChange={(height) => console.log('Header height:', height)}
        addScrollClassesOnBody={true}
        addScrollClassesOnHeader={true}
      >
        <nav>
          <h1>My Website</h1>
        </nav>
      </StickyHeader>

      <main>
        <p>Page content...</p>
      </main>
    </>
  );
}

export default App;
```

---

## Props

| Prop                        | Type                           | Default | Description                                                 |
|-----------------------------|--------------------------------|---------|-------------------------------------------------------------|
| `children`                  | `ReactNode`                    | —       | Header content (e.g., `<nav>`, `<div>`).                    |
| `className`                 | `string`                       | `""`    | Additional class names.                                     |
| `style`                     | `React.CSSProperties`          | —       | Inline style object.                                        |
| `onHeaderHeightChange`      | `(height: number) => void`     | —       | Callback with header height.                                |
| `addScrollClassesOnBody`    | `boolean`                      | `true`  | Add scroll classes to `<body>`.                             |
| `addScrollClassesOnHeader`  | `boolean`                      | `true`  | Add scroll classes to header element.                       |

---

## Styling

You can use global CSS:

```css
.simple-react-sticky-header {
  position: sticky;
  top: 0;
  z-index: 999;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.scrolling-up {
  transform: translateY(0%);
}

.scrolling-down {
  transform: translateY(-100%);
}
```

> You can control whether the scroll classes are applied to `body`, header, or both via props.

---

## Examples

### Hide on Scroll Down, Show on Scroll Up

```css
.simple-react-sticky-header.scrolling-down {
  transform: translateY(-100%);
}

.simple-react-sticky-header.scrolling-up {
  transform: translateY(0%);
}
```

---

## License

MIT © [shahmeernasir](https://www.npmjs.com/~shahmeernasir)
