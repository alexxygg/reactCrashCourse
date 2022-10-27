import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  //We create an argument, so when we pass in a parameter
  //from our childComponent it is read in our string template
  //literal value.
  const greetParent = (childName) => {
    //For this to work, we need to use a callback function in
    //our childComponent's onClick value between curly braces...
    //Normally we would just reference the function without executing. This is also done when trying to listen to
    //an event handler with multiple functions to be executed!
    //Whatever value we want for our parameter is entered between parenthesis on the function's execution.
    alert(`Hello Parent! Message from: ${childName}`);
  };
  const hoverParentBlue = () => {
    document.body.style.backgroundColor = "blue";
  };

  return (
    <ChildComponent
      greetHandler={greetParent}
      hoverHandlerBlue={hoverParentBlue}
    />
  );
};

export default ParentComponent;
