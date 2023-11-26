import React from "react";

type Props = {
  children: string;
  onClick: () => void;
  className: string;
};
function Navbar({ children, onClick, className }: Props) {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
}

export default Navbar;
