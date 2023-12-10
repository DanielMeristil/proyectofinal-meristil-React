import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';

const Ubicacion = () => {
    const {darkMode,toggleDarkMode,setDarkMode,mostrarMensaje,ejemplo} = useContext(ThemeContext)

    return (
        <div>
            <h1>{ejemplo}</h1>
        </div>
    );
};

export default Ubicacion;