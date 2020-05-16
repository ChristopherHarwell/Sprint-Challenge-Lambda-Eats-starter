import React from "react";
import { FormGroup, Input } from "reactstrap";

const NameInput = (props) => {

  return (
    <>
      <FormGroup onChange={props.onChange}>
          {/* A name text input field */}
          <Input type='textarea' placeholder='name'/>
      </FormGroup>
    </>
  );
};

export default NameInput;
