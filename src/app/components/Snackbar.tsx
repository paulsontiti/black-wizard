"use client";
import React, { useState } from "react";

const SnackBar = React.forwardRef(({ message }: { message: string }, _ref) => {
  const [showSnackBar, setShowSnackBar] = useState(false);

  React.useImperativeHandle(_ref, () => ({
    showSnackBar: () => {
      setShowSnackBar(true);
    },
    closeSnackBar: () => {
      setShowSnackBar(false);
    },
  }));

  //   const handleClose = () => {
  //     setState({ ...state, open: false });
  //   };

  if (!showSnackBar) return <div></div>;
  return (
    <div className="fixed top-1/6 left-0 max-w-xs">
      <p className="text-white text-sm  py-2 px-1 mx-4 max-w-full break-all  flex-wrap bg-green-800">
        {message}
      </p>
    </div>
  );
});

SnackBar.displayName = "SnackBar";
export default SnackBar;
