import React from "react";
import "./styles.css";

interface Props {
  isOpen: boolean;
  onDabaya: () => any;
}

const Opener = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      onClick={props.onDabaya}
      className={`opener ${props.isOpen ? "opener-active" : ""}`}
    ></div>
  );
});

export default Opener;
