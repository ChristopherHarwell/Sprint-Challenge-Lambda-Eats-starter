import React from "react";
import { FormGroup, Input } from "reactstrap";

const SpecialInstructions = (props) => {
  return (
    <>
      <FormGroup className="dark">
        <h2>Special Instructions</h2>

        <Input
          type="textarea"
          placeholder="Anything else you'd like to add?"
          onChange={props.onChange}
        />
      </FormGroup>
    </>
  );
};
export default SpecialInstructions;
