
function NavBar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li  className="nav-item"><a className="nav-link active" aria-current="page" href="#">Mis servicios</a></li>
                <li  className="nav-item"><a className="nav-link active" aria-current="page" href="#">Crear Orden</a></li>
                <li  className="nav-item"><a className="nav-link active" aria-current="page" href="#">Actualizar Orden</a></li>
                <li  className="nav-item"> <a className="nav-link active" aria-current="page" href="#">log out</a></li>
            </ul>
        </div>
    </nav>
     );
    }
    
export default NavBar1;