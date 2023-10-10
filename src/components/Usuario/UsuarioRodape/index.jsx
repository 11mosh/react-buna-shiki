import './index.scss';
import { Link } from 'react-router-dom';

function UsuarioRodape () {

    return (
        <main className='rodape'>
            <article className='coluna-1'>
                <p>Redes Sociais</p>
                <div className='rede-sociais-icons'>
                    <img src="/assets/images/facebook.svg" alt="Erro ao exibir imagem" />
                    <img src="/assets/images/instagram.svg" alt="Erro ao exibir imagem" />
                    <img src="/assets/images/twitter.svg" alt="Erro ao exibir imagem" />
                </div>
                <img src="/assets/images/logo.svg" alt="Erro ao exibir imagem" />
            </article>

            <hr></hr>
            <article className='coluna-2'>
                <p>Nossos contatos</p>
                <div className='botoes-rodape'>
                    <p>(11) 4513-2113</p>
                    <p>(11) 4541-2513</p>
                    <p>bunashiki@gmail.com</p>
                </div>
            </article>

            <hr></hr>
            <article className='coluna-3'>
                <p>Nossas Políticas</p>

                <div className="botoes-rodape">
                    <p><Link to="/privacidade">Política de Privacidade</Link></p>
                    <p><Link to="/devolucao">Política de Devolução</Link></p>
                    <p><Link to="/sustentabilidade">Campanha de Sustentabilidade</Link></p>
                </div>
            </article>

            <hr className='separacao-3'></hr>
            <article className='coluna-4'>
                <img src="/assets/images/compracgura.png" alt="Erro ao exibir imagem" />
            </article>
        </main>
    )
}

export default UsuarioRodape;