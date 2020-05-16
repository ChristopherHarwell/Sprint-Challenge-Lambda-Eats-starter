import React from "react";
// import { NavBar, Nav, NavItem } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link, Route } from "react-router-dom";
import PizzaSize from "./PizzaSize";
import Sauce from "./Sauce";
import Toppings from "./Toppings";
import Substitute from "./Substitute";
import SpecialInstructions from "./SpecialInstructions";
import NameInput from "./NameInput";

// [ ] Text input form component for special instructions
const PizzaForm = (props) => {
  return (
    <>
      <Route path="/pizza">
        <Form onSubmit={props.onSubmit}>
          <h3>Build Your Own Pizza</h3>
          <NameInput onChange={props.onChange}/>
          <PizzaSize />
          <Sauce checked={props.checked} onChange={props.onChange}/>
          <Toppings checked={props.checked} input={props.onChange}/>
          <Substitute onChange={props.onChange}/>
          <SpecialInstructions />
        </Form>
      </Route>
    </>
  );
};
export default PizzaForm;
