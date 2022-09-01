import { useState, useMemo, useEffect } from "react";

// The fibonacci function is an example of a slow/expensive function that is a good candidate for useMemo
const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

const UseMemo = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  // The useMemo hook will memoize the output of a function, meaning that function won't be rerun upon
  // every component rerender. This is especially valuable functionality if you are making use of a
  // slow/expensive function in your component because you only want that function to recalculate the 
  // output if it is absolutely necessary. In this example component, if useMemo isn't implemented the
  // fibonacci calculation will happen everytime the component rerenders. React components rerender upon
  // state change. This example component is updating state with every keystroke typed inside of the random
  // input field and there would be a very noticeable delay between the user typing and their input being 
  // displayed if the requested fibonacci position is above about 25.

  // Wrong way to use the slow/expensive function
  // const fibNumber = fib(userNumber);

  // Right way to use the slow/expensive function
  const fibNumber = useMemo(() => fib(userNumber), [userNumber]);

  return (
    <section>
      <h1>useMemo</h1>
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || ""}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </section>
  );
};

export default UseMemo;
