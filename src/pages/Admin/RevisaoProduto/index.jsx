import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link } from 'react-router-dom';

export default function RevisaoProduto () {


    return (
        <main className="revisao-produto">
            <CabecalhoAdm />
            <nav >
                <img src="/assets/images/icon-seta-preta.svg" alt="seta preta esquerda" />
                
            </nav>

            <hr />

            <section className="corpo">
            <main className="imagem-tipos">
                <article className='imagem-principal'>
                    <img src="/assets/images/filtroo.png" alt="" />
                    <nav className='imagens-produto'>
                        <div className="imagem-baixa">
                            <img src="/assets/images/filtroo.png" alt="" />
                        </div>
                        <div className="imagem-baixa">
                            <img src="/assets/images/filtroo.png" alt="" />
                        </div>
                    </nav>
                </article>

                <div className="detalhes-produto">
                    <div className="tipos">
                        <p><b>Intensidade</b></p>
                        <p>Baixa</p>
                    </div>
                    <div className="tipos">
                        <p><b>Doçura</b></p>
                        <p>Alta</p>
                    </div>
                    <div className="tipos">
                        <p><b>Acidez</b></p>
                        <p>Alta</p>
                    </div>
                    <div className="tipos">
                        <p><b>Torra</b></p>
                        <p>Média</p>
                    </div>
                </div>
            </main>

                <article className="detalhes-do-produto">
                    <div className="nome-acoes">
                    <h1>Orfeu Clássico 1kg Grão</h1>
                        <div className="acoes">
                            <i className="fa-regular fa-pen-to-square fa-lg"></i>
                            <i className="fa-regular fa-trash-can fa-lg"></i>
                        </div>
                    </div>

                    <div className="details">
                        <div className="s1">
                            <p><b>Preço sem promoção:</b> R$103,90</p>
                            <p><b>Preço promocional:</b> R$87,99</p>
                            <p><b>Estoque:</b> 8</p>
                        </div>
                        <div className="s2">
                            <p><b>Categoria:</b> Café em grão</p>
                            <p><b>ADM:</b> Thiago </p>
                            <p><b>ID:</b> 32</p>
                        </div>
                    </div>
                    <h1>Detalhes Técnicos: </h1>

                    <div className='tabelas'>
                        <table id='tabela1'>
                            <tbody>
                            <tr>
                                <td>Marca</td>
                                <td>Categoria</td>
                                <td>Informações sobre alergia</td>
                                <td>Peso</td>
                                <td>Dimensões do produto</td>
                            </tr>
                            </tbody>
                        </table>

                        <table id='tabela2'>
                            <tbody>
                            <tr>
                                <td>ORFEU</td>
                                <td>Grãos</td>
                                <td id='gluten'>Não contém glúten</td>
                                <td>1000 gramas</td>
                                <td id='dimensoes'>15 x 9 x 29cm</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>Descrição:</h1>

                    <div className="descricao">
                        <p>O Café em Grãos Orfeu Clássico 1KG é um café especial em grãos 100% Arábica, equilibrado e de torra média. O grão de café apresenta notas florais, frutadas e de caramelo. Possui doçura alta, acidez equilibrada, corpo aveludado e aromas complexos, com uma finalização persistente e prazerosa. Sua intensidade é equivalente a 6.</p>
                    </div>
                </article>
            </section>
        </main>
    )
};