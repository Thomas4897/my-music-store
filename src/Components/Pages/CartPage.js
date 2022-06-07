import { Box } from "@mui/material";
import Layout from "../Layout";
import { shoppingCartContext } from "../../App";
import { useContext } from "react";

const CartPage = () => {
  const { shoppingCart, removeFromCart } = useContext(shoppingCartContext);
  // We want to display whats in the shopping cart.
  return (
    <Layout shoppingCart={shoppingCart}>
      <Box width={1} display="flex" flexDirection="column" alignItems="center">
        {shoppingCart.map((cartItem) => (
          <Box p={3}>
            <Box p={3}>
              {cartItem.title} - Qty: {cartItem.quantity} - $
              {cartItem.price / 100} total$: {cartItem.total / 100}
            </Box>
            <Box>
              <button onClick={() => removeFromCart(cartItem.id)}>
                Remove From Cart
              </button>
            </Box>
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default CartPage;
