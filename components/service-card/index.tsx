import {
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  Card,
  Description,
  Button,
  TitleIcon,
  SvgIcon,
  CardContent,
} from "./styles";
import React from "react";
import { ServiceCardTypes } from "./types";

export const ServiceCard: React.FC<ServiceCardTypes> = ({
  image,
  title,
  description,
  icon,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} />
        <CardContent>
          <TitleIcon>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <SvgIcon>{icon}</SvgIcon>
          </TitleIcon>
          <Description variant="body2">{description}</Description>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};
