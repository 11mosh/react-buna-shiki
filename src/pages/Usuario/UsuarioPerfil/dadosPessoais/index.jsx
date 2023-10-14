import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import './index.scss';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta'


export default function Index(){
    return(
        <div id='page-conta-dados-pessoais'>
            <CabecalhoUsuario />
            <div id='conteudo'>
                <main id='conteudo'>
                    <BarraNavegacao selecionar='DadosPessoais' />
                    <section>
                        <h2> Dados pessoais</h2>
                        <div id='form'>
                            <article>
                                <label> Nome </label>
                                <input type='txt' placeholder='ex.: João Silva'/>
                            </article>
                            <div>
                                <div>
                                    <article>
                                        <label> CPF </label>
                                        <input type='txt' placeholder='000.000.000-00'/>
                                    </article>
                                    <article>
                                        <label> E-mail </label>
                                        <input id='email'type='email' placeholder='ex.: exemplo@gmail.com'/>
                                    </article>
                                </div>
                                <div>
                                    <article>
                                        <label> Telefone </label>
                                        <input type='tel' placeholder='00 00000-0000'/>
                                    </article>
                                    <article>
                                        <label> Data de nascimento </label>
                                        <input type='date'/>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <UsuarioRodape />
        </div>
    )
}