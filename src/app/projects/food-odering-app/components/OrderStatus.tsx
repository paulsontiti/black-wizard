import { CreditCardIcon } from "@heroicons/react/24/outline";
import React from "react";
import { MdDone } from "react-icons/md";

const orderStatus = {
  undone: { css: "opacity-30", value: "undone" },
  inProgress: { css: "animate-pulse", value: "Inprogress" },
  done: { css: "", value: "done" },
};

const OrderStatus = () => {
  return (
    <div className="flex w-full items-center justify-between mt-10 px-4">
      <Status
        label="Payment"
        status={{ css: orderStatus.done.css, value: orderStatus.done.value }}
      />
      <Status
        label="Processing"
        status={{
          css: orderStatus.inProgress.css,
          value: orderStatus.inProgress.value,
        }}
      />
      <Status
        label="On The Way"
        status={{ css: orderStatus.undone.css, value: orderStatus.undone.css }}
      />
      <Status
        label="Deliverred"
        status={{
          css: orderStatus.undone.css,
          value: orderStatus.inProgress.value,
        }}
      />
    </div>
  );
};

export default OrderStatus;

function Status({
  status,
  label,
}: {
  status: { css: string; value: string };
  label: string;
}) {
  return (
    <div className={`flex flex-col justify-center items-center ${status.css}`}>
      <CreditCardIcon className="w-8 h-8" />
      <p className="text-sm">{label}</p>
      {status.value === "done" && (
        <MdDone className="bg-green-700 rounded-full text-white font-bold" />
      )}
    </div>
  );
}
