import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import storage from 'local-storage'
import { alterar, buscarCategorias, buscarIdDetalhe, buscarIdImagens, buscarIdProduto, excluirImagens } from '../../../api/produtoApi';
import { URLRota } from '../../../constants';

function CadastroProduto () {
    const [id, setId] = useState(0)
    const [idDetalhe, setIdDetalhe] = useState(0)
    const [fotos, setFotos] = useState([]);
    const [urlImagem, setUrlImagem] = useState('');
    const [nome, setNome] = useState("");
    const [peso, setPeso] = useState("");
    const [marca, setMarca] = useState("");
    const [estoque, setEstoque] = useState("");
    const [precoVenda, setPrecoVenda] = useState(0);
    const [dimensoes, setDimensoes] = useState("");
    const [descricao, setDescricao] = useState("");
    const [precoPromocao, setPrecoPromocao] = useState(0);
    const [alergia, setAlergia] = useState("");
    const [assinatura, setAssinatura] = useState(false);
    const [categoria, setCategoria] = useState(0);
    const [intensidade, setIntensidade] = useState("");
    const [acidez, setAcidez] = useState("");
    const [docura, setDocura] = useState("");
    const [torra, setTorra] = useState("");
    const [fotosExcluir, setFotosExcluir]= useState([]);
    const [fotosAdicionadas, setFotosAdicionadas] = useState([]);
    const {id: idParam} = useParams();
    const [categorias, setCategorias] = useState([])

    const navigate = useNavigate()

    async function buscarCategoriasExibicao(){
        try{
            const categoriasBanco = await buscarCategorias()
            const categoriasSemCombo = categoriasBanco.filter((item) => item.nome !== 'Combos')
            setCategorias(categoriasSemCombo)
        }
        catch(err){
            toast.error(err.response.data.erro)
        }
    }

    function adicionarImagem () {
        const img = new Image();
        img.src = urlImagem;

        img.onload = () => {
            if(id !== 0) {
                setFotosAdicionadas([...fotosAdicionadas, urlImagem])
                let object = { caminho: urlImagem }
                setFotos([...fotos, object])
                setUrlImagem('');
            }
            else{
                setFotos([...fotos, urlImagem]);
                setUrlImagem('');
            }
        }
        img.onerror = () => {
            toast.error('URL Inválida!')
        }
    }

    function removerImagem(indice) {
        setFotosExcluir([...fotosExcluir, fotos[indice].id])
        const novasFotos = fotos.filter((imagem, i) => i !== indice);
        setFotos(novasFotos);
    }



    async function cadastrarProduto() {
        try {
            if(id){
                if (fotos.length === 0) {
                    toast.error('Insira ao menos uma imagem!')
                } else {
                    const idAdm = storage('adm-logado').adm_id
                    const alteracoes = {
                        idAdm: idAdm,
                        intensidade: intensidade,
                        docura: docura,
                        acidez: acidez,
                        torra: torra,
                        descricao: descricao,
                        marca: marca,
                        peso: peso,
                        alergia: alergia,
                        dimensoes: dimensoes,
                        idCategoria: categoria,
                        nome: nome,
                        preco: precoVenda,
                        promocional: precoPromocao,
                        disponivelAssinatura: assinatura,
                        estoque: estoque
                    };
                    await alterar(alteracoes, idDetalhe, id)
                    cadastrarImagens(id)
                    resetarCampos()
                    toast.success('Produto alterado!')
                    setTimeout(() => {
                        navigate('/adm/produtos')
                    }, 500)
            }}
            else{
                if (fotos.length === 0) {
                    toast.error('Insira ao menos uma imagem!')
                } else {
                    const idAdm = storage('adm-logado').adm_id
                    const produto = {
                        idAdm: idAdm,
                        intensidade: intensidade,
                        docura: docura,
                        acidez: acidez,
                        torra: torra,
                        descricao: descricao,
                        marca: marca,
                        peso: peso,
                        alergia: alergia,
                        dimensoes: dimensoes,
                        idCategoria: categoria,
                        nome: nome,
                        preco: precoVenda,
                        promocional: precoPromocao,
                        disponivelAssinatura: assinatura,
                        estoque: estoque
                    };
        
                    let urlProduto = URLRota + "/produto";
                    let respostaProduto = await axios.post(urlProduto, produto);
        
                    cadastrarImagens(respostaProduto.data.idProduto)
                    resetarCampos();
                    toast.success('Produto cadastrado!')
                }
            }
        } 
        catch (err) {
            if(err.response)
                toast.warn(err.response.data.erro)
            else
                toast.warn(err.message)
        }
    }

    
    async function cadastrarImagens(idProduto) {
        try {
            if(id !== 0){
                
                if(fotosAdicionadas) {
                    for (let item of fotosAdicionadas) {
                        let url = URLRota + "/imagemproduto";
                        const imagem = {
                            idProduto: idProduto,
                            caminho: item
                        }
                        await axios.post(url, imagem)
                    }
                }
                if(fotosExcluir) {
                    await excluirImagens(fotosExcluir, idProduto)
                } 
            }
            else{
                for (let item of fotos) {
                    let urlFormando = URLRota + "/imagemproduto";
                    const imagem = {
                        idProduto: idProduto,
                        caminho: item
                    }
                    await axios.post(urlFormando, imagem)
                }
            }

        } catch (err) {
            if(err.response)
                toast.warn(err.response.data.erro)
            else
                toast.warn(err.message)
        }
    }

    async function alterarInputs(){
        try{
            const produto = await buscarIdProduto(idParam)
            setIdDetalhe(produto.id_detalhe)
            const detalhes = await buscarIdDetalhe(produto.id_detalhe)
            const imagens = await buscarIdImagens(produto.id)
            let novasImagens = []
            for(let cont = 0; cont < imagens.length; cont++){
                novasImagens[cont] = imagens[cont]
            }
            setFotos(novasImagens)
            setNome(produto.produto);
            setPeso(detalhes.peso);
            setMarca(detalhes.marca);
            setEstoque(produto.estoque);
            setPrecoVenda(produto.preco);
            setDimensoes(detalhes.dimensoes);
            setDescricao(detalhes.produto);
            setPrecoPromocao(produto.promocao);
            setAlergia(detalhes.alergia);
            setAssinatura(produto.assinatura);
            setCategoria(produto.id_categoria);
            setIntensidade(detalhes.intensidade);
            setAcidez(detalhes.acidez);
            setDocura(detalhes.docura);
            setTorra(detalhes.torra);
            setId(produto.id)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }



    function resetarCampos () {
        setFotos([]);
        setNome("");
        setPeso("");
        setMarca("");
        setEstoque("");
        setPrecoVenda(0);
        setDimensoes("");
        setDescricao("");
        setPrecoPromocao(0);
        setAlergia("");
        setAssinatura(false);
        setCategoria(0);
        setIntensidade("");
        setAcidez("");
        setDocura("");
        setTorra("");
    };

    const enviarEnter = (event) => {
        if (event === 'Enter') {
            adicionarImagem();
        }
    }

    useEffect(() => {
        if(idParam){
            alterarInputs()
        }
        buscarCategoriasExibicao()
    }, [])

    return ( 
        <main className='cadastro-produto'>
            <CabecalhoAdm />
            

            

            <div className='conteudo'><h1>Cadastrar um novo produto</h1>
                <div className='formulario'>
                    <div className='selecao-imagem'>
                        <article className='insercao-imagem'>
                            <p>Insira a URL da imagem</p>
                            <div>
                                <input type="text" value={urlImagem}  onChange={e => setUrlImagem(e.target.value)} onKeyDown={(event) => {if (event.key === 'Enter') {adicionarImagem()}}}/>
                                <button onClick={adicionarImagem}> Adicionar </button>
                            </div>
                        </article>
                        {id === 0 
                        ?
                        <article className="campo-imagens">
                            {fotos.map((arquivo, indice) => (
                            <div className='imagem-upada' key={indice}>
                                <p>DELETAR</p>
                                <img src={arquivo} alt="" onClick={() => removerImagem(indice)}/>
                            </div>
                            ))
                        }
                        </article>
                        :
                        <article className="campo-imagens">
                            {fotos.map((item, indice) => (
                            <div className='imagem-upada' key={indice}>
                                <p>DELETAR</p>
                                <img src={item.caminho} alt="" onClick={() => {setFotosExcluir([...fotosExcluir, item.id]); removerImagem(indice)}} />
                            </div>
                            ))
                        }
                        </article>}
                    </div>
                    <hr />

                    <article className='informacoes-produto'>
                        <section className='lado-esquerdo'>
                            <form action="">
                                <label htmlFor="">Nome do produto</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}  value={nome} onChange={e => setNome(e.target.value)}/>
            

                                <div>
                                    <div>
                                    <label htmlFor="">Peso</label>
                                    <textarea type="text" name="" id="peso" style={{resize: 'none', overflow: 'hidden'}} value={peso} onChange={e => setPeso(e.target.value)}/>
                                
                                    </div>
                                    
                                    <div>
                                    <label htmlFor="">Estoque</label>
                                    <textarea type="text" name="" id="estoque" style={{resize: 'none', overflow: 'hidden'}} value={estoque} onChange={e => setEstoque(e.target.value)}/>
                                    </div>
                                    
                                </div>

                                <label htmlFor="">Marca</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}
                                value={marca} onChange={e => setMarca(e.target.value)}/>

                                <label htmlFor="">Preço de venda</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}
                                value={precoVenda} onChange={e => setPrecoVenda(e.target.value)}/>
                                

                                <label htmlFor="">Dimensões do produto</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}
                                value={dimensoes} onChange={e => setDimensoes(e.target.value)}/>
                            </form>
                            
                            <article className='produto-detalhes'>
                                <section className='categorias'>
                                    {categorias.map(item => {
                                        return(
                                        <label htmlFor="">
                                            <input type="radio" name="a" onClick={() => setCategoria(item.id)} checked={categoria === item.id ? true : false}/>
                                            <p>{item.nome}</p>
                                        </label>
                                        )
                                    })}
                                </section>
                                
                                <nav className='detalhes'>
                                    <section><img src="/assets/images/intensidade.png" alt="" /> <p> Intensidade </p>   <input type="text" name="" id="" placeholder='ex: 6' value={intensidade} onChange={e => setIntensidade(e.target.value)}/></section>
                                    <section><img src="/assets/images/docura.png" alt="" />      <p> Doçura </p>        <input type="text" name="" id="" placeholder='ex: Alta' value={docura} onChange={e => setDocura(e.target.value)}/></section>
                                    <section><img src="/assets/images/acidez.png" alt="" />      <p> Acidez </p>        <input type="text" name="" id="" placeholder='ex: Alta' value={acidez} onChange={e => setAcidez(e.target.value)}/></section>
                                    <section><img src="/assets/images/torra.png" alt="" />       <p> Torra </p>         <input type="text" name="" id="" placeholder='ex: Alta' value={torra} onChange={e => setTorra(e.target.value)}/></section>
                                </nav>
                            </article>
                        </section>

                        <section className='lado-direito'>
                            <label htmlFor="">Descrição do produto</label>
                            <textarea type="text" name='' id='descricao' style={{resize: 'none', overflow: 'hidden'}}
                            value={descricao} onChange={e => setDescricao(e.target.value)}/>

                            <label htmlFor="">Preço promocional</label>
                            <textarea type="text" name='' id='' style={{resize: 'none', overflow: 'hidden'}}
                            value={precoPromocao} onChange={e => setPrecoPromocao(e.target.value)}/>

                            <label htmlFor="">Informações sobre alergia</label>
                            <textarea type="text" name='' id='alergia' style={{resize: 'none', overflow: 'hidden'}}
                            value={alergia} onChange={e => setAlergia(e.target.value)}/>

                            <div>
                                <input type="checkbox" name="" id="assinatura" checked={assinatura} 
                                onChange={e => setAssinatura(e.target.checked)}/>
                                <label htmlFor="">Disponível para assinatura</label>
                            </div>
                            <button className='' onClick={cadastrarProduto}>{id ? 'Finalizar alteração' : 'Finalizar cadastro'}</button>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    )
};

export default CadastroProduto;