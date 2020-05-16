import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PizzaForm from "./components/PizzaForm";
import * as yup from "yup";
import Axios from "axios";

const App = () => {


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
