"use client";
import { products } from "@/data";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  CardMedia,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = { params: { id: string } };

function UpdateExistProduct(props: Props) {
  const product = products.find((p) => p.id === props.params.id);
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  if (!product) {
    return <Box>404</Box>;
  }

  const handleDelete = (productId: string) => {
    // Implementera logik för att ta bort produkten med det angivna productId
    console.log("Delete product with ID:", productId);
    setShowDeleteToast(true);
  };

  const handleSave = () => {
    // Implementera logik för att spara ändringar i produkten
    console.log("Save changes");
  };

  return (
    <Container
      fixed
      component={"main"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box
        component={"form"}
        data-cy="product-form"
        sx={{
          width: "100%",
          maxWidth: 400, // Förminskar maxbredden för formuläret
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          height: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Uppdatera produkt
        </Typography>
        <CardMedia
          component="img"
          height="auto"
          image={product.image}
          alt={product.title}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Titel"
          defaultValue={product.title}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Pris"
          defaultValue={product.price}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="Beskrivning"
          multiline
          rows={6}
          defaultValue={product.description}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={() => handleDelete(product.id)}>
            <DeleteIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            startIcon={<SaveIcon />}
          >
            Spara
          </Button>
        </Box>
      </Box>
      {showDeleteToast && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="body1">
            Är du säker på att du vill radera produkten?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowDeleteToast(false)}
            sx={{ marginRight: "10px", marginTop: "10px" }}
          >
            Ja
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setShowDeleteToast(false)}
            sx={{ marginTop: "10px" }}
          >
            Nej
          </Button>
        </Paper>
      )}
    </Container>
  );
}

export default UpdateExistProduct;
