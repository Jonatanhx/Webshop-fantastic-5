import { Container } from "@mui/material";
import CartLayout from "../checkoutComponents/cartLayout";

function Checkout() {
  return (
    <Container maxWidth="md">
      <CartLayout />
    </Container>
  );
}

export default Checkout;

// CYPRESS TESTER SOM SKA IN
{
  /* /* 
- `data-cy="cart-link"` knappen för att gå till kundvagnen/kassasidan.
- `data-cy="cart-items-count-badge"` siffran intill kundvagnsikonen som visar antalet tillagda produkter.
- `data-cy="cart-item"` en produktrad på kassasidan.
- `data-cy="increase-quantity-button"` knappen för att öka antalet av en produkt på kassasida.
- `data-cy="decrease-quantity-button"` knappen för att minska antalet av en produkt på kassasida.
- `data-cy="product-quantity"` antalet valda produkter av samma typ på kassasida.
- `data-cy="total-price"` totala priset för alla produkter i kundvagnen.

- `data-cy="customer-form"` formulär för att fylla i kunduppgifter på checkout-sidan.
- `data-cy="customer-name"` kundens namn (som fylls i på checkout-sidan).
- `data-cy="customer-address"` kundens gatuadress (som fylls i på checkout-sidan).
- `data-cy="customer-zipcode"` kundens postnummer (som fylls i på checkout-sidan).
- `data-cy="customer-city"` kundens stad (som fylls i på checkout-sidan).
- `data-cy="customer-email"` kundens emailadress (som fylls i på checkout-sidan).


- `data-cy="customer-phone"` kundens telefonnummer (som fylls i på checkout-sidan).
- `data-cy="customer-name-error"` felmeddelande vid felaktigt angivet namn.
- `data-cy="customer-address-error"` felmeddelande vid felaktigt angiven adress.
- `data-cy="customer-zipcode-error"` felmeddelande vid felaktigt angivet postnummer.
- `data-cy="customer-city-error"` felmeddelande vid felaktigt angiven stad.
- `data-cy="customer-email-error"` felmeddelande vid felaktigt angiven emailadress.
- `data-cy="customer-phone-error"` felmeddelande vid felaktigt angivet telefonnummer.


- `data-cy="cart-item"` en produktrad på kassasidan.
- `data-cy="increase-quantity-button"` knappen för att öka antalet av en produkt på kassasida.
- `data-cy="decrease-quantity-button"` knappen för att minska antalet av en produkt på kassasida.
- `data-cy="product-quantity"` antalet valda produkter av samma typ på kassasida.
- `data-cy="total-price"` totala priset för alla produkter i kundvagnen.
*/
}
