import './index.scss'

export default function CabecalhoUsuario() {
    return(
        <div className='comp-usuario-cabecalho'>
            <section>
                <article>
                    <img src='/assets/images/icon-carrinho.svg' alt='carrinho'/>
                    <p> Carrinho </p>
                </article>
                <article>
                    <img src='/assets/images/icon-conta.svg' alt='conta'/>
                   <p>Conta</p>
                </article>
            </section>
            <div>
                <img src='/assets/images/logo.svg' alt="Erro ao exibir imagem"/>
            </div>
            <div className='lupa'>
                <input type="text" placeholder='Pesquise por produtos aqui...'/>
                <img src='/assets/images/lupa.svg' alt="Erro ao exibir imagem" />
            </div>
        </div>
    )
}