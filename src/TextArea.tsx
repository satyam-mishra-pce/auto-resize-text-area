import React, { useEffect, useRef, useCallback, useState } from "react";

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    /** Determines if the textarea should auto-resize based on its content. */
    autoResize?: boolean;
    /** Determines the default height or threshold height of the textarea in `px` after which the textarea resizes automatically.*/
    defaultHeight?: number;
    /**
     * Callback that is triggered each time the height of textarea changes.
     * Receives the new height in `px` (or `undefined` if reset) as its parameter.
     * Works only if `autoResize` is true.
     */
    onHeightChange?: (value: undefined | number) => void;
  };

/**
 * A textarea component that auto-resizes based on its content.
 */
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { autoResize = true, defaultHeight, onHeightChange, ...props },
    forwardedRef
  ) => {
    const innerRef = useRef<HTMLTextAreaElement | null>(null);
    const [contentBasedHeight, setContentBasedHeight] = useState<
      number | undefined
    >(defaultHeight);

    const setRef = useCallback(
      (element: HTMLTextAreaElement | null) => {
        innerRef.current = element;
        if (typeof forwardedRef === "function") {
          forwardedRef(element);
        } else if (forwardedRef) {
          forwardedRef.current = element;
        }
      },
      [forwardedRef]
    );

    const resizeTextArea = useCallback(() => {
      const textarea = innerRef.current;
      if (textarea && autoResize) {
        let newHeight: number | undefined;
        if (textarea.value === "") {
          newHeight = defaultHeight;
        } else {
          textarea.style.height = "auto";
          newHeight = Math.max(textarea.scrollHeight, defaultHeight ?? 0);
        }
        setContentBasedHeight(newHeight);
        textarea.style.height = newHeight ? newHeight + "px" : "";
      }
    }, [autoResize, defaultHeight, onHeightChange]);

    useEffect(() => {
      resizeTextArea();
    }, [resizeTextArea]);

    useEffect(() => {
      if (!autoResize) return;
      onHeightChange?.(contentBasedHeight);
    }, [contentBasedHeight]);

    return (
      <textarea
        ref={setRef}
        {...props}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          if (autoResize) {
            resizeTextArea();
          }
          props.onChange?.(event);
        }}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
