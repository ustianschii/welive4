import React from "react";

import {
  Card,
  Container,
  Description,
  FieldsBox,
  TextField,
  Title,
  Checkbox,
  FormControlLabel,
  ShareBox,
  UploadButton,
  SubmitButton,
} from "./styles";
import { Highlighted } from "../hero-title/styles";

import { data } from "./data";

import { FormGroup, Typography } from "@mui/material";

import Image from "next/image";

export const ChecklistLongFields = () => {
  return (
    <Container disableGutters>
      <Description>
        To make sure you think of every step during the construction phase of
        your smart home, we compiled a short checklist with the most important
        areas of application.
      </Description>
      <FieldsBox>
        {data.map((item, index) => (
          <Card key={index}>
            <Title>{item.title}</Title>
            <FormGroup sx={{ mb: "15px" }}>
              {item.variants.map((variant, idx) => (
                <FormControlLabel
                  key={idx}
                  control={<Checkbox />}
                  label={variant}
                />
              ))}
            </FormGroup>
            <TextField
              size="small"
              fullWidth
              placeholder="Feel free to add extra details"
            />
          </Card>
        ))}
        <ShareBox>
          <Typography fontSize="18px" mb="5px">
            <Highlighted>Share up to 20 pictures</Highlighted>
          </Typography>
          <UploadButton size="small">
            <Image
              alt="upload-icon"
              src="/checklist-long/upload-button-icon.png"
              height={24}
              width={24}
            />
            Upload files here...
          </UploadButton>
          <SubmitButton size="small">Submit</SubmitButton>
        </ShareBox>
      </FieldsBox>
    </Container>
  );
};
