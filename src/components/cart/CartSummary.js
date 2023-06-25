import React, { Component } from "react";
import {
  Badge,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as cartActions from "../../redux/actions/cartActions";

class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown group>
        <Button color="warning">
          <Badge color="info" pill>
            {this.props.cart.length}
          </Badge>
        </Button>
        <DropdownToggle caret color="warning" />
        <DropdownMenu>
          <DropdownItem header>Cart List</DropdownItem>
          <DropdownItem divider />
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                pill
                onClick={() => this.props.actions.removeFromCart(cartItem.product)}
              >
                X
              </Badge>{" "}
              &nbsp;&nbsp;&nbsp;
              {cartItem.product.productName} -{" "}
              <Badge color="info" pill>
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem header>
            Total: {this.props.cart.length} Products
          </DropdownItem>
          <DropdownItem>
            <Link to="cart">Go To Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpty() {
    return (<span style={{color: 'white'}}>Cart Empty</span>);
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions:{
      removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
