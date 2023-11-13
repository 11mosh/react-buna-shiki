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
            <h1 style={{alignSelf: 'center', textAlign: 'center', position: 'relative', left: '-15px', marginTop: '30px', marginBottom: '50px'}}>Cadastrar um novo combo</h1>
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
                    </div>

                    <button id='button1'>Finalizar cadastro</button>
                </section>
                
                <section className="selecao-produtos">
                    <p style={{fontFamily: 'Inter', marginBottom: '10px', fontWeight: 600, fontSize: '17px'}}>Produtos para montar combos: </p>
                    <article className='produtos-disponiveis'>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                        </div>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                        </div>
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                        </div>
                    </article>
                    <h6 style={{marginTop: '10px'}}>Preço sugerido: <b>R$169,39</b></h6>
                    <article className='visualizacao'>
                        <p style={{fontFamily: 'Inter',marginBottom: '10px', fontWeight: 600, fontSize: '17px'}}>Pré-visualização do combo:</p>
                        <div className='produtos-disponiveis' id='produtos-visualizacao'>
                            <div className="item">
                                <img src="/assets/images/cafeteiraa.png" alt="" />
                                <p>Café Orfeu Clássico 1kg</p>
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