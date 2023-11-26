import React, { useState } from "react";

type props = {
  children: string;
  //   onClick: () => void;
  //   pesan: string;
  //   updatePesan: any;
};
function Alert({ children }: props) {
  const [message, setMessage] = useState("hello my friend");
  const [color, setColor] = useState("red");

  const updateMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "hello my friend"
        ? "goodbye my friend"
        : "hello my friend"
    );
    setColor((prevColor) => (prevColor === "red" ? "green" : "red"));
  };

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={updateMessage}>{children}</button>
    </div>
  );
}

export default Alert;
