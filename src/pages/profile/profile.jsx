const Profile = () => {
  return (
    <>
      <div className="perfil-de-Usuario-SideBar">
        <div>
          <h1>Información de usuario</h1>
        </div>
        <div>
          <h1>Favoritos</h1>
        </div>
        <div>
          <h1>Historial de pedidos</h1>
        </div>
      </div>
      <div className="informacion-de-usuario-seccion">
        <div className="usuarurio-info-resumen">
          <div className="usuario-foto">
            <img src="#" alt="foto de perfil" />
            <img src="#" alt="icono de editar" />
          </div>
          <div className="usuario-informacion-principal">
            <h1>Percy Jackson</h1>
            <div className="direccion">
              <img src="#" alt="icono de casa" />
              <h2>Av. de la Paz #875, Col. Centro, Guadalajara</h2>
            </div>
          </div>
        </div>
        <form className="form-informacion-usuario">
          <div className="form-nivel-1">
            <label htmlFor="nombre">Nombre:</label>
            <div>
              <input type="text" id="nombre" name="nombre" required />
              <img src="#" alt="icono de editar" />
            </div>
            <label htmlFor="apellido">Apellido:</label>
            <div>
              <input type="text" id="apellido" name="apellido" required />
              <img src="#" alt="icono de editar" />
            </div>
          </div>
          <div className="form-nivel-2">
            <label htmlFor="correo">Correo:</label>
            <div>
              <input type="email" id="correo" name="correo" required />
              <img src="#" alt="icono de editar" />
            </div>
            <label htmlFor="telefono">Teléfono:</label>
            <div>
              <input type="number" id="telefono" name="telefono" required />
              <img src="#" alt="icono de editar" />
            </div>
          </div>
          <div className="form-nivel-3">
            <label htmlFor="direccion">Dirección:</label>
            <div>
              <input type="text" id="direccion" name="direccion" required />
              <img src="#" alt="icono de editar" />
            </div>
            <label htmlFor="CP">Código Postal:</label>
            <div>
              <input type="number" id="CP" name="CP" required />
              <img src="#" alt="icono de editar" />
            </div>
          </div>
          <label htmlFor="referencias">Referencias:</label>
          <div>
            <input type="text" id="referencias" name="referencias" required />
            <img src="#" alt="icono de editar" />
          </div>
          <div className="metodos-de-pago-seccion">
            <h2>Métodos de pago:</h2>
            <div className="metodos-de-pago">
              <input
                type="radio"
                id="transferencia"
                name="transferencia"
                value="transferencia"
                required
              />
              <label htmlFor="transferencia">Pago con Transferencia</label>

              <input
                type="radio"
                id="efectivo"
                name="efectivo"
                value="efectivo"
                required
              />
              <label htmlFor="efectivo">Pago con efectivo</label>
            </div>
            <div className="cambio">
              <input
                type="radio"
                id="cambio"
                name="cambio"
                value="cambio"
                required
              />
              <label htmlFor="cambio">Con cambio</label>

              <input
                type="radio"
                id="noCambio"
                name="noCambio"
                value="noCambio"
                required
              />
              <label htmlFor="noCambio">Sin cambio</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export { Profile };
