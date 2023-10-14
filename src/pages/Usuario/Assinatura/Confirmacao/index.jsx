import './index.scss';
import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function Confirmacao () {

    const notificacao = () => {
        toast('Seja bem-vindo à nossa assinatura! :)', {
            icon: (
                <img
                    src="/assets/images/bunashikiSeta.svg"
                    alt='Erro ao encontrar imagem!'
                    style={{width: '40px', height: '40px', margin: '-8px'}}
                />
            ),
        })
    }

    return (
        <main className='confirmacao-assinatura'>
            <CabecalhoUsuario/>
            <nav className='navegador'>
                <Link to={'/assinatura'}><img src="/assets/images/icon-seta-preta.png" alt="" />
                <h1>Voltar à etapa anterior</h1></Link>
            </nav>

            <section className='conteudo'>
            <h1>Revise sua assinatura:</h1>

            <section className='cartao-principal'>
                <div className="imagem-tabela">
                    <img src="/assets/images/bunashikiSetaCinza.png" alt="" />
                    
                    <table>
                        <thead>
                            <tr>
                                <td><b>Itens</b></td>
                                <td><b>Quantidade</b></td>
                                <td><b>Valor</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Café Orfeu Clássico 1kg</td>
                                <td>1</td>
                                <td>R$87,99</td>
                            </tr>
                            <tr>
                                <td>Café Orfeu Bourbon Amarelo 250g</td>
                                <td>1</td>
                                <td>R$87,99</td>
                            </tr>
                            <tr>
                                <td>
                                    Desconto de 5%
                                </td>
                                <td></td>
                                <td>-R$8,82</td>
                            </tr>
                            <tr>
                                <td>
                                    Valor Total
                                </td>
                                <td></td>
                                <td>R$174,54</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

                <div className="detalhes-assinatura">
                    <p>Código da assinatura: 123-A-123: 123-A-123</p>
                    <p>Primeiro pagamento: 08/09/2023</p>
                    <p>Próximo pagamento: 08/10/2023</p>
                </div>

                <div className="permanencia">
                    Ao assinar este plano você concorda com o tempo mínimo de manutenção e permanência de 3 meses. As solicitações de cancelamento não serão acatadas antes da permanência mínima.
                </div>

                <button onClick={notificacao}>Confirmar o pagamento</button>
                </section>
            </section>

            <UsuarioRodape/>
        </main>
    )
}