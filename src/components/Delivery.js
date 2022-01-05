import React from "react";
import PropTypes from "prop-types";

class Delivery extends React.Component {
  static propTypes = {
    total: PropTypes.number,
  };

  render() {
    const { total } = this.props;
    const deliveryCost = total > 0 && total < 500 ? 350 : 99;
    const deliveryCostNeon =
      deliveryCost === 99 ? (
        <span className="font-effect-neon total_wrap-cheap">
          {deliveryCost} ₽
        </span>
      ) : (
        <span>{deliveryCost} ₽</span>
      );
    return (
      <div className="total">
        <div className="total_wrap">
          <div>
            <div>Delivery: {total > 0 ? deliveryCostNeon : null}</div>
            <div className="total_wrap-free">
              {total < 500
                ? `Add more ${500 - total} ₽ to get delivery only for 99 ₽`
                : null}
            </div>
          </div>
          <div className="total_wrap-final">Total: {total} ₽</div>
        </div>
      </div>
    );
  }
}
export default Delivery;
