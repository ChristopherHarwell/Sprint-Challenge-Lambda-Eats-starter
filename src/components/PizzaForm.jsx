import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Form, Input, FormGroup, Button, Label } from "reactstrap";
import * as yup from "yup";

// [ ] Text input form component for special instructions

const PizzaForm = (props) => {
  const [formInput, setFormInput] = useState({
    name: "",
    pizzaSize: "",
    sauces: "",
    toppings: "",
    specialInstructions: "",
    substitute: "",
  });

  // state for errors
  const [errors, setErrors] = useState({
    name: "",
    pizzaSize: "",
    sauces: "",
    toppings: "",
    specialInstructions: "",
    substitute: "",
  });

  // state for post requests
  const [order, setOrder] = useState([]);

  const inputChanged = (e) => {
    e.persist();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    let checkboxValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    validateChange(e);
  };

  // use yup to create form schema
  const formSchema = yup.object().shape({
    name: yup.string().min(2).required("Name is a required field"),
    pizzaSize: yup.string().required("Select a valid pizza size"),
    specialInstructions: yup.string(),
    sauces: yup.boolean(),
    toppings: yup.array(),
    substitute: yup.boolean(),
  });

  // validate changes based on schema
  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });
  };

  // handle state when form is submitted
  const sumbitForm = (event) => {
    event.preventDefault();
    Axios.post("https://reqres.in/api/users", formInput)
      .then((res) => {
        setOrder([res.data, ...order]);
        console.log(res);
        // clear state after submitting
        setFormInput({
          name: "",
          pizzaSize: "",
          sauces: "",
          toppings: "",
          specialInstructions: "",
        });
      })
      .catch((err) => console.error(err.res));
  };
  return (
    <>
      <Route path="/pizza">
        <Form onSubmit={sumbitForm}>
          <h3>Build Your Own Pizza</h3>
          <FormGroup>
            {/* A name text input field */}
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              placeholder="name"
              value={formInput.name}
              onChange={inputChanged}
            />
            {errors.name.length > 2 ? (
              <p>name must be longer than two characters</p>
            ) : null}
          </FormGroup>

          <FormGroup className="dark">
            <Label width="md">Choice of Size</Label>

            <Input
              type="select"
              value={formInput.pizzaSize}
              name="pizzaSize"
              id="sizes"
              onChange={inputChanged}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </Input>
          </FormGroup>
          <FormGroup className="dark">
            <h3>Choice of Sauce</h3>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              value="original-red"
              onChange={inputChanged}
              name="sauces"
              checked={formInput.radio}
            />
            Original Red
          </FormGroup>
          <FormGroup check>
            <Input
              name="sauces"
              type="radio"
              value="Garlic-Ranch"
              onChange={inputChanged}
            />
            Garlic Ranch
          </FormGroup>
          <FormGroup check>
            <Input
              name="sauces"
              type="radio"
              value="BBQ-Sauce"
              onChange={inputChanged}
            />
            BBQ Sauce
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="sauces"
              value="Spinach-Alfredo"
              onChange={inputChanged}
            />
            Spinach Alfredo
          </FormGroup>
          <FormGroup className="dark">
            <h3>Add Toppings</h3>
            Choose up to 10
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Pepporoni
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Sausage
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Canadian Bacon
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Spicy Italian Sausage
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Grilled Chicken
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Onions
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Green Pepper
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Diced Tomatoes
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Black Olives
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Roasted Garlic
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Artichoke Hearts
          </FormGroup>
          <FormGroup check>
            <Input
              data-cy="topping1"
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Three Cheese
          </FormGroup>
          <FormGroup check>
            <Input
              data-cy="topping2"
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Pineapple
          </FormGroup>
          <FormGroup check>
            <Input
              data-cy="topping3"
              type="checkbox"
              name="toppings"
              onChange={inputChanged}
            />
            Extra Cheese
          </FormGroup>
          <FormGroup className="dark" check>
            <h3>Choice of Substitute</h3>
            <p>Choose up to 1</p>
            <Input name="substitute" type="checkbox" onChange={inputChanged} />
            <p>Gluten Free Crust (+ $1.00)</p>
          </FormGroup>
          <FormGroup className="dark">
            <h2>Special Instructions</h2>

            <input
              type="textarea"
              name="specialInstructions"
              placeholder="Anything else you'd like to add?"
              id="instructions"
              onChange={inputChanged}
              value={formInput.specialInstructions}
            />
          </FormGroup>

          <Button data-cy="submit" color="primary">
            Submit
          </Button>
        </Form>
      </Route>
    </>
  );
};
export default PizzaForm;
