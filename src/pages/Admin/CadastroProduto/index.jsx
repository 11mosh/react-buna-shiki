import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios'

function CadastroProduto () {

    const [fotos, setFotos] = useState([]);

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

    const [categoria, setCategoria] = useState("");
    const [intensidade, setIntensidade] = useState(0);
    const [acidez, setAcidez] = useState(0);
    const [docura, setDocura] = useState(0);
    const [torra, setTorra] = useState(0);


    async function cadastrarProduto() {
        const produto = {
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

        let url = "http://localhost:5000/produto";
        
        let resposta = await axios.post(url, produto);
        console.log('cadastrado! ' + resposta);
    }

    

    function exibirImagens (event) {
        const novosArquivos = [...fotos];
        const selecionados = event.target.files;

        for (let i = 0; i < selecionados.length; i++) {
            novosArquivos.push(URL.createObjectURL(selecionados[i]));
          };
          setFotos(novosArquivos);
      }

    return (
        <main className='cadastro-produto'>
            <CabecalhoAdm />
            <nav style={{padding: '20px'}}>
                <Link to={'/adm/inicio'} style={{ decoration: 'dashed', color: 0}}> Tela Inicial </Link>
                 &gt;
                <p>Adicionar um Produto </p>
            </nav>
            <hr />

            

            <div className='conteudo'><h1>Cadastrar um novo produto</h1>
                <div className='formulario'>
                    <div className='selecao-imagem'>
                        <form action=''>
                            <p>Fazer o upload das imagens</p>
                            <label htmlFor="arquivo"><img src="/assets/images/seta-upload.png" alt="" /></label>
                            <input
                                type="file"
                                htmlFor='arquivo'
                                onChange={exibirImagens}
                                style={{ display: 'none'}}
                                id='arquivo'
                            />
                        </form>
                        <article className="campo-imagens">
                            {fotos.map((arquivo) => (
                            <div className='imagem-upada'>
                                <img src={arquivo} alt="" />
                            </div>
                            ))
                        } 
                        </article>
                        
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
                                {console.log(precoVenda)}

                                <label htmlFor="">Dimensões do produto</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}
                                value={dimensoes} onChange={e => setDimensoes(e.target.value)}/>
                            </form>
                            
                            <article className='produto-detalhes'>
                                <section className='categorias'>
                                    <div>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" checked={categoria}/>
                                            <p>Café em grão</p>
                                        </label>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" checked={categoria}/>
                                            <p>Café em pó</p>
                                        </label>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" />
                                            <p>Cafeteira</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" />
                                            <p>Cápsula</p>
                                        </label>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" />
                                            <p>Moedor</p>
                                        </label>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" />
                                            <p>Filtro</p>
                                        </label>
                                    </div>
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
                            <button className='' onClick={cadastrarProduto}>Finalizar cadastro</button>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    )
};

export default CadastroProduto;