import React from "react";
import { FormGroup, Input } from "reactstrap";

const Toppings = (props) => {
  return (
    <>
      <FormGroup className="dark">
        <h3>Add Toppings</h3>
        Choose up to 10
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="pepperoni"
          checked={props.checked}
          onChange={props.input}
        />
        Pepporoni
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Sausage"
          checked={props.checked}
          onChange={props.input}
        />
        Sausage
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Canadian-Bacon"
          checked={props.checked}
          onChange={props.input}
        />
        Canadian Bacon
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Spicy-Italian-Sausage"
          checked={props.checked}
          onChange={props.input}
        />
        Spicy Italian Sausage
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Grilled-Chicken"
          checked={props.checked}
          onChange={props.input}
        />
        Grilled Chicken
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Onions"
          checked={props.checked}
          onChange={props.input}
        />
        Onions
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Green-Pepper"
          checked={props.checked}
          onChange={props.input}
        />
        Green Pepper
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Diced-Tomatoes"
          checked={props.checked}
          onChange={props.input}
        />
        Diced Tomatoes
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Black-Olives"
          checked={props.checked}
          onChange={props.input}
        />
        Black Olives
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Roasted-Garlic"
          checked={props.checked}
          onChange={props.input}
        />
        Roasted Garlic
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Artichoke-Hearts"
          checked={props.checked}
          onChange={props.input}
        />
        Artichoke Hearts
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Three-Cheese"
          checked={props.checked}
          onChange={props.input}
        />
        Three Cheese
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Pineapple"
          checked={props.checked}
          onChange={props.input}
        />
        Pineapple
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          value="Extra-Cheese"
          checked={props.checked}
          onChange={props.input}
        />
        Extra Cheese
      </FormGroup>
    </>
  );
};

export default Toppings;
