import { useReducer } from "react";

// To avoid typos, it is a good idea to define an actions
// object. This object can be used in the switch statement
// in the reducer, as well as in the dispatch functions
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  TGDARK: "toggle",
};

// This is the reducer function that will be passed to the
// useReducer hook. It could be imported from another file,
// or passed in as a prop to this component
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.TGDARK:
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  // The useReducer hook is useful if your component has
  // multiple pieces of states to manage. The useReducer hook
  // returns a state object, and a dispatch function and takes
  // a reducer function and initial state object as arguments
  const [state, dispatch] = useReducer(reducer, { count: 0, darkMode: false });
  // The dispatch function takes an object with a type property as 
  // seen below. This type maps to the reducer's action.type

  return (
    <section>
      <h1>useReducer</h1>
      <div className={`box ${state.darkMode ? "dark" : ""}`}>
        <p>{state.count}</p>
        <div>
        
          <button onClick={() => dispatch({ type: ACTION.INCREMENT })}> 
            +
          </button>
          <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
            -
          </button>
          <button onClick={() => dispatch({ type: ACTION.TGDARK })}>
            Light/Dark Mode
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseReducer;
