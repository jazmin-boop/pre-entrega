export const validateProduct = (product) => {
  const errors = {};

  if (!product.nombre || !product.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio";
  }

  if (!product.precio || Number(product.precio) <= 0) {
    errors.precio = "El precio debe ser mayor a cero";
  }

  if (!product.descripcion || !product.descripcion.trim()) {
    errors.descripcion = "La descripción es obligatoria";
  }

  if (!product.categoria || !product.categoria.trim()) {
    errors.categoria = "La categoria es obligatoria";
  }

  if (!product.file) {
    errors.file = "Debes seleccionar una imagen";
  }

  return errors;
};
