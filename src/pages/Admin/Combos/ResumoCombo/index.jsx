import './index.scss';
import CabecalhoAdm from '../../../../components/Admin/AdmCabecalho';
import axios from 'axios'
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { URLRota } from '../../../../constants';

export default function ResumoCombo () {

    const {id} = useParams();
    const [combo, setCombo] = useState([]);
    const [produto1, setProduto1] = useState({});
    const [produto2, setProduto2] = useState({});
    const [produto3, setProduto3] = useState({});
    const [produto4, setProduto4] = useState({});


    async function chamarCombo () {
        const url = URLRota + '/combo/' + id;
        const resposta = await axios.get(url);
        const dados = resposta.data;
        setCombo(dados);

        setProduto1(dados.produtos[0].produto)
        setProduto2(dados.produtos[1].produto)
        setProduto3(dados.produtos[2].produto)
        setProduto4(dados.produtos[3].produto)

    }

    useEffect(() => {
        chamarCombo();
    }, [])

    return (
        <main className="resumoCombo">
            <CabecalhoAdm />
            <main className="conteudo">
            <Link style={{marginBottom: '10px', textDecoration: 'none', color: 'black'}} to={'/adm/combos'}>Voltar à página de combos</Link>

            <h1>Resumo do combo</h1>

            <h2>Nome do combo: {combo.nome}</h2>

            <div className='texts'>
                <p>Preço de venda: R${combo.preco}</p>
                <p>ADM: {combo.admin}</p>
                <p>ID: {combo.id}</p>
            </div>

            <article className='a2'>
                <div>
                    <article className="p1">
                    <div className='item'>
                            <section>
                                <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                                <p> {produto1.produto} </p>
                                <h5 className='precoMarrom'> R${produto1.preco}</h5>
                                <p>Estoque: {produto1.estoque}</p>

                            </section>
                            <img className='a' src='/assets/images/icon-mais.png' alt='' />
                        </div>

                        <div className='item'>
                            <section>
                            <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                            <p> {produto2.produto} </p>
                            <h5 className='precoMarrom'> R${produto2.preco}</h5>
                            <p>Estoque: {produto2.estoque}</p>
                            </section>
                            <img className='a' src='/assets/images/icon-mais.png' alt='' />
                        </div>
                    </article>

                    <article className="p2">
                        <div className='item'>
                            <section>
                            <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                            <p> {produto3.produto} </p>
                            <h5 className='precoMarrom'> R${produto1.preco}</h5>
                            <p>Estoque: {produto3.estoque}</p>

                            </section>
                        </div>

                        <div className='item'>
                            <section>
                            <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                            <p> {produto4.produto} </p>
                            <h5 className='precoMarrom'> R${produto4.preco}</h5>
                            <p>Estoque: {produto4.estoque}</p>
                            </section>
                        </div>
                    </article>
                </div>
            </article> 
            
            <article className='a1' >
                <div>                        
                    <div className='item'>
                        <section>
                            <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                            <p> {produto1.produto} </p>
                            <h5 className='precoMarrom'> R${produto1.preco}</h5>
                            <p>Estoque: {produto1.estoque}</p>

                        </section>
                        <img className='a' src='/assets/images/icon-mais.png' alt='' />
                    </div>

                    <div className='item'>
                    <section>
                            <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                            <p> {produto2.produto} </p>
                            <h5 className='precoMarrom'> R${produto2.preco}</h5>
                            <p>Estoque: {produto2.estoque}</p>

                        </section>
                        <img className='a' src='/assets/images/icon-mais.png' alt='' />
                    </div>

                    <div className='item'>
                    <section>
                            <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                            <p> {produto3.produto} </p>
                            <h5 className='precoMarrom'> R${produto1.preco}</h5>
                            <p>Estoque: {produto3.estoque}</p>

                        </section>
                        <img className='a' src='/assets/images/icon-mais.png' alt='' />
                    </div>

                    <div className='item'>
                    <section>
                            <img  className='item-foto' src='/assets/images/cafeteiraa.png' alt='' />
                            <p> {produto4.produto} </p>
                            <h5 className='precoMarrom'> R${produto4.preco}</h5>
                            <p>Estoque: {produto4.estoque}</p>

                        </section>
                    </div>

                    
                </div>
            </article>
                    *
            </main>
        </main>
    )
}







{/* <article id='a1'>
    <h2> {combo.nome} </h2>
    <div>
        {combo.produtos.map((item, indexProdutos, array) => {
            
            return(
                <div key={item.produto.id}>
                    <section>
                        <img  src={item.produto.imagem} alt='' />
                        <p> {item.produto.produto} {item.produto.categoria === 'Café em grãos' || item.produto.categoria === 'Café em pó' ? item.produto.peso : ''} </p>
                        <h5 className='precoMarrom'> R${item.produto.preco}</h5>
                    </section>
                    <img className={verificarClasse(indexProdutos)} style={{display: verificarAparicao(item.id, indexProdutos, array)}} src='/assets/images/icon-mais.png' alt='' />
                </div>
            )
        })}
    </div>
</article> */}