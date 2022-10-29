const ChildComponent = (props) => {
  return (
    <>
      <button
        onClick={() => {
          props.greetHandler("child");
          props.hoverHandlerBlue();
        }}
      >
        Greet Parent Blue
      </button>
    </>
  );
};

export default ChildComponent;
