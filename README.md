# React Auto-Resize TextArea Component

A customizable and accessible auto-resizing textarea component for React, built with TypeScript.

## Features

- **Auto-resize**: Automatically adjusts its height based on the content.
- **Real-time resizing**: Resizes in real-time without debouncing.
- **Accessibility**: Fully accessible with support for all `aria-*` attributes.
- **Customizable**: Supports user-defined minimum and maximum heights.
- **TypeScript support**: Written in TypeScript with complete type definitions.

## Installation

You can install the package via npm:

```bash
npm install react-auto-resize-textarea
```

## Usage

Here’s an example of how to use the auto-resize textarea component in your React application:

```js
import React, { useState } from "react";
import { TextArea } from "react-auto-resize-textarea";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor="example">Your text:</label>
      <TextArea
        id="example"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoResize
        placeholder="Type here..."
      />
    </div>
  );
};

export default App;
```

### Props

- `autoResize` (boolean): Enable or disable auto-resize functionality.
- All other props supported by the native HTML `<textarea>` element are also supported.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
