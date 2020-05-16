import React from "react";
// import { NavBar, Nav, NavItem } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";

const Sauce = (props) => {
  return (
    <>
      <FormGroup className="dark">
        <h3>Choice of Sauce</h3>
      </FormGroup>
      <FormGroup check>
        <Input
          type="radio"
          value="original-red"
          checked={props.checked}
          onChange={props.onChange}
        />
        Original Red
      </FormGroup>
      <FormGroup check>
        <Input
          type="radio"
          value="Garlic-Ranch"
          checked={props.checked}
          onChange={props.onChange}
        />
        Garlic Ranch
      </FormGroup>
      <FormGroup check>
        <Input
          type="radio"
          value="BBQ-Sauce"
          checked={props.checked}
          onChange={props.onChange}
        />
        BBQ Sauce
      </FormGroup>
      <FormGroup check>
        <Input
          type="radio"
          value="Spinach-Alfredo"
          checked={props.checked}
          onChange={props.onChange}
        />
        Spinach Alfredo
      </FormGroup>
    </>
  );
};

export default Sauce;
