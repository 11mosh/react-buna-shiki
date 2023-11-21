import './index.scss';
import Cabecalho from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta';
import { useEffect, useState } from 'react';
import { URLRota } from '../../../../constants';
import {toast} from 'react-toastify';
import axios from 'axios';
import storage from 'local-storage';
import { useNavigate } from 'react-router';

export default function Cartoes () {

    const [exibirCartao, setExibirCartao] = useState(false);
    const [numeroCartao, setNumeroCartao] = useState(0);
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [nomeTitular, setNomeTitular] = useState('');
    const [cpf, setCpf] = useState('');
    const [cartoes, setCartoes] = useState([]);
    const navigate = useNavigate()

    async function chamarCartoes () {
        const idUsuario = storage('usuario-logado').id
        const cartoess = await axios.get(URLRota + '/cartoes/' + idUsuario);
        setCartoes(cartoess.data);
        
    }

    async function novoCartao () {
        try {     
            const idUsuario = storage('usuario-logado').id
            const urlCartao = URLRota + '/cartao/' + idUsuario;
            const infoCartao = {
                idCliente: idUsuario,
                numeroCartao: numeroCartao,
                validade: validade,
                cvv: cvv,
                titular: nomeTitular,
                identidade: cpf
            };

            const resposta = await axios.post(urlCartao, infoCartao);
            toast.success('Novo cartão cadastrado!');

            setNumeroCartao('');
            setValidade('');
            setCvv('');
            setNomeTitular('');
            setCpf('');
            chamarCartoes()
        } catch(err){
            toast.error(err.response.data.erro)
        }
    };

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/login/conta')
        }
        else{
            chamarCartoes();
        }
    }, [])

    return (
        <main className="perfil-cartoes">
            <Cabecalho linha='aparecer'/>
            <main className="corpo">

                <BarraNavegacao selecionar='Cartões' />
                <main className="aba-cartoes">
                    <article className="cadastro-cartao">
                    <article className='info-cartao'>
                            <div className='titulo'>
                                <p>Cadastrar um novo cartão</p>
                                <input type="checkbox" name="checkbox1" id="checkbox1" style={{display: 'none'}}/>
                                <label htmlFor="checkbox1">
                                    <img src="/assets/images/setadropdown.png" alt="" onClick={() => setExibirCartao(!exibirCartao)}/>
                                </label>
                            </div>
                            {exibirCartao 
                            ? <div className='campo-inputs'>
                            <div>
                                <label htmlFor="">Número do cartão *</label>
                                <input type="text" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)}/>
                            </div>
                            <article className='secao2'>
                                <div>
                                    <label htmlFor="">Validade *</label>
                                    <input type="text" name="" id="" value={validade} onChange={e => setValidade(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="">CVV *</label>
                                    <input type="text" value={cvv} onChange={e => setCvv(e.target.value)}/>
                                </div>
                            </article>
                            <div>
                                <label htmlFor="">Nome do títular *</label>
                                <input type="text" value={nomeTitular} onChange={e => setNomeTitular(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="">CPF/CNPJ do títular *</label>
                                <input type="text" value={cpf} onChange={e => setCpf(e.target.value)}/>
                            </div>
                        <button onClick={novoCartao}>Cadastrar</button>

                        </div>

                            : <></>
                            }
                            
                        </article>
                        
                    </article>
                    <hr style={{width: '95%', marginTop: '20px'}}/>

                    <article className="cartoes-existentes">
                        <h3>Cartões cadastrados</h3>

                        <div className="cartoes">
                            

                            {cartoes.map((item) => {
                                return (
                                    <section className="cartao">
                                        <h3>{item.nome}</h3>
                                        <p>{item.numero}</p>

                                        <div className="agrupamento">
                                            <div className="validade-cvv">

                                                <div className="validade">
                                                    <p>Validade</p>
                                                    <p className='fonte-maior'>{item.complemento}</p>
                                                </div>
                                                <div className="cvv">
                                                    <p>CVV</p>
                                                    <p className='fonte-maior'>{item.cvv}</p>
                                                </div>
                                            </div>
                                            <div className="imagens">
                                                <img src="/assets/images/mastercard.png" alt="dfsfds" />
                                            </div>
                                        </div>
                                    </section>
                                )
                            })}
                            
                        </div>
                    </article>
                </main>
            </main>
            <UsuarioRodape/>
        </main>
    )
}