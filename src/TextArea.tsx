import React, { useEffect, useRef, useCallback } from "react";

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    /** Determines if the text area should auto-resize based on its content */
    autoResize?: boolean;
  };

/**
 * A text area component that auto-resizes based on its content.
 */
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ autoResize = true, ...props }, forwardedRef) => {
    const innerRef = useRef<HTMLTextAreaElement | null>(null);

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
        if (textarea.value === "") {
          textarea.style.height = "";
        } else {
          textarea.style.height = "auto";
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
      }
    }, [autoResize]);

    useEffect(() => {
      resizeTextArea();
    }, [autoResize, props.value, resizeTextArea]);

    return <textarea ref={setRef} {...props} />;
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
