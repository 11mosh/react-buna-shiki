import './index.scss';
import { Link } from 'react-router-dom'

export default function CabecalhoLink() {
    return(
        <div className='comp-cabecalho'>
            <section>
                <article>
                    <Link to={'/'}>
                        <img src="/assets/images/icon-seta-longa-esquerda.png" alt="" />
                        <p>Voltar à página inicial</p>
                    </Link>
                </article>
            </section>
            <div>
                <img src='/assets/images/logo.svg' alt="Erro ao exibir imagem"/>
            </div>
            <div className='lupa'>
                
            </div>
        </div>
    )
}