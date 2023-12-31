import React from "react";
import CartSummary from "../../components/CartSummary";
import Price from "../../components/Price";
import OrderStatus from "../../components/OrderStatus";

async function Page({ params: { slug } }: { params: { slug: string } }) {
  return (
    <div className="">
      <div className="">
        <table className="w-full grow text-center">
          <tr className="mb-10">
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>

          <tr className="py-4">
            <td className="text-center px-2">12345167233</td>
            <td className="text-center px-2">John Doe</td>
            <td className="text-center px-2">
              20 Aba Road, Rumuola, Port Harcourt
            </td>
            <td className="text-center px-2">
              <Price price={(1200).toString()} />
            </td>
          </tr>
        </table>
        <OrderStatus />
      </div>
      <div className="">
        <CartSummary buttonLabel="Paid" foodItems={[]} disableButton />
      </div>
    </div>
  );
}

export default Page;
