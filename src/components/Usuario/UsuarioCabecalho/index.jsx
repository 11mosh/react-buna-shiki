import './cabecalho.scss';

export default function Cabecalho() {
    return(
        <div className='comp-cabecalho'>
            <section>
                <article>
                    <img src='/assets/images/ajuda.svg'/>
                    <p> Suporte </p>
                </article>
                <article>
                    <img src='/assets/images/carrinho.svg'/>
                    <p> Carrinho </p>
                </article>
                <article>
                    <img src='/assets/images/conta.svg'/>
                    <p>Conta</p>
                </article>
            </section>
            <div>
                <img src='/assets/images/logo.svg' />
            </div>
            <div className='lupa'>
                <img src='/assets/images/lupa.svg' />
            </div>
        </div>
    )
}