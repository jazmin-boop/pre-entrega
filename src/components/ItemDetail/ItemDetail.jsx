import { useContext } from "react";
import { Item } from "../Item/Item";
import { CartContext } from "../../context/CartContext/CartContext";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CartContext);

  return (
    <Item {...detail}>
      <button
        onClick={() => {
          addItem(detail);
        }}
      >
        Enviar al carrito
      </button>
    </Item>
  );
};
