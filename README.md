# React Auto-Resize TextArea Component

A customizable and accessible auto-resizing textarea component for React, built with TypeScript.

### Features

- **Auto-Resizing**: The textarea automatically adjusts its height based on the content, providing a seamless user experience.
- **Customizable Default Height**: Set a default height for the textarea, and it will only resize when the content exceeds this threshold.
- **Real-time Resize Handling**: The component resizes in real-time as the user types, ensuring that all content is visible without the need for scrolling.
- **Height Change Callback**: Optionally provide a callback function to be notified whenever the textarea's height changes, useful for advanced UI scenarios.
- **Fully Accessible**: The component passes through all standard textarea attributes, including accessibility attributes (aria-\*), ensuring compliance with accessibility standards.

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
        defaultHeight={100}
        placeholder="Type here..."
      />
    </div>
  );
};

export default App;
```

### Props

| **Prop Name**    | **Type**                                               | **Mandatory** | **Default Value** | **Description**                                                                                                                                                                |
| ---------------- | ------------------------------------------------------ | ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `autoResize`     | `boolean`                                              | No            | `true`            | If `true`, the textarea will automatically resize based on its content.                                                                                                        |
| `defaultHeight`  | `number \| undefined`                                  | No            | `undefined`       | Sets the default height of the textarea in `px`. The textarea does not resize until the content fits within this height.                                                       |
| `onHeightChange` | `(height: undefined \| number) => void` \| `undefined` | No            | `undefined`       | A callback function that is triggered every time the textarea resizes. Receives the new height (or `undefined` if reset) as its parameter. Works only if `autoResize` is true. |
| `...props`       | `React.TextareaHTMLAttributes`                         | N/A           | N/A               | All other standard textarea attributes, including accessibility attributes (e.g., `aria-*`), are passed through to the underlying `textarea` element.                          |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
