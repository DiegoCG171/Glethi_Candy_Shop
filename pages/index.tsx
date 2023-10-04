import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";

import { ProductList } from "../components/products";
import { useProducts } from "../hooks";

import { FullScreenLoading } from "../components/ui";
import { DealSlideshow } from "../components/deals";

const banner = [
  "https://dt-elektrix.myshopify.com/cdn/shop/files/Slider-2.jpg?v=1665129771&width=1500",
  "https://dt-elektrix.myshopify.com/cdn/shop/files/Slider-1.jpg?v=1665129804&width=1500",
  "https://thumbs.dreamstime.com/z/dise%C3%B1o-de-banner-publicitario-horizontal-para-pizzer%C3%ADa-con-pizzas-e-ingredientes-sobre-fondo-color-plantilla-promoci%C3%B3n-215909875.jpg?w=992"
];

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout
      title={"Teslo-Shop - Home"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}
    >
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <>
          <DealSlideshow images={banner} />
          <Typography variant="h1" component="h1">
            Tienda
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Todos los productos
          </Typography>
          <ProductList products={products} />
        </>
      )}
    </ShopLayout>
  );
};

export default HomePage;
