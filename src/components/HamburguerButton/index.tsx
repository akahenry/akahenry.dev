import "./index.css";
import { useState } from "react";

export interface Properties {
  onClick: (setOpen: (isOpen: boolean) => void) => void;
}

export default function HamburgerButton(props: Properties) {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!isOpen);

    props.onClick(setOpen);
  };

  return (
    <button
      className={`hamburger ${isOpen ? "open" : ""}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
