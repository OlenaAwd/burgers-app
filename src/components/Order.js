import React from "react";
import PropTypes from "prop-types";
import Delivery from "./Delivery";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  static propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func,
  };

  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 },
    };

    if (!burger) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li className="unavailable" key={key}>
            Sorry, {burger ? burger.name : "burger"} temporary is unavailable
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            pcs.{burger.name}
            <span>{count * burger.price}₽</span>
            <button
              onClick={() => this.props.deleteFromOrder(key)}
              className="cancellItem"
            >
              &times;
            </button>
          </span>
          {key}
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }

      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        {total > 0 ? (
          <Delivery total={total} />
        ) : (
          <div className="nothingSelected">
            Please, chose the dishes and add to your order
          </div>
        )}
      </div>
    );
  }
}

export default Order;
