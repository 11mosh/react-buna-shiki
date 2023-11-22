import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { toast } from 'react-toastify';
import { buscarIdProduto, buscarTodosProdutos } from '../../../api/produtoApi';

export default function DescricaoProduto () {
    const [produto, setProduto] = useState({ preco: '', promocao: '', imagens: [{}], detalhes: { alergia: '-', marca: '-', dimensoes: '-', peso: '-'}, categoria: '-'})
    const {id} = useParams()
    const [produtosSugestao, setProdutosSugestao] = useState([{promocao: '', preco: ''}])
    const [renderizar, setRenderizar] = useState('')
    const navigate = useNavigate();

    function voltar () {
        window.history.back();
        // navigate(-1);
    }


    async function buscarProdutoClick() {
        try{
            let respProduto = await buscarIdProduto(id)
            respProduto.qtd = 1
            respProduto.imagem = respProduto.imagens[0].caminho
            setProduto(respProduto)
            
            buscarProdutosSugestaoClick()
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    function produtoSugestaoClicado(id) {
        navigate(`/descricao/${id}`)
    }

    function adicionarCarrinho(){
        if(!storage('usuario-logado')){
            toast.info('Faça login ou cadastro para adicionar coisas ao carrinho.')
        }
        else{
            let pedido = storage('usuario-pedido')
            pedido.produtos = [...pedido.produtos, produto]
            setRenderizar('renderizando')
            storage('usuario-pedido', pedido)
        }
    }

    function comprar(){
        if(!storage('usuario-logado')){
            toast.info('Faça login ou cadastro para comprar algo')
        }
        else{
            let pedido = storage('usuario-pedido')
            pedido.produtos = [...pedido.produtos, produto]
            
            setRenderizar('renderizando')
            storage('usuario-pedido', pedido)
            navigate('/carrinho')
        }
    }

    async function buscarProdutosSugestaoClick(){
        try{
            const respProdutos = await buscarTodosProdutos()
            let produtos = []


            while(produtos.length < 4){
                let num = Math.random() * 100
                num = num.toFixed(0)
                if(respProdutos[num]){
                    if(produtos.includes(respProdutos[num]) === false)
                        produtos.push(respProdutos[num])
                }

            }
            
            setProdutosSugestao(produtos)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    useEffect(() => {
        buscarProdutoClick()
        
        // eslint-disable-next-line
    }, [id])
    
return (
    <main className='descricao-produto'>
        <CabecalhoUsuario linha='aparecer'/>

        <article className='corpo-site'>
            <div onClick={() => window.history.back()} className='back-to-page'>
                <img src="/assets/images/icon-seta-preta.png" alt="Erro ao exibir a imagem"/>
                <h3>Voltar para a página anterior</h3>
            </div>
         <section className="agrupamento">
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
                        <section className="tipo-imagem">
                            <img src="/assets/images/intensidade.png" alt="" />
                        </section>
                        <p><b>Intensidade</b></p>
                        <p>{produto.detalhes.intensidade ? produto.detalhes.intensidade : '-'}</p>
                    </div>
                    <div className="tipos">
                        <section className="tipo-imagem">
                            <img src="/assets/images/docura.png" alt="" />
                        </section>
                        <p><b>Doçura</b></p>
                        <p>{produto.detalhes.docura ? produto.detalhes.docura : '-'}</p>
                    </div>
                    <div className="tipos">
                        <section className="tipo-imagem">
                            <img src="/assets/images/acidez.png" alt="" />
                        </section>
                        <p><b>Acidez</b></p>
                        <p>{produto.detalhes.acidez ? produto.detalhes.acidez : '-'}</p>
                    </div>
                    <div className="tipos">
                        <section className="tipo-imagem">
                            <img src="/assets/images/torra.png" alt="" />
                        </section>
                        <p><b>Torra</b></p>
                        <p>{produto.detalhes.torra ? produto.detalhes.torra : '-'}</p>
                    </div>
                </div>
            </main>

            <main className="compra-categoria">
             <article className='compra'>
                    <nav className="nome-preco">
                        <h1>{produto.produto} {produto.categoria === 'Café em grãos' || produto.categoria === 'Café em pó' ? produto.detalhes.peso : ''}</h1>
                        {produto.promocao !== "0.00"
                            ? <h3>De: <b style={{textDecoration: 'line-through'}}>R${produto.preco.replace('.', ',')}</b></h3>
                            : <></>
                        }
                        {produto.promocao !== "0.00"
                            ? <h2>POR: <b>R${produto.promocao.replace('.', ',')}</b></h2>
                            : <h2><b>R${produto.preco.replace('.', ',')}</b></h2>
                        }
                    </nav>

                    <nav className="botoes">
                        <button className='botao' onClick={comprar}>
                            Comprar
                        </button>
                        <button className='botao' onClick={adicionarCarrinho}>
                            Adicionar ao Carrinho
                        </button>
                    </nav>

                    {/* <div className="formas-entrega">
                        <p style={{fontSize: '18px'}}>Calcular valores e formas de entrega</p>
                        <div className="input-botao">
                            <input type="number" placeholder='Digite seu CEP'/>
                            <button className="botao">Calcular</button>
                        </div>
                    </div> */}

                    {/* <div className="opcoes-entrega">
                        <div>
                            <p>Entrega Econômica</p>
                            <img src="/assets/images/sedex-logo.png" alt="" />
                            <p>Receba em até <b>4 dias</b> por <b>R$6,00</b></p>
                        </div>
                        <div>
                            <p>Entrega Express</p>
                            <img src="/assets/images/loggi-logo.png" alt="" id='loggi-logo'/>
                            <p id='texto-loggi'>Receba em até <b>2 dias</b> por <b>R$11,00</b></p>
                        </div>
                    </div> */}
                </article>

                <div className="categoria"><h1><b>CATEGORIA:</b> {produto.categoria.toUpperCase()}</h1> <img src={produto.imgCategoria} alt="" /></div>
            </main>
            </section>

            <section className="descricao">
                <h1>Descrição</h1>
                <p>{produto.detalhes.produto}</p>
            </section>

            <section className='detalhes-tecnicos'>
                <h1 style={ {marginTop: '20px ', marginBottom: '10px'} }>Detalhes técnicos</h1>

                <div className='tabelas'>
                    <table id='tabela1'>
                        <tbody>
                        <tr>
                            <td>Marca</td>
                            <td id='alergia'>Informações sobre alergia</td>
                            <td>Peso</td>
                            <td id='alergia'>Dimensões do produto</td>
                        </tr>
                        </tbody>
                    </table>

                    <table id='tabela2'>
                        <tbody>
                        <tr>
                            <td>{produto.detalhes.marca}</td>
                            <td id='alergia'>{produto.detalhes.alergia}</td>
                            <td>{produto.detalhes.peso}</td>
                            <td id='alergia'>{produto.detalhes.dimensoes}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                
            </section>
            <h1>Você pode precisar: </h1>

            <section className="voce-pode-precisar">

                <div className='produtos-necessidade'>
                    {/* <button>&gt;</button> */}
                    {produtosSugestao.map((item) => {
                        return(
                        <div key={item.id} className="produto" onClick={() => produtoSugestaoClicado(item.id)}>
                            <img src={item.imagem} alt="" />
                            <p id='nomeProduto'> {item.produto}</p>
                            { item.promocao !== "0.00"
                               ? <p className='preco-produto'><b>R${item.promocao.replace('.', ',')}</b></p>
                               : <p className='preco-produto'><b>R${item.preco.replace('.', ',')}</b></p>
                            }
                        </div>
                        )
                    })}
                    {/* <button>&gt;</button> */}
                </div>
            </section>
        </article>
        <UsuarioRodape />
    </main>
 )
}