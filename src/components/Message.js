import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Welcome Visitor");
  return (
    <>
      <h1>{message}</h1>
      {/* Our event, message changes onclick */}
      <button onClick={() => setMessage("Thank You!!!")}>Subscribe</button>{" "}
    </>
  );
};

export default Message;
