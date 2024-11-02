import React from "react";

import CartLayout from "./layout";
import { ChoosedServicesList } from "../../components/choosed-services";

export default function Cart() {
  return (
    <CartLayout>
      <ChoosedServicesList />
    </CartLayout>
  );
}
