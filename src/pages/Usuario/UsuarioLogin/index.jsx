import { Link } from 'react-router-dom';
import CabecalhoLink from '../../../components/Usuario/CabecalhoLink';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';

export default function Index() {
    return(
        <div className='pag-login'>
            <CabecalhoLink />
                <section>
                    <div className='espaco'></div>
                    <article id='background'></article>
                    <article id='conteudo'>
                        <h1> LOGIN </h1>
                        <div>
                            <article>
                                <input type='text' placeholder='E-mail' />
                                <input type='text' placeholder='Senha' />
                            </article>
                            <button> Logar </button>
                            <article>
                                <Link> Esqueceu a senha?</Link>
                                <div id='ajuda'>
                                    <div>
                                        <p> Não tem um conta? </p>
                                    </div>
                                    <div>
                                        <a>Cadastre-se!</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <div className='espaco'></div>
                </section>
            <UsuarioRodape />
        </div>
    )
}