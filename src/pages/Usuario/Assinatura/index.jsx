import './index.scss';
import { useEffect, useState } from 'react';
import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Assinatura () {

    const [exibirCartao, setExibirCartao] = useState(false);
    const [exibirEndereco, setExibirEndereco] = useState(false);
    const [itensDisponiveis, setItensDisponiveis] = useState([]);

    async function chamarAssinaturas () {
        const resposta = await axios.get('http://localhost:5000/listar-assinaturas');
        const resp = resposta.data;
        setItensDisponiveis(resp);
    }

    useEffect(() => {
        chamarAssinaturas()
    }, [])
    
    return (
        <main className="assinatura">
            <CabecalhoUsuario/>
            <main className='corpo-site'>
                <h1>Receba mensalmente os sabores marcantes que você adora, no conforto de sua casa: grãos ou moídos!</h1>
                <section className='texto-apresentacao'>
                    <p>Nós selecionamos uma lista dos melhores sabores de café pelos quais você pode se interessar, além de alguns itens que possam ser necessários.  :)</p>
                    <ul>
                        <li> Nossos produtos são enviados sempre o mais fresco possível;</li>
                        <li> Os produtos têm 5% de desconto ao final do pagamento;</li>
                        <li> Muito mais conforto e comodidade.</li>
                    </ul>
                </section>

                <section className='selecionar-itens'>
                    <nav className='titulo'>
                        <h1>1 - Escolha entre os principais sabores disponíveis e quantidade:</h1>
                        <select name="" id="">
                        <option value="">Café em grão</option>
                        </select>
                    </nav>

                    <div className="itens-cafe">
                        {itensDisponiveis.map((item) => {
                            return (
                                <main>
                                    <div className="item">
                                        <img src="/assets/images/cafeteiraa.png" alt="" />
                                        <p>{item.produto}</p>
                                        <div className='quantidade-item'>
                                            <p className='adicionar'>-</p>
                                            <p>1</p>
                                            <p className='adicionar'>+</p>
                                        </div>
                                    </div>
                                </main>
                            )
                        })}
                         
{/*
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p className='adicionar'>-</p>
                                <p>1</p>
                                <p className='adicionar'>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p className='adicionar'>-</p>
                                <p>1</p>
                                <p className='adicionar'>+</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p className='adicionar'>-</p>
                                <p>1</p>
                                <p className='adicionar'>+</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p className='adicionar'>-</p>
                                <p>1</p>
                                <p className='adicionar'>+</p>
                            </div>
                        </div> */}
                                                
                    </div>
                </section>

                <section className="selecionar-cartao">
                <h2>2 - Cadastre ou escolha um cartão de crédito:</h2>

                    <div className="agrupamento">
                        <article className='info-cartao'>
                            <div className='titulo'>
                                <p>Não tem? Cadastre um agora!</p>
                                <input type="checkbox" name="checkbox1" id="checkbox1" style={{display: 'none'}}/>
                                <label htmlFor="checkbox1">
                                    <img src="/assets/images/setadropdown.png" alt="" onClick={() => setExibirCartao(!exibirCartao)}/>
                                </label>
                            </div>
                            {exibirCartao 
                            ? <div className='campo-inputs'>
                            <div>
                                <label htmlFor="">Número do cartão *</label>
                                <input type="text" />
                            </div>
                            <article className='secao2'>
                                <div>
                                    <label htmlFor="">Validade *</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">CVV *</label>
                                    <input type="text" />
                                </div>
                            </article>
                            <div>
                                <label htmlFor="">Nome do títular *</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">CPF/CNPJ do títular *</label>
                                <input type="text" />
                            </div>
                        <button>Cadastrar</button>

                        </div>

                            : (<></>)
                            }
                            
                        </article>
                    <select name="" id="">
                        <option value="">Selecionar cartão</option>
                    </select>
                    </div>
                </section>
                

                <section className='selecionar-endereco'>
                    <h2>3 - Cadastre ou escolha um endereço de entrega:</h2>
                    <div className="agrupamento">
                    <article className='info-endereco'>
                        <div className='titulo'>
                            <p>Não tem? Cadastre um agora!</p>
                            <input type="checkbox" name="checkbox2" id="checkbox2" style={{display: 'none'}}/>
                            <label htmlFor="checkbox2">
                                <img src="/assets/images/setadropdown.png" alt="" onClick={() => setExibirEndereco(!exibirEndereco)}/>
                            </label>
                        </div>
                        {exibirEndereco
                        ? <div className="resto">
                        <div className="campo1">
                            <div>
                                <label htmlFor="">Informe o CEP  *</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Informe o número *</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="campo2">
                            <label htmlFor="">Complemento</label>
                            <input type="text" />
                            <input type="text" disabled className='endereco-usuario'/>
                            <input type="text" disabled className='endereco-usuario' placeholder='oi'/>
                        </div>

                        <button>Cadastrar</button>
                        </div>
                        : <></>
                        }
                        
                    </article>
                    <select name="sssssssss" id="">
                        <option value="">Selecionar endereço</option>
                    </select>
                    </div>
                    
                </section>

                <button>
                    <Link to={'/assinatura/confirmacao'}>
                        <img src="/assets/images/icon-s.png" alt="" id='imagem-fantasma' />
                        <p>Continuar</p>
                        <img src="/assets/images/icon-seta-longa-esquerda.png" alt="" style={{transform: 'rotate(180deg)', width: '50px'}}/>
                    </Link>
                </button>

                <section className="texto-ajuda">
                    <h2>Você pode se perguntar:</h2>
                    <h2>Como funciona a assinatura mensal?</h2>
                    <div>
                        <p>Nosso método de pagamento nessa modalidade aceita apenas <b>cartão de crédito</b>.</p>
                        <p>1 - Você escolhe quais produtos deseja levar;</p>
                        <p>2 - Cadastra o cartão de crédito e efetua o primeiro pagamento;</p>
                        <p>3 - Todos os meses, no mesmo dia em que o primeiro pagamento foi confirmado, uma nova cobrança chegará no cartão cadastrado e nós separaremos os produtos <b>selecionados por você</b>.</p>
                    </div>
                </section>
            </main>
            <UsuarioRodape />
        </main>
    )
}