import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

export default function CadastroCombo () {

    const [quantidade, setQuantidade] = useState(0);
    const [nomeCombo, setNomeCombo] = useState('');
    const [preco, setPreco] = useState(0);
    const [estoque, setEstoque] = useState(0);

    

    return (
        <main className='cadastro-combo'>
            <CabecalhoAdm/>
            
            <div className='conteudo-site'>
            <h1 style={{alignSelf: 'center', textAlign: 'center', position: 'relative', left: '-15px'}}>Cadastrar um novo combo</h1>
            <article className="card-cadastro">
                <section className='sec1'>
                    <div className="formulario">
                        <div>
                            <label htmlFor="">Nome do combo</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Preço de venda</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Estoque</label>
                            <input type="text" />
                        </div>
                    </div>

                    <button id='button1'>Finalizar cadastro</button>
                </section>
                
                <section className="selecao-produtos">
                    <p style={{fontFamily: 'Inter'}}>Produtos disponíveis para montar combos</p>
                    <article className='produtos-disponiveis'>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <h2>1</h2>
                                <p>+</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <h2>1</h2>
                                <p>+</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <h2>1</h2>
                                <p>+</p>
                            </div>
                        </div>
                    </article>
                    <h6>Preço sugerido: <b>R$169,39</b></h6>
                    <article className='visualizacao'>
                        <p style={{fontFamily: 'Inter'}}>Pré-visualização do combo:</p>
                        <div className='produtos-disponiveis' id='produtos-visualizacao'>
                            <div className="item">
                                <img src="/assets/images/cafeteiraa.png" alt="" />
                                <p>Café Orfeu Clássico 1kg</p>
                                <div style={{color: 'black', borderRadius: '100px', padding: '5px', backgroundColor: '#F47E3C', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>1</div>
                            </div>
                        </div>
                    </article>

                    <button id="button2">Finalizar Cadastro</button>
                </section>
            </article>
            </div>
        </main>
    )
}