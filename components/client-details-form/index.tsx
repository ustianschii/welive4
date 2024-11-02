import React from "react";

import { FieldContainer, FormContainer, Label, TextField } from "./styles";
import { fields } from "./fields";

export const ClientDetailsForm = () => {
  return (
    <FormContainer>
      {fields.map((field) => (
        <FieldContainer key={field.id}>
          <Label>{field.label}</Label>
          <TextField variant="standard" fullWidth id={field.id} />
        </FieldContainer>
      ))}
    </FormContainer>
  );
};
