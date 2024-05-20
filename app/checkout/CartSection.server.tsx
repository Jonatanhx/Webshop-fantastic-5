import { Box, Container, Grid, Typography } from "@mui/material";

import { useCart } from "../context/CartContext";
import PaymentSection from "../ui/PaymentSection";
import { CartItems } from "./components/CartItems";
import { TotalPrice } from "./components/TotalPrice";

async function CartSection() {
  const { cart } = useCart(); //hämtar från cartContext

  return (
    <Container maxWidth="md" component="main">
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        CART
      </Typography>
      {/* Spaceing mellan boxarna och css styleing */}
      <Grid container spacing={1}>
        <CartItems cart={cart} />
      </Grid>

      {/* Totalpris grid */}
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">Total:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              <TotalPrice cart={cart} />
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <PaymentSection />
    </Container>
  );
}

export default CartSection;
