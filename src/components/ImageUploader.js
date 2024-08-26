import React, { useState } from 'react';

const CargadorDeImagen = () => {
  const [imagen, setImagen] = useState(null);

  const manejarCambio = (e) => {
    const archivo = e.target.files[0];
    const lector = new FileReader();

    lector.onloadend = () => {
      setImagen(lector.result); // Guardar la imagen como una URL base64
    };

    if (archivo) {
      lector.readAsDataURL(archivo);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={manejarCambio} />
      {imagen && <img src={imagen} alt="Imagen cargada" style={{ maxWidth: '100%', height: 'auto' }} />}
    </div>
  );
};

export default CargadorDeImagen;
