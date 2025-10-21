import "./Item.css";

export const Item = ({ nombre, descripcion, precio, imagen, children }) => {
    return (
        <article className="product-item">
            <img src={imagen} alt={descripcion} />
            <h2 className="product-title">{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Descripción : {descripcion}</p>
            {children}
        </article>
    );
};
