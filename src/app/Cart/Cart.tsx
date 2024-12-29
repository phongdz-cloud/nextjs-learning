"use client";
import React, { useState } from "react";
import "./cart.css";
import custom from "./custom.module.scss";
import clsx from "clsx";
export const Cart = () => {
  const [expanding, setExpanding] = useState(true);
  return (
    <div
      className={clsx("cart", {
        [custom.cart]: expanding,
      })}
    >
      Cart
    </div>
  );
};
