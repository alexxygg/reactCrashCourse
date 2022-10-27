const ClickHandler = () => {
  //Function declared inside our component function
  //The default event object returned, also a second parameter
  //we called count, with a default of 1
  const clickHandler = (e, count = 1) => {
    //We log our message, the count and the event object
    console.log("button clicked", count, e);
  };
  return (
    <>
      {/* We run the function on click */}
      <button onClick={clickHandler}>Click Me!</button>
      {/* We do the same, but with a count of 5 */}
      <button onClick={(e) => clickHandler(e, 5)}>Click Me 5 times!</button>
    </>
  );
};

export default ClickHandler;
