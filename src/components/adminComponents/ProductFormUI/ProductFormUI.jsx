import "./ProductFormUI.css";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <form className="product-form" onSubmit={onSubmit}>
      <h2>Cargar nuevo producto</h2>

      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={product.nombre}
          onChange={onChange}
        />
      </label>
      {errors.nombre && <p className="error">{errors.nombre}</p>}

      <label>
        Precio:
        <input
          type="number"
          name="precio"
          value={product.precio}
          onChange={onChange}
        />
      </label>
      {errors.precio && <p className="error">{errors.precio}</p>}

      <label>
        Categoría:
        <select
          name="categoria"
          value={product.categoria}
          onChange={onChange}
        >
          <option value="">Selecciona una categoría</option>
          <option value="Suculentas">Suculentas</option>
          <option value="Plantas de interior">Plantas de interior</option>
          <option value="Flores">Flores</option>
        </select>
      </label>
      {errors.categoria && <p className="error">{errors.categoria}</p>}

      <label>
        Descripción:
        <textarea
          name="descripcion"
          value={product.descripcion}
          onChange={onChange}
        />
      </label>
      {errors.descripcion && <p className="error">{errors.descripcion}</p>}

      <label>
        Imagen:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onFileChange(e.target.files[0])}
        />
      </label>
      {errors.file && <p className="error">{errors.file}</p>}

      <button disabled={loading}>
        {loading ? "Guardando..." : "Guardar producto"}
      </button>

      {errors.general && <p className="error">{errors.general}</p>}
    </form>
  );
};
  