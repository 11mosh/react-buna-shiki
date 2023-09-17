import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link } from 'react-router-dom';
import { useState} from 'react';


function CadastroProduto () {

    const [fotos, setFotos] = useState([]);
   

    function exibirImagens (event) {
        const novosArquivos = [...fotos];
        const selecionados = event.target.files;

        for (let i = 0; i < selecionados.length; i++) {
            novosArquivos.push(selecionados[i]);
          };
          console.log(selecionados)

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
                                <img src={URL.createObjectURL(arquivo)} alt="" />
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
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}/>

                                <div>
                                    <div>
                                    <label htmlFor="">Peso</label>
                                    <textarea type="text" name="" id="peso" style={{resize: 'none', overflow: 'hidden'}}/>
                                    </div>
                                    
                                    <div>
                                    <label htmlFor="">Estoque</label>
                                    <textarea type="text" name="" id="estoque" style={{resize: 'none', overflow: 'hidden'}}/>
                                    </div>
                                    
                                </div>

                                <label htmlFor="">Marca</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}/>

                                <label htmlFor="">Preço de venda</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}/>

                                <label htmlFor="">Dimensões do produto</label>
                                <textarea type="text" name="" id="" style={{resize: 'none', overflow: 'hidden'}}/>
                            </form>
                            
                            <article className='produto-detalhes'>
                                <section className='categorias'>
                                    <div>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" />
                                            <p>Café em grão</p>
                                        </label>
                                        <label htmlFor="">
                                            <input type="radio" name="a" id="" />
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
                                    <section><img src="/assets/images/intensidade.png" alt="" /> <p> Intensidade </p>   <input type="text" name="" id="" placeholder='ex: 6'/></section>
                                    <section><img src="/assets/images/docura.png" alt="" />      <p> Doçura </p>        <input type="text" name="" id="" placeholder='ex: Alta'/></section>
                                    <section><img src="/assets/images/acidez.png" alt="" />      <p> Acidez </p>        <input type="text" name="" id="" placeholder='ex: Alta'/></section>
                                    <section><img src="/assets/images/torra.png" alt="" />       <p> Torra </p>         <input type="text" name="" id="" placeholder='ex: Alta  '/></section>
                                </nav>
                            </article>
                        </section>

                        <section className='lado-direito'>
                            <label htmlFor="">Descrição do produto</label>
                            <textarea type="text" name='' id='descricao' style={{resize: 'none', overflow: 'hidden'}}/>

                            <label htmlFor="">Preço promocional</label>
                            <textarea type="text" name='' id='' style={{resize: 'none', overflow: 'hidden'}}/>

                            <label htmlFor="">Informações sobre alergia</label>
                            <textarea type="text" name='' id='alergia' style={{resize: 'none', overflow: 'hidden'}}/>

                            <div>
                                <input type="checkbox" name="" id="assinatura" />
                                <label htmlFor="">Disponível para assinatura</label>
                            </div>
                            <button className=''>Finalizar cadastro</button>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    )
};

export default CadastroProduto;