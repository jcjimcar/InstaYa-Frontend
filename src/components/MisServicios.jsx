import { Fragment } from "react"
import NavBar1 from "./NavBar1";

function MisServicios() {
  return (
    <Fragment>
        <main>
            <div>
            <NavBar1/>
            <section className="formContenedorRegistro" >
                <div style={{width:"550px"}} >
                    <img src="../images/logo.png" alt="Registro de usuario" width="180" height="180"  />
                </div>
                <div>
                    <form className="formRegistro" action="">
                        <div >
                            <div className="divH1" style={{width:"450px"}} ><h1 >Mis servicios</h1></div>
                        </div>
                        <table style={{width:"450px"}} className="table table-striped">
                            <tr className="table-primary">
                                <th>Servicio</th>
                                <th>Fecha</th>
                                <th>Ciudad Entrega</th>
                                <th>Ciudad Destino</th>
                                <th>Estado</th>
                            </tr>
                            <tr>
                                <th>0028788</th>
                                <td>December 10, 2022</td>
                                <td>Bogota</td>
                                <td>Cali</td>
                                <td>Entregado</td>
                                
                            </tr>
                            <tr>
                                <th>0028789</th>
                                <td>December 11, 2022</td>
                                <td>Bogota</td>
                                <td>Cartagena</td>
                                <td>Entregado</td>
                                
                            </tr>
                            <tr>
                                <th>0028358</th>
                                <td>December 12, 2022</td>
                                <td>Bogota</td>
                                <td>Cali</td>
                                <td>Pendiente</td>
                                
                            </tr>
                            <tr>
                                <th>0056788</th>
                                <td>December 14, 2022</td>
                                <td>Medellin</td>
                                <td>Tunja</td>
                                <td>Pendiente</td>
                                
                            </tr>
                        </table>  
                    </form>
                </div>
            </section>
            <aside className="formContenedorImagen" >
                <div style={{display:"flex", transform:"translate(8%,-40%)"}} >
                    <img  src="../images/img_misservicios.jpg" alt="Registro de usuario" width="550" height="500" />
                </div>
            </aside>
            </div>
      
        </main>
    </Fragment>
  )
}

export default MisServicios;
