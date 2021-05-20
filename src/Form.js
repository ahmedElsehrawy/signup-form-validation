import React, { useState } from "react";
import FormImage from "./FormImage";
import FormSignUp from "./FormSignUp";
import "./Form.css";
import FormSuccess from "./FormSuccess";
const Form = () => {
  const [signedup, setSignedup] = useState(false);
  return (
    <div className="form">
      <FormImage />
      {signedup ? <FormSuccess /> : <FormSignUp setSignedup={setSignedup} />}
    </div>
  );
};

export default Form;
