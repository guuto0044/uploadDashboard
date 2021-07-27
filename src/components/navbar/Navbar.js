import teste from '../../imagem/teste.jpg'
import './Navbar.css'


const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className = "navbar">
            <div className = "nav_icon" onClick = {() => openSidebar()}>
                <i className = "fa fa-bars" aria-hidden = "true"></i>
            </div>
            <div className = "navbar__left">
                <a href = "#">Produtos</a>
                <a href = "#">Usuário</a>
                <a href = "#" className ='active_link'>Admin</a>
            </div>
            <div className = "navbar__right">
                <a href = "#">
                    <i className = "fa fa-serch"></i>
                </a>
                <a href = "#">
                    <i className = "fa fa-clock-o"></i>
                </a>
                <a href = "#">
                    <img width = "30" src = {teste} alt = "teste"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;