import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

let style = { width: "19rem" };

class CartDetail extends Component {
  render() {
    return (
      <div>
        <b>Cart</b> &#62;
        <div className="d-flex flex-wrap">
          {this.props.cart.map((cartItem) => (
            <Card key={cartItem.id} className="p-1 m-1" style={style}>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h6">{cartItem.productName}</CardTitle>
                <CardText>{cartItem.quantityPerUnit}</CardText>
                <Button
                  color="danger"
                  outline
                  size="sm"
                  onClick={() => this.props.actions.removeFromCart(cartItem)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
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
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
