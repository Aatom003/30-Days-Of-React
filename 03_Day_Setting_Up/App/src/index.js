import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const header = (
  <header>
    <center>
      <h1 className="h1">SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates. </p>

      <table>
        <td>
          <input
            className="abc"
            type="text"
            name="name"
            placeholder="First name"
          />{" "}
          <input
            className="abc"
            type="text"
            name="name"
            placeholder="Last name"
          />{" "}
          <input className="abc" type="text" name="name" placeholder="Email" />{" "}
        </td>
      </table>

      <button
        type="button"
        onClick={console.log("hi")}
        className="btn btn-danger c_button"
      >
        SUBSCRIBE
      </button>
    </center>
  </header>
);

const main = (
  <main>
    {/* <table>
      <td classNameName="abc">
        <input type="text" name="name" placeholder="First name" />{" "}
        <input type="text" name="name" placeholder="Last name" />{" "}
        <input type="text" name="name" placeholder="Email" />{" "}
      </td>
    </table>
    <center>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
    </center> */}
  </main>
);

// JSX element, footer
const footer = (
  <div>
    {/* <center>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
    </center> */}
  </div>
);

// ReactDOM.render(jsxElement, rootElement);
ReactDOM.render(
  <React.StrictMode>
    {header}
    {main}
    {footer}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
