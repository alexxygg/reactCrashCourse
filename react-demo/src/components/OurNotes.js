const OurNotes = () => {
  return (
    <>
      <h3>A FEW RULES AND tips DUE TO VSX</h3>
      <p>VSX is output, a syntax extension of JS, not HTML</p>
      <p>className instead of class, since word is reserved</p>
      <p>htmlFor instead of for, same as above</p>
      <p>camelCase naming conventions (onclick => onClick, etc.)</p>
      <p>JS operations done inside {}</p>
      <h3>props vs state</h3>
      <p>props is the conventional name given, it can be changed</p>
      <p>props themselves are immutable, their values can't be changed </p>
      <p>They are read-only, dynamism is done with "state"</p>
      <p>props get passed TO the component, state is managed WITHIN IT</p>
      <p>(FUNCTION PARAMETERS VS VARIABLES DECLARED IN FUNCTION BODY)</p>{" "}
      <p>props attribute vs useState (Hook)</p>
      <h3>useState HOW-TO</h3>
      <p>
        WE NEED : import "useState" from "react"; (useState in curly braces)
      </p>
      <p>THEN we can use it inside our component's function:</p>
      <p> const [message, setMessage] = useState("Hello Visitor");</p>
      <p>The value entered inside useState will be the default!!!</p>
      <p>
        The 2 values can be called any way, but it makes sense to use the
        component's declared name.
      </p>
      <p>So instead of : return h3.Welcome visitor.h3;</p>
      <p>
        WE USE: return h3 message h3 (message in curly braces and AFTER our
        const[x,setX])
      </p>
      <p>
        The second const from [] is used to change the value of the first const.
      </p>
      <p>
        {" "}
        +button+ onClick=curly() => setMessage("Thank You!!!")curly+ Subscribe
        +/button+
      </p>
      <h3>Hooks</h3>
      <p>They are special functions that let us "hook into" react features.</p>
      <p>For example: useStare, useReducer, useEffect, + MORE</p>
    </>
  );
};

export default OurNotes;
