import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar className="my-2" color="dark" dark>
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="/logo192.png"
              style={{
                height: 40,
                width: 40,
              }}
            />
            Reactstrap
          </NavbarBrand>
            <CartSummary></CartSummary>
        </Navbar>
      </div>
    );
  }
}
