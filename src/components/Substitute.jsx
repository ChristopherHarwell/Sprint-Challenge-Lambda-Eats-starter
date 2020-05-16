import React from "react";
import { FormGroup, Input } from "reactstrap";

const Substitute = (props) => {
  return (
    <>
      <FormGroup className="dark" check>
        <h3>Choice of Substitute</h3>
        <p>Choose up to 1</p>
        <Input type="checkbox" onChange={props.onChange}/>
        <p>Gluten Free Crust (+ $1.00)</p>
      </FormGroup>
    </>
  );
};

export default Substitute;
