import "./styles.css";
import Popout from "./popout";
import Opener from "./opener";
import { useEffect, useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onKeyPress = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.which === 192) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  });

  return (
    <div className="App">
      {/* <button onClick={() => setIsOpen(!isOpen)}>Click me</button> */}
      <Popout isOpen={isOpen} onDabaya={() => setIsOpen(false)} />
      <Opener isOpen={isOpen} onDabaya={() => setIsOpen(true)} />
    </div>
  );
}
