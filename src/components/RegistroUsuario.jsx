import { Fragment } from "react"
import NavBar2 from "./NavBar2";
function RegistroUsuario() {
  return (
    <Fragment>
        <NavBar2/>
        <section className="formContenedorRegistro">
          <div >
            <img src="../images/logo.png" alt="Registro de usuario" width="180" height="180"  />
          </div>
          <div >
            <form form action="#" className="border p-3 form" >
                <div >
                    <div className="divH1" ><h1 >Registro de Usuario</h1></div>
                </div>
                <div>
                <div clasclassNames="form-group">
                    <div ><label>Nombre</label></div>
                    <div><input type="text" id="nombre"/></div>
                </div>
                <div clasclassNames="form-group">
                    <div ><label>Usuario</label></div>
                    <div><input type="text" id="usuario"/></div>
                </div>
                <div clasclassNames="form-group">
                    <div ><label>Password</label></div>
                    <div><input type="password" id="password"/></div>
                </div>
                <div clasclassNames="form-group">
                    <div ><label>Email</label></div>
                    <div><input type="email" id="email"/></div>
                </div>
                <br />
                <div>
                    <button type="submit" class="btn btn-primary">
                        Registar Usuario
                    </button>
                </div>
                </div>
                <div>
                 <p style={{color: "black",}}>Si ya tienes una cuenta. <span style={{color: "red",}} >Ingresa aqui</span> </p>
                    
                </div>
            </form>
          </div>
        </section>
        <section className="formContenedorImagen">
            <div >
                <img src="../images/img_registro.png" alt="login" width="550" height="500" />
            </div>
        </section>
    </Fragment>
  )
}

export default RegistroUsuario;