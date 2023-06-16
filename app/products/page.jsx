"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import styles from "../styles/products.module.css";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = response.json();
  return products;
};

const ProductsPage = async () => {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div
      className={styles.container}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            sx={{
              maxWidth: 345,
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src={product.image}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
            </CardMedia>
            <CardContent
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="p"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <div style={{ flexGrow: 1 }} />
            <CardActions>
              <Link
                style={{
                  borderRadius: "4px",
                  textDecoration: "none",
                  padding: "10px 30px",
                  backgroundColor: "#000",
                }}
                href={`/products/${product.id}`}
              >
                Details
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductsPage;
