import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { bindActionCreators } from "redux";

import Swal from "sweetalert2";

let style = { width: "19rem" };

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    this.addedSuccessAlert();
  };

  addedSuccessAlert = (productN) => {
    Swal.fire({
      title: productN,
      text: "added to cart successfully!",
      icon: "success",
      confirmButtonColor: "#000000",
    });
  };

  removeSuccessAlert = (productN) => {
    Swal.fire({
      title: productN,
      text: "remove from cart successfully!",
      icon: "success",
      confirmButtonColor: "#000000",
    });
  };
  render() {
    return (
      <div>
        <b>ProductList</b> &#62;{" "}
        <Badge color="primary">{this.props.currentCategory.categoryName}</Badge>
        <div className="d-flex flex-wrap">
          {this.props.products.map((product) => (
            <Card key={product.id} className="p-1 m-1" style={style}>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h6">{product.productName}</CardTitle>
                <CardText>{product.quantityPerUnit}</CardText>
                <Button
                  color="warning"
                  outline
                  size="sm"
                  onClick={() => this.addToCart(product)}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
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
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
