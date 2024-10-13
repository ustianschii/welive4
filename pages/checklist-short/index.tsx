import React from "react";
import ChecklistLayout from "./layout";
import { ChecklistShortFields } from "../../components/checklist-short-fields";

export default function ChecklistShort() {
  return (
    <ChecklistLayout>
      <ChecklistShortFields />
    </ChecklistLayout>
  );
}
