import './index.scss'
import UsuarioCabecalho from '../../../components/Usuario/UsuarioCabecalho'
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape'
import ResumoPedido from '../../../components/Usuario/ResumoPedido'
import { Link } from 'react-router-dom'

export default function Index(){
    return(
        <div id='page-pedido-finalizado'>
            <UsuarioCabecalho />
            <main>
                <section id='s1'>
                    <h2> Pedido Finalizado!</h2>
                    <p> Obrigado por comprar conosco </p>
                    <img src='/assets/images/pedido/icon-finalizado.svg' alt="icon-certo" />
                </section>
                <section id='s2'>
                    <ResumoPedido />
                </section>
                <section id='s3'>
                    <p>Parabéns! Sua compra estará contribuindo diretamente para a <span> causa verde!</span></p>
                    <article>
                        <Link id='voltar'>
                            <img src="/assets/images/icon-esquerda-curto.png" alt="" />
                            Voltar
                        </Link>
                        <Link id='acompanhar'>
                            Acompanhar pedido
                        </Link>
                    </article>
                </section>
            </main>
            <UsuarioRodape />
        </div>
    )
}