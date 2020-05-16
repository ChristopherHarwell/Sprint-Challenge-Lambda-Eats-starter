import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PizzaForm from "./components/PizzaForm";
import * as yup from "yup";
import Axios from "axios";

const App = () => {
  const [formState, setFormState] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  // state for post requests
  const [users, setUsers] = useState([]);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
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

  const inputChanged = (event) => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
  };

  // handle state when form is submitted
  const sumbitForm = (event) => {
    event.preventDefault();
    Axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setUsers([res.data, ...users]);

        // clear state after submitting
        setFormState({
          name: "",
        });
      })
      .catch((err) => console.error(err.res));
  };


  useEffect(() => {
    // when input is valid change button state
    formSchema
      .isValid(formState)
}, [formState]);

  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/pizza">
        <Button color="primary">Pizza</Button>
      </Link>
      <Link to="/">
        {/* - [ ] A homepage that has a "/" route
         and links to your form (button, nav bar,
          or any other type of link is acceptable) */}
        <Button color="success">Home</Button>
      </Link>
      <Switch>
        <Route path="/pizza">
          {/* - [ ] A form with a "/pizza" route */}
          <PizzaForm onChange={inputChanged} onSubmit={sumbitForm}/>
        </Route>
        <Route path="/">
          <h1>Lambda Eats</h1>
          <h2>Welcome to Lambda Eats</h2>
        </Route>
      </Switch>
    </>
  );
};
export default App;
