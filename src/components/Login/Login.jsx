import {useState} from "react";
import { useAuthContext} from "../../context/AuthContext/useAuthContext";
import { useNavigate, Navigate } from "react-router-dom";

export const Login =()=>{
    const [useForm, setUserForm] = useState({ name: "", password: "" });
    const { user, login } = useAuthContext();
    const navigate = useNavigate();

    if (user){ 
        return <Navigate to="/admin/alta-productos" replace />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...useForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(useForm.name, useForm.password);

        if (success){
            navigate("/admin/alta-productos");
        } else {
            alert("Credenciales incorrectas");
            setUserForm({ name: "", password: "" });
        }
    };

    return( 
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesion</h2>

            <div>
                <label htmlFor="name">Usuario:</label>
                <input 
                    id="name" 
                    name="name" 
                    value={useForm.name} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password"
                    value={useForm.password} 
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Iniciar Sesion</button>
        </form>
    );
};
