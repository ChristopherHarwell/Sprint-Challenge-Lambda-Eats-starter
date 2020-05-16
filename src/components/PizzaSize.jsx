import React from "react";
// import { NavBar, Nav, NavItem } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

// [x] Dropdown form component for pizza size
const PizzaSize = (props) => {
  return (
    <>
      <FormGroup className="dark">
        <h3>Choice of Size</h3>
      </FormGroup>
      <select type="select">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </>
  );
};

export default PizzaSize;
