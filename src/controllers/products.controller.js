// src/controllers/products.controller.js
import productsService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productsService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const createdProduct = await productsService.createProduct(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    if (error.code === 400) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error al crear el producto' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productsService.updateProduct(req.params.id, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    if (error.code === 400) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error al actualizar el producto' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await productsService.deleteProduct(req.params.id);
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    if (error.code === 404) {
      return res.status(404).json({ message: 'Producto inexistente' });
    }
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};
