
import Chart from '../charts/Chart';

const Main = () => {
    return (
        <main>
            <div className = "main__container">

                    <div className = "main__greeting">
                        <h1>Bem-Vindo Augusto</h1>
                        <p>Dashboard em funcionamento</p>
                    </div>
                </div>
                <div className = "main__cards">
                    <div className = "card">
                        <i className = "fa fa-file-text fa-2x text-lightblue"></i>
                        <div className = "card_inner">
                            <p className = "text-primary-p">Quantidade de pedidos</p>
                            <span className = "font-bold text-title">800</span>
                        </div>
                    </div>
                    <div className = "card">
                        <i className = "fa fa-money fa-2x text-red "></i>
                        <div className = "card_inner">
                            <p className = "text-primary-p">Pagamentos</p>
                            <span className = "font-bold text-title">R$4.530</span>
                        </div>
                    </div>

                    <div className = "card">
                        <i className = "fa fa-archive fa-2x text-yellow "></i>
                        <div className = "card_inner">
                            <p className = "text-primary-p">Quantidade de Produtos</p>
                            <span className = "font-bold text-title">850</span>
                        </div>
                    </div>

                    <div className = "card">
                        <i className = "fa fa-bars fa-2x text-green "></i>
                        <div className = "card_inner">
                            <p className = "text-primary-p">Categorias</p>
                            <span className = "font-bold text-title">20</span>
                        </div>
                    </div>
                </div>
                <div className = "charts">
                    <div className = "charts__left">
                        <div className = "charts__left__title">
                            <div>
                                <h1>Teste do Dashboard</h1>
                                <p>Brasilia, DF</p>
                            </div>
                            <i className = "fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>

                    <div className = "charts__right">
                        <div className = "charts__right__cards">
                            <div className = "card1">
                                <h1>Lucros</h1>
                                <p>R$3.000</p>
                            </div>
                        </div>
                        <div className = "charts__right__cards">
                            <div className = "card2">
                                <h1>Pagamentos</h1>
                                <p>R$400,00</p>
                            </div>
                        </div>
                        <div className = "charts__right__cards">
                            <div className = "card3">
                                <h1>Custos</h1>
                                <p>R$200,00</p>
                            </div>
                        </div>
                        <div className = "charts__right__cards">
                            <div className = "card4">
                                <h1>BD</h1>
                                <p>R$300,00</p>
                            </div>
                        </div>
                    </div>                
                </div>     
        </main>
    )
}

export default Main;