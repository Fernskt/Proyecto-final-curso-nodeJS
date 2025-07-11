import express from 'express';
const router = express.Router();

import { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../controllers/products.controller.js';

router.get('/', getAllProducts);         // GET /api/products
router.get('/:id', getProductById);     // GET /api/products/:id
router.post('/', createProduct);        // POST /api/products
router.delete('/:id', deleteProduct);  // DELETE /api/products/:id
router.put('/:id', updateProduct);     // PUT /api/products/:id


// Exportar el router
export default router;