import "./App.css";
import Greet from "./components/Greet";
import OurNotes from "./components/OurNotes";
import Message from "./components/Message";
import ClickHandler from "./components/ClickHandler";
import ParentComponent from "./components/ParentComponent";
import ConditionalGreet2options from "./components/ConditionalGreet";
import NameList from "./components/NameList";
//CSS
import Stylesheet from "./components/ExteriorStylesheet";
import InlineStylesheet from "./components/InlineStylesheet";
//src file css & MODULES CSS
import "./appStyles.css";
import styles from "./appStyles.module.css";
//FORM
import Form from "./components/Form";
//GET requests/POST requests
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <div className="App">
      {/* <Greet name="Alex" favHero="Batman" />
      <Greet name="John" favHero="Iron Man">
        <button>Hi, I'm a child button</button>
      </Greet> */}
      <Greet name="Jane" favHero="Green Lantern">
        <p>Child props</p>
      </Greet>
      <Message />
      {/* <OurNotes /> */}
      <ClickHandler />
      <ParentComponent />
      <ConditionalGreet2options />
      <NameList />
      <Stylesheet />
      <InlineStylesheet />
      <h1 className="error">/src File CSS .error</h1>
      <h1 className={styles.success}>/src File module.css .success</h1>
      <p>
        module CSS is locally-scoped, we can not reference its styles in a child
        component. It will result in a reference error. Inline and external CSS
        can lead to CSS conflicts, since THEY DO work anywhere else.
      </p>
      <Form />
      <PostList />
      <PostForm />
    </div>
  );
};

//This method of exporting allows us to import it with any
//other name in our App.js, as long as using that new name in the
//custom self-closing HTML tag </>
export default App;
//If we choose the export only method, (before the function name)
//We can only import with the name declared in the component's file

///////////////////////////////////
//A FEW RULES AND tips DUE TO VSX
//////////////////////////
//VSX is output, a syntax extension of JS, not HTML
//JS operations done inside {}
//className instead of class, since word is reserved
//htmlFor instead of for, same as above
//camelCase naming conventions (onclick => onClick, etc.)

//props is the conventional name given, it can be changed
//props themselves are immutable, their values can't be changed
//They are read-only, dynamism is done with "state"
//props get passed TO the component, state is managed WITHIN IT
//(FUNCTION PARAMETERS VS VARIABLES DECLARED IN FUNCTION BODY)
