import Layout from "../Layout";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchProductData } from "../../dataFetching";
import ProductDisplay from "../ProductDisplay";

const HomePage = () => {
  const [productData, setProductData] = useState([]);

  //! Runs after the first render
  useEffect(() => {
    fetchProductData()
      .then((data) => setProductData(data))
      .catch((error) => console.log("error:", error));
  }, []);

  return (
    <Layout>
      <Box width={1} display="flex" flexDirection="column" alignItems="center">
        {productData.map((product) => {
          return (
            <Box key={product.title} m={4} width="370px" maxWidth="100%">
              <ProductDisplay product={product} />
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
};

export default HomePage;
