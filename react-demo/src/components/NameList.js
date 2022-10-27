const NameList = () => {
  const names = ["Bruce", "Clark", "Diana", "Barry"];
  return (
    <>
      {/* We use the map method to return an h2 with every name
      since it will iterate through our names array, they will all
      be inside a div, name is inside curly braces so as to populate
      its value when rendering (Since we started using HTML syntax again) */}
      {names.map((name) => {
        //To prevent key prop message:
        // Warning: Each child in a list should have a unique "key" prop.
        return <h2 key={name}>{name}</h2>;
        //The key won't affect UI, only relevant to REACT
      })}
    </>
  );
};

export default NameList;
