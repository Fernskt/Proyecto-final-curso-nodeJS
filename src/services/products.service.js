import { db } from '../data/data.js';
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { validateProduct } from '../models/products.model.js';
import { validateProductUpdate } from '../models/products.model.js';



const productsCollection = collection(db, 'products');

const getAllProducts = async () => {
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getProductById = async (id) => {
    const productDoc = doc(db, 'products', id);
    const productSnapshot = await getDoc(productDoc);
    if (productSnapshot.exists()) {
        return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
        return null; 
    }
};

const createProduct = async (product) => {
  if (!validateProduct(product)) {
    const error = new Error('Datos de producto inválidos');
    error.code = 400;
    throw error;
  }
  const productDoc = await addDoc(productsCollection, product);
  return { id: productDoc.id, ...product };
};

const updateProduct = async (id, product) => {
    if (!validateProductUpdate(product)) {
        const error = new Error('Datos de producto inválidos');
        error.code = 400;
        throw error;
    }
    const productDoc = doc(db, 'products', id);
    await updateDoc(productDoc, product);
    return { id, ...product };
};

const deleteProduct = async (id) => {
  const productDocRef = doc(db, 'products', id);
  const productSnapshot = await getDoc(productDocRef);

  if (!productSnapshot.exists()) {
    const error = new Error('Producto inexistente');
    error.code = 404;
    throw error;
  }
  await deleteDoc(productDocRef);
  return { id };
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
