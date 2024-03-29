"use client";
import React from "react";
import { useContext } from "react";
import { MyContext } from "@/ContextAPI";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cart from "../Cart/page";

const DetailsPage = ({ details }) => {
  const { hello, addToCart } = useContext(MyContext);

  return (
    <div>
      {" "}
      {/* {hello} */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia>
          <img
            src={details.image}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button onClick={() => addToCart({ ...details })}>click</Button>
          {/* <Button onClick={() => addToCart({ ...details })} size="small">
            Add to cart
          </Button> */}
        </CardActions>
      </Card>
      <Cart />
    </div>
  );
};

export default DetailsPage;
