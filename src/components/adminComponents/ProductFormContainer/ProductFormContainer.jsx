import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/product";
import { useNavigate } from "react-router-dom";

import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imagen = await uploadToImgbb(file);

      const productData = {
        ...product,
        precio: Number(product.precio),
        imagen,
      };

      await createProduct(productData);

      alert("Producto cargado con éxito");

      navigate("/");

      setProduct({
        nombre: "",
        precio: "",
        categoria: "",
        descripcion: "",
      });

      setFile(null);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-form-container">
      <ProductFormUI
        product={product}
        errors={errors}
        onChange={handleChange}
        onFileChange={setFile}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
