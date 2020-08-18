import React from "react";
import "./Contact.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../actions";
import { login } from "../../actions";

function Contact() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="Contact">
      <button onClick={() => dispatch(login())}>LOG IN</button>
      {isLogged ? (
        <div>
          <h1>Counter {counter}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      ) : (
        <h1>You have to be logged in to display counter</h1>
      )}
    </div>
  );
}

export default Contact;
