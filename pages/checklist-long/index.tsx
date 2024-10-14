import React from "react";
import ChecklistLayout from "./layout";
import { ChecklistLongFields } from "../../components/cheklist-long-fields";

export default function ChecklistLong() {
  return (
    <>
      <ChecklistLayout>
        <ChecklistLongFields />
      </ChecklistLayout>
    </>
  );
}
