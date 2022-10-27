import "./myStyles.css";

const Stylesheet = () => {
  //EXTERIOR CSS STYLESHEET
  //We create a css file, import it and now have access to any
  //classes declared there, we can use them with className
  return <h1 className="background color">Stylesheets</h1>;
  //Here we are using 2 different classes, one changes the
  //background-color, and the other the text color
};

export default Stylesheet;
