import { useState } from "react";
import Button from "react-bootstrap/Button";
import MyModalProps from "../MyModalProps/MyModalProps";

const ButtonColorPick = () => {

    //Color inicial del boton
    const [buttonColor, setButtonColor] = useState("#1A412D");

    //Manejo del Modal
    const [showModal, setShowModal] = useState(false);

    //Funcion para cambiar el color del boton
    const handleColorChange = (color: string) => {
        setButtonColor(color);
    };

    //Al hacer en el boton se muestra el Modal
    const handleShowModal = () => {
        setShowModal(true);
    }

  return (
    <div className="m-3">
        <h2> Ejemplo 3 </h2>

        {/* Componente padre */}

        <Button variant= "primary" style={{backgroundColor: buttonColor}}
        onClick={handleShowModal}>
            Cambiar color
        </Button>

        {/* Componente hijo */}

        {showModal && <MyModalProps
        show = {showModal}
        onHide={() => setShowModal(false)}
        handleColorChange = {handleColorChange}
        
        />}


    </div>
  )
}

export default ButtonColorPick