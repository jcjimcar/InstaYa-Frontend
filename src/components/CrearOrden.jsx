import { Fragment } from "react"
import NavBar1 from "./NavBar1";
function CrearOrden() {
  return (
    <Fragment>
        <main>
            <div >
            <NavBar1/>
            <section className="formContenedorRegistro">
            <div >
                <form className="formRegistro" action="">
                    <div >
                        <div className="divH1" ><h3 >Crear Orden de Servicio</h3></div>
                    </div>
                    <div style={{height:"20px"}}></div>
                    <div  style={{  display: "flex", transform: "translateX(17%)", width:"300px"}}>
                        <div className="formCampo" >
                            <div className="divLabel" style={{width:"110px"}}><label style={{width:"110px"}}>Fecha Recogida</label></div>
                            <div className="divInput" style={{width:"110px"}}><input type="date" id="fecha" style={{width:"110px"}}/></div>
                        </div>
                        <div style={{width:"100px"}}></div>
                        <div className="formCampo">
                            <div className="divLabel" style={{width:"110px"}}><label style={{width:"110px"}}>Hora Recogida</label></div>
                            <div className="divInput" style={{width:"110px"}}><input style={{width:"110px"}} type="time" id="hora"/></div>
                        </div>
                    </div>
                    <div  style={{display:"flex", transform: "translateX(17%)",  width:"300px"}}>
                        <div className="formCampo">
                            <div className="divLabel" style={{width:"60px"}}><label style={{width:"60px"}}>Alto</label></div>
                            <div className="divInput" style={{width:"60px"}}><input  style={{width:"60px"}}type="input" id="alto"/></div>
                        </div>
                        <div className="formCampo">
                            <div className="divLabel" style={{width:"60px"}}><label style={{width:"60px"}}>Ancho</label></div>
                            <div className="divInput" style={{width:"60px"}}><input  style={{width:"60px"}}type="input" id="ancho"/></div>
                            
                        </div>
                        <div className="formCampo">
                            <div className="divLabel" style={{width:"60px"}}><label style={{width:"60px"}}>Largo</label></div>
                            <div className="divInput" style={{width:"60px"}}><input style={{width:"60px"}} type="input" id="largo"/></div>
                            
                        </div>
                        <div className="formCampo">
                            <div className="divLabel" style={{width:"60px"}}><label style={{width:"60px"}}>Peso</label></div>
                            <div className="divInput" style={{width:"60px"}}><input style={{width:"60px"}} type="input" id="peso"/></div>
                            
                        </div>
                    </div>
                    
                        <div className="formCampo">
                            <div className="divLabel" ><label style={{width:"280px"}}>Direccion Recogida</label></div>
                            <div className="divInput" ><input style={{width:"280px"}} type="input" id="direccion1"/></div>
                            
                        </div>
                    
                    <div className="formCampo">
                        <div className="divLabel"><label style={{width:"280px"}}>Ciudad Recogida</label></div>
                        <div className="divInput"><input style={{width:"280px"}} type="input" id="ciudad1"/></div>
                        
                    </div>
                    <div className="formCampo">
                        <div className="divLabel"><label style={{width:"280px"}}>Destinatario</label></div>
                        <div className="divInput"><input style={{width:"280px"}} type="input" id="destinatario"/></div>
                        
                    </div>
                    <div className="formCampo">
                        <div className="divLabel"><label style={{width:"280px"}}>Cedula</label></div>
                        <div className="divInput"><input style={{width:"280px"}} type="input" id="cedula"/></div>
                        
                    </div>
                    <div className="formCampo">
                        <div className="divLabel"><label style={{width:"280px"}}>Direccion Entrega</label></div>
                        <div className="divInput"><input style={{width:"280px"}} type="input" id="direccion2"/></div>
                        
                    </div>
                    <div className="formCampo">
                        <div className="divLabel"><label style={{width:"280px"}}>Ciudad Entrega</label></div>
                        <div className="divInput"><input style={{width:"280px"}} type="input" id="ciudad2"/></div>
                        
                    </div>
                    <div>
                        <button className="btn btn-outline-primary" type="button">
                           Crear Orden
                        </button>
                    </div>
                   
                </form>
            </div>
            
        </section>

        <aside className="formContenedorImagen">
            <div className="formImagen" style={{display:"grid"}} >
                <div style={{display:"flex", transform:"translate(18%,-50%)"}} >
                    <img src="../images/img_crearOrden2.jpg" alt="Registro de usuario" width="150" height="150" />
                    <p style={{color:"black", width:"150px", height:"50px", transform:"translateY(100%)" }}>Recogemos tu paquete a domicilio totalmente y gratis y lo entregamos en el menor tiempo posible.</p>
                </div>
                <div>
                    <img src="../images/img_crearOrden.png" alt="Crear orden de servicio" width="350" height="350" />
                </div>
            
            </div>
        </aside>
        </div>
      
        </main>

    </Fragment>
     )
    }
    
export default CrearOrden;