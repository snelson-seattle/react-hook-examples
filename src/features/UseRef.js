import { useRef, useState } from "react";

const UseRef = () => {
  const [randomInput, setRandomInput] = useState("");

  // The useRef hook has two important features:
  // 1) The value persists (does not change upon component rerender)
  // 2) Updating the reference does not trigger a component rerender
  const renders = useRef(0); // The value of zero is assigned to this ref

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    // Because the renders const doesn't get recreated upon component rerender
    // it is used in this example to keep track of how many times the component
    // has been rerendered counting up from our initial value of zero that
    // was set when the ref was defined.
    renders.current++;
  };

  // The useRef hook can also be used to get a reference to a jsx element in
  // our component. When using the ref this way, an initial value is not
  // needed.
  const inputRef = useRef();

  const focusOnInput = () => {
    // A ref to a jsx element can be used to do things like set focus on that
    // element.
    inputRef.current.focus();
  };

  return (
    <section>
      <h1>useRef</h1>
      <input
        // You assign your ref variable to the ref attribute of the jsx element
        // like so
        ref={inputRef}
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders: {renders.current}</p>
      <br />
      <br />
      <button onClick={focusOnInput}>Focus</button>
      <br />
      <br />
      <p>{randomInput}</p>
    </section>
  );
};

export default UseRef;
