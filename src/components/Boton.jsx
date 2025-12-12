export const Boton = ({ texto, color, onClick }) => {
  const estilos = {
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  };

  const saludar = () => {
    alert("Boton clickeado");
  };

  return (
    <button style={estilos} onClick={saludar}>
      {texto}
    </button>
  );
};
