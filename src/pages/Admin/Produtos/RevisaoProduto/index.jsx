import './index.scss';
import CabecalhoAdm from '../../../../components/Admin/AdmCabecalho';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { buscarIdProduto, excluir } from '../../../../api/produtoApi';
import { confirmAlert } from 'react-confirm-alert';

export default function RevisaoProduto () {
    const [produto, setProduto] = useState({detalhes: {}, imagens: [{}, {}, {}]})
    const {id} = useParams()
    const navigate = useNavigate()

    async function buscarProduto(){
        try{
            const produtoResp = await buscarIdProduto(id)

            setProduto(produtoResp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    function deletarProduto() {
        confirmAlert({
            title: 'Excluir produto',
            message: `Deseja mesmo excluir o produto "${produto.produto}" ?`,
            buttons: [{
                label: 'Sim',
                onClick: async () => {
                    try{
                        await excluir(produto.id, produto.id_detalhe)
                        toast.success('Produto deletado!')
                        setTimeout(() => {
                            navigate('/adm/produtos')
                        }, 3000)
                    }
                    catch(err){
                        if(err.response)
                            toast.error(err.response.data.erro)
                        else
                            toast.error(err.message)
                    }
                } 
            },
            {
                label: 'Não'
            }]
        })
    }

    function linkAlterarProduto() {
        navigate(`/adm/${produto.id}/alterar-produto`)
    }

    useEffect(() => {
        buscarProduto()

        // eslint-disable-next-line
    }, [])


    return (
        <main className="revisao-produto">
            <CabecalhoAdm />
            <nav>  
                <Link to='/adm/produtos'>
                    <img src="/assets/images/icon-seta-preta.svg" alt="seta preta esquerda" />
                    <h3> Voltar para a página de consulta de produtos</h3>
                </Link>
            </nav>

            <hr />

            <section className="corpo">
            <main className="imagem-tipos">
                <article className='imagem-principal'>
                    <img src={produto.imagens[0].caminho} alt="" />
                    <nav className='imagens-produto'>
                        { produto.imagens[1] ? 
                            <div className="imagem-baixa">
                                <img src={produto.imagens[1].caminho} alt="" />
                            </div>
                            : <></>
                        }
                        { produto.imagens[2] ? 
                            <div className="imagem-baixa">
                                <img src={produto.imagens[2].caminho} alt="" />
                            </div>
                        :   <></>
                        }
                    </nav>
                </article>

                <div className="detalhes-produto">
                    <div className="tipos">
                        <p><b>Intensidade</b></p>
                        <p>{produto.detalhes.intensidade ? produto.detalhes.intensidade : '-' }</p>
                    </div>
                    <div className="tipos">
                        <p><b>Doçura</b></p>
                        <p>{produto.detalhes.docura ? produto.detalhes.docura : '-'}</p>
                    </div>
                    <div className="tipos">
                        <p><b>Acidez</b></p>
                        <p>{produto.detalhes.acidez ? produto.detalhes.acidez : '-'}</p>
                    </div>
                    <div className="tipos">
                        <p><b>Torra</b></p>
                        <p>{produto.detalhes.torra ? produto.detalhes.torra : '-'}</p>
                    </div>
                </div>
            </main>

                <article className="detalhes-do-produto">
                    <div className="nome-acoes">
                    <h1>{produto.produto}</h1>
                        <div className="acoes">
                            <i className="fa-regular fa-pen-to-square fa-lg" onClick={linkAlterarProduto}></i>
                            <i className="fa-regular fa-trash-can fa-lg" onClick={deletarProduto}></i>
                        </div>
                    </div>

                    <div className="details">
                        <div className="s1">
                            <p><b>Preço sem promoção:</b> R$ {produto.preco}</p>
                            <p><b>Preço promocional:</b> {produto.promocao !== '0.00' ? `R$ ${produto.promocao}` : '-'}</p>
                            <p><b>Estoque:</b> {produto.estoque}</p>
                        </div>
                        <div className="s2">
                            <p><b>Categoria:</b> {produto.categoria}</p>
                            <p><b>ADM:</b> {produto.admin} </p>
                            <p><b>ID:</b> {produto.id}</p>
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
                                <td>{produto.detalhes.marca}</td>
                                <td>{produto.categoria}</td>
                                <td id='gluten'>{produto.detalhes.alergia}</td>
                                <td>{produto.detalhes.peso}</td>
                                <td id='dimensoes'>{produto.detalhes.dimensoes}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>Descrição:</h1>

                    <div className="descricao">
                        <p>{produto.detalhes.produto}</p>
                    </div>
                </article>
            </section>
        </main>
    )
};