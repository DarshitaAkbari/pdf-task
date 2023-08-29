import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState();
  const handleSubmit = () => {
    console.log("Submit");
    if (input > 18) {
      inputRef.current.style.border = "1px solid red";
    }

    inputRef.current.style.color = "red";
  };
  return (
    <>
      <div>useRefHook</div>
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        ref={inputRef}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default UseRefHook;
