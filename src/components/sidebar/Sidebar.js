import './Sidebar.css';
import logo from '../../imagem/Foto.jpg';

const Sidebar = ({SidebarOpen, closeSidebar}) => {
    return (
        <div className = {SidebarOpen ? "sidebar-responsive " : ""} id = "sidebar">
            <div className = "sidebar__title">
                <div className = "sidebar__img">
                    <img src = {logo} alt = "logo"/>
                    <h1>guuto044</h1>
                </div>
                <i 
                onClick = {() => closeSidebar()}
                className = "fa fa-times"
                id = "sidebarIcon"
                aria-hidden = "true"
                ></i>
            </div>
            <div className = "sidebar__menu">
                <div className = "sidebar__link active_menu_link">
                    <i class="fas fa-home"></i>
                    <a href = "#">Home</a>
                </div>
                <h2>ADM</h2>
                <div className = "sidebar__link">
                    <i class="fas fa-users-crown"></i>
                    <a href = "#">Área ADM</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-building"></i>
                    <a href = "#">Lojas</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-archive"></i>
                    <a href = "#">Produtos</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-bars"></i>
                    <a href = "#">Categorias</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-cutlery"></i>
                    <a href = "#">Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className = "sidebar__link">
                    <i className = "fa fa-male"></i>
                    <a href = "#">ADMS</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-user-cicle"></i>
                    <a href = "#">Usuários</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-money"></i>
                    <a href = "#">Pagamento/Custos</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-tasks"></i>
                    <a href = "#">A plataforma</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-file_text"></i>
                    <a href = "#">Politica de Privacidade</a>
                </div>
                <div className = "sidebar__logout">
                    <i className = "fa fa-power-off"></i>
                    <a href = "#">Sair</a>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;