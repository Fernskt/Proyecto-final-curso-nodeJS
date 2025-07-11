
export function validateProduct(product) {
  if (!product) return false;

  // Validar que todos los campos existan
  const requiredFields = ['category', 'description', 'price', 'sku', 'stock'];
  for (const field of requiredFields) {
    if (!(field in product)) return false;
    if (product[field] === null || product[field] === undefined) return false;
    // Para strings: que no esté vacío ni solo espacios
    if (['category', 'description', 'sku'].includes(field)) {
      if (typeof product[field] !== 'string' || !product[field].trim()) return false;
    }
    // Para números: que sea number y no NaN
    if (['price', 'stock'].includes(field)) {
      if (typeof product[field] !== 'number' || isNaN(product[field])) return false;
    }
  }
  // Chequear valores lógicos (opcional)
  if (product.price < 0) return false;
  if (product.stock < 0) return false;

  return true;
}

export function validateProductUpdate(product) {
  if (!product) return false;

  // Validar que al menos un campo exista
  const fields = ['category', 'description', 'price', 'sku', 'stock'];
  const hasAtLeastOneField = fields.some(field => field in product);
  if (!hasAtLeastOneField) return false;

  // Validar los campos que existan
  for (const field in product) {
    if (product[field] === null || product[field] === undefined) return false;
    // Para strings: que no esté vacío ni solo espacios
    if (['category', 'description', 'sku'].includes(field)) {
      if (typeof product[field] !== 'string' || !product[field].trim()) return false;
    }
    // Para números: que sea number y no NaN
    if (['price', 'stock'].includes(field)) {
      if (typeof product[field] !== 'number' || isNaN(product[field])) return false;
    }
  }
  
  // Chequear valores lógicos (opcional)
  if (product.price < 0) return false;
  if (product.stock < 0) return false;

  return true;
}