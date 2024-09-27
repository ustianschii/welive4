import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Card, Description } from "./styles";
import React from "react";
import { ServiceCardTypes } from "./types";

export const ServiceCard: React.FC<ServiceCardTypes> = ({
  image,
  title,
  description,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Description variant="body2">{description}</Description>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Read more</Button>
      </CardActions>
    </Card>
  );
};
