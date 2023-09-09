import './index.scss';

export default function Cabecalho() {
    return(
        <div className='comp-cabecalho'>
            <section>
                <article>
                    <img src='/assets/images/ajuda.svg' alt="Erro ao exibir imagem"/>
                    <p> Suporte </p>
                </article>
                <article>
                    <img src='/assets/images/carrinho.svg' alt="Erro ao exibir imagem"/>
                    <p> Carrinho </p>
                </article>
                <article>
                    <img src='/assets/images/conta.svg' alt="Erro ao exibir imagem"/>
                    <p>Conta</p>
                </article>
            </section>
            <div>
                <img src='/assets/images/logo.svg' alt="Erro ao exibir imagem"/>
            </div>
            <div className='lupa'>
                <img src='/assets/images/lupa.svg' alt="Erro ao exibir imagem" />
            </div>
        </div>
    )
}