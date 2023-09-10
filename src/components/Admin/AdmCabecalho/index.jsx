import './index.scss'

export default function CabecalhoAdm() {
    return(
        <div className='comp-adm-cabecalho'>
            <section>
                <article>
                    <img src='/assets/images/icon-adm-casa.svg' alt='casa'/>
                    <p> Tela Inicial </p>
                </article>
            </section>
            <div className='logo'>
                <img src='/assets/images/logo.svg' />
            </div>
            <div className='adm'>
                <article>
                    <h4> Bem vindo, Wagner! </h4>
                </article>
                <img src='/assets/images/img-adm-wagner.svg' />
            </div>
        </div>
    )
}