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
            <nav>
                <Link to={'/'} style={{ decoration: 'dashed', color: 0}}> Tela Inicial  &gt;</Link>
                
                <p>Adicionar um Produto </p>
            </nav>
            <hr />

            <h1>Cadastrar um novo produto</h1>

            <div className='conteudo'>
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
                        {fotos.map((arquivo) => (
                            <div className='imagem-upada'>
                                <img src={URL.createObjectURL(arquivo)} alt="" />
                            </div>
                            ))
                        } 
                    </div>
                    <hr />

                    <article className='informacoes-produto'>
                        <section className='lado-esquerdo'>
                            <form action="">
                                <label htmlFor="">Nome do produto</label>
                                <input type="text" name="" id="" />

                                <div>
                                    <div>
                                    <label htmlFor="">Peso</label>
                                    <input type="text" name="" id="peso" />
                                    </div>
                                    
                                    <div>
                                    <label htmlFor="">Estoque</label>
                                    <input type="text" name="" id="estoque" />
                                    </div>
                                    
                                </div>

                                <label htmlFor="">Marca</label>
                                <input type="text" name="" id="" />

                                <label htmlFor="">Preço de venda</label>
                                <input type="text" name="" id="" />

                                <label htmlFor="">Dimensões do produto</label>
                                <input type="text" name="" id="" />
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
                            <input type="text" name='' id='descricao'/>

                            <label htmlFor="">Preço promocional</label>
                            <input type="text" name='' id=''/>

                            <label htmlFor="">Informações sobre alergia</label>
                            <input type="text" name='' id='alergia'/>

                            <label htmlFor="">Disponível para assinatura</label>
                            <input type="checkbox" name="" id="" />

                            <button>Finalizar cadastro</button>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    )
};

export default CadastroProduto;