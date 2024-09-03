import express from "express";
import { getItemDetails } from "../controllers/itemsControllers.js"; // Importa el controlador correctamente
import { getSearchItem } from "../controllers/searchControllers.js";
import { getCategoryByIdController } from "../controllers/categoriesController.js";

const router = express.Router();

// Define la ruta para obtener detalles del item
router.get("/items/:id", getItemDetails);
router.get("/categories/:id", getCategoryByIdController);
router.get("/items", getSearchItem);

export default router;
