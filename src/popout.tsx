import React, { useEffect, useRef } from "react";
import "./styles.css";

interface Props {
  isOpen: boolean;
  onDabaya: () => any;
}

const Popout = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isOpen } = props;

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [isOpen]);

  return (
    <div
      onClick={props.onDabaya}
      className={`popout ${isOpen ? "" : "active"}`}
    >
      <input ref={inputRef} />
    </div>
  );
});

export default Popout;
