import React from "react";

const Price = ({ price }: { price: string }) => {
  return <small className="font-semibold">{formatPrice(price)}</small>;
};

export default Price;

function formatPrice(price: string) {
  const len = price.length;
  switch (true) {
    case len === 4:
      return "₦" + price.slice(0, 1) + "," + price.slice(1);
    case len === 5:
      return (price = "₦" + price.slice(0, 2) + "," + price.slice(2));
    case len === 6:
      return (price = "₦" + price.slice(0, 3) + "," + price.slice(3));
    case len === 7:
      return (price =
        "₦" +
        price.slice(0, 1) +
        "," +
        price.slice(1, 4) +
        "," +
        price.slice(4, 7));
    case len === 8:
      return (price =
        "₦" +
        price.slice(0, 2) +
        "," +
        price.slice(2, 5) +
        "," +
        price.slice(5, 8));
    default: {
      return price;
    }
  }
}
