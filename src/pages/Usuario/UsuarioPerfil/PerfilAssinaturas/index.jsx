import './index.scss';
import Cabecalho from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta';
import CancelarAssinatura from './CancelarAssinatura';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';

export default function PerfilAssinatura () {

    function cancelarAssinatura () {
        const cancelamento = {
            customUI: () => {
                return (
                    <CancelarAssinatura
                    /> // <-- enviar as funcoes sim e não (endpoints)
                )
            }
        }

        confirmAlert(cancelamento);
    }

    return (
        <main className="perfil-assinatura">
            <Cabecalho/>
            <main className="corpo">

                <BarraNavegacao selecionar='Assinaturas' />
                <main className="aba-assinatura">
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
                    <p>Próximo pagamento: 08/10/2023</p>
                </div>

                <div className="permanencia" style={{marginTop: '70px', alignSelf: 'center'}}>
                1: Após o cancelamento da assinatura, você perderá o acesso aos recursos exclusivos e conteúdo premium que estava desfrutando.
                <br></br>
                2: Não haverá mais cobranças recorrentes em sua conta associadas à assinatura de café.
                <br></br>
                3: Mesmo após um possível cancelamento, esperamos ainda tê-lo como parte de nossa comunidade de apreciadores de café.
                <br></br>
                </div>
                <button onClick={cancelarAssinatura}>CANCELAR ASSINATURA</button>
                </section>
                </main>
            </main>
            <UsuarioRodape/>
        </main>
    )
}