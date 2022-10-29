function Greet(props) {
  return (
    <>
      <h4>
        Hello {props.name}, your favorite superhero is {props.favHero}.
      </h4>
      <p>{props.children}</p>
    </>
  );
}

export default Greet;
