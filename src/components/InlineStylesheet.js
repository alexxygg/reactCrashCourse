const InlineStylesheet = () => {
  //INLINE STYLES Must be declared in an object, CAMELCASE IS
  //IMPORTANT, each separated by a comma.
  const headerStyles = {
    color: "red",
    backgroundColor: "blue",
  };

  return <h1 style={headerStyles}>Inline Stylesheets</h1>;
};

export default InlineStylesheet;
