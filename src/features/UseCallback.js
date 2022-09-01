import { useState, useEffect, useCallback } from "react";

// This example component uses the useCallback hook in react
const UseCallback = () => {
  const [userInput, setUserInput] = useState("");
  const [num1] = useState(4);
  const [num2] = useState(5);

  // WRONG WAY TO DEFINE SUM
  // const sum = () => num1 + num2;

  // CORRECT WAY TO DEFINE SUM
  const sum = useCallback(() => num1 + num2, [num1, num2]);

  useEffect(() => {
    // This effect will run every time the value of the input field of this component changes
    // if the sum function is not wrapped in useCallback. This may not be obvious because as it
    // is written, nothing is changing in the sum function. However, because functions don't have 
    // referential equality, two instances of a function are not equal (===) to each other. Since
    // this component has an input box with an onChange function that is updating component state,
    // the component will be rerendered every time the state changes. Rerendering the component will 
    // recreate the sum function, this new sum function is not === to the old sum function which 
    // means the dependency array of this useEffect changed and the effect runs again. The 
    // useCallback hook creates a memoized version of the function which will remain the same 
    // between component rerenders, unless the dependency array of the useCallback changes. 
    // This behavior is called memoization. The useCallback hook creates a memoized version of the
    // function it is wrapping.
    console.log(`New sum. Value: ${sum()}`);
  }, [sum]);
  return (
    <section>
      <h1>useCallback</h1>
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h2>Output: {userInput || ""}</h2>
    </section>
  );
};

export default UseCallback;
