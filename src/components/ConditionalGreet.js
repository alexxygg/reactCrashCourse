const ConditionalGreet2options = () => {
  const isLoggedIn = false;
  //We check if user is logged in,
  //If so, we display username, else guest
  //All JS done in curly braces, ternary operator here...
  return <div>Welcome! {isLoggedIn ? "Alex" : "guest"}</div>;
};
const ConditionalGreetANDoption = () => {
  const isLoggedIn = false;
  //If we want to EITHER show SOMETHING or NOTHING instead of two options...
  //This will check if isLoggedIn is true, it will render JSX to the right of && operator.
  return <div>Welcome! {isLoggedIn && "Alex"}</div>;
};
export default ConditionalGreet2options;

// export default ConditionalGreetANDoption
