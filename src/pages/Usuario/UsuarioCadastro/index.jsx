import CabecalhoLink from '../../../components/Usuario/CabecalhoLink';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';

export default function Index() {
    return(
        <div className='pag-cadastro'>
            <CabecalhoLink />
                <section>
                    <article id='background'></article>
                    <article>
                        <h1>
                            CADASTRAR-SE
                        </h1>
                        <div>
                            <article>
                                <div>
                                    <h3> Informações pessoais: </h3>
                                    <img src='/assets/images/asterisco.svg' alt='asterisco'/>
                                </div>
                                <input className='input' type='text' placeholder='Nome Completo' />
                                <input className='input' type='text' placeholder='E-mail' />
                                <input className='input' type='text' placeholder='Senha' />
                                <input className='input' type='text' placeholder='Confirmar Senha' />
                                <input className='input' type='text' placeholder='Telefone' />
                            </article>
                            <article>
                                <div id='residencial'>
                                    <h3> Informações residenciais: </h3>
                                    <img src='/assets/images/asterisco.svg' alt='asterisco'/>
                                </div>
                                <input className='input inputResidenciais' type='text' placeholder='CEP' />
                                <input className='input inputPreenchido' type='text' placeholder='Rua' />
                                <input className='input inputPreenchido' type='text' placeholder='Cidade' />
                                <input className='input inputResidenciais' type='text' placeholder='Número da casa' />
                                <input className='input inputResidenciais' type='text' placeholder='Complemento' />
                            </article>
                        </div>
                        <button> Finalizar cadastro </button>
                    </article>
                </section>
            <UsuarioRodape />
        </div>
    )
}