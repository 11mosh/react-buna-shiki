import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { buscarTodosProdutos } from '../../../api/produtoApi';
import { adicionarItensCombo, criarCombo } from '../../../api/comboApi';
import { Link } from 'react-router-dom';

export default function CadastroCombo () {

    const [nomeCombo, setNomeCombo] = useState('');
    const [preco, setPreco] = useState();
    const [produtosParaCombo, setProdutosParaCombo] = useState([])
    const [produtosSelecionados, setProdutosSelecionados] = useState([])
    const [precoSugerido, setPrecoSugerido] = useState()

    async function buscarProdutosParaCombo() {
        try{
            const resp = await buscarTodosProdutos()
            setProdutosParaCombo(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    async function finalizarCombo() {
        try{
            if(produtosSelecionados.length === 4){
                console.log('oi');
                const combo = {
                    nome: nomeCombo,
                    preco: preco
                }
                const respCombo = await criarCombo(combo)
                await adicionarItensCombo(respCombo.id, produtosSelecionados)
                toast.success('Combo criado!!')
                buscarProdutosParaCombo()
                limparVariaveis()
            }
            else{
                toast.info('É preciso adicionar 4 produtos para fazer um combo')
            }
        }
        catch(err){
            if(err.response)
                toast.warn(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    function mudarPreco(valor) {
        const valorNumber = Number(valor)
        console.log(valorNumber);
        if(isNaN(valorNumber)){}

        else{
            setPreco(valor)
        }
    }

    function limparVariaveis(){
        setNomeCombo('')
        setPreco('')
        setPrecoSugerido()
        setProdutosSelecionados([])
    }

    function removerProdutosSelecionado(index) {
        setProdutosParaCombo([...produtosParaCombo, produtosSelecionados[index]])
        
        const produtosFiltrados = produtosSelecionados.filter(item => item.id !== produtosSelecionados[index].id)

        setProdutosSelecionados(produtosFiltrados)


    }

    function selecionarProduto(index){
        if(produtosSelecionados.length !== 4) {
            setProdutosSelecionados([...produtosSelecionados, produtosParaCombo[index]])
    
            let novosProdutos = produtosParaCombo.filter(item => item.id !== produtosParaCombo[index].id)
            setProdutosParaCombo(novosProdutos)
        }
        else{
            toast.info('Só é possível inserir no máximo 4 produtos em um combo ')
        }

    }   

    function verificarPeso(index, quem){
        if(produtosSelecionados.lenght !== 0 && quem === 'selecionados'){
            if(produtosSelecionados[index].categoria === 'Café em grãos' || produtosSelecionados[index].categoria === 'Café em pó')
                return produtosSelecionados[index].detalhes.peso
            else
                return ''
        }
        else if(produtosParaCombo.lenght !== 0 && quem === 'combo'){
            if(produtosParaCombo[index].categoria === 'Café em grãos' || produtosParaCombo[index].categoria === 'Café em pó')
                return produtosParaCombo[index].detalhes.peso
            else
                return ''
        }
    }

    function calcularPreco() {
        let total = produtosSelecionados.reduce((totalCalc, item) => {
            totalCalc = totalCalc + Number(item.preco)
            return totalCalc
        }, 0)

        let desconto = total * 0.05
        let totalComDesc = total - desconto
        console.log(total);
        console.log(desconto);

        setPrecoSugerido(totalComDesc)
    }

    function verificarTecla(e){
        if(e.key === 'Enter')
            finalizarCombo()
    }


    useEffect(() => {
        buscarProdutosParaCombo()

        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if(produtosSelecionados.length !== 0)
            calcularPreco()

    }, [produtosSelecionados])
 

    return (
        <main className='cadastro-combo'>
            <CabecalhoAdm/>
            
            <div className='conteudo-site'>
            <h1 style={{alignSelf: 'center', textAlign: 'center', position: 'relative', left: '-15px', marginTop: '10px', marginBottom: '35px'}}>Cadastrar um novo combo</h1>
            <article className="card-cadastro">
                <section className='sec1'>
                    <div className="formulario">
                        <div>
                            <label htmlFor="">Nome do combo</label>
                            <input type="text" name="" id="" onKeyDown={(e) => verificarTecla(e)} value={nomeCombo} onChange={e => setNomeCombo(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">Preço de venda</label>
                            <input type="text" onKeyDown={(e) => verificarTecla(e)} value={preco} onChange={e => mudarPreco(e.target.value)}/>
                        </div>
                    </div>

                    <button id='button1' onClick={finalizarCombo}>Finalizar cadastro</button>
                </section>
                
                <section className="selecao-produtos">
                    <p style={{fontFamily: 'Inter', marginBottom: '10px', fontWeight: 600, fontSize: '17px'}}>Produtos para montar combos: </p>
                    <article className='produtos-disponiveis'>
                        {produtosParaCombo.map((item, index) => {
                            return(
                                <div className="item" key={item.id} onClick={() => selecionarProduto(index)}>
                                    <img src={item.imagem} alt="" />
                                    <p>{item.produto} {verificarPeso(index, 'combo')}</p>
                                    <p>{item.preco}</p>
                                </div>
                            )
                        })}
                    </article>
                    <article className='visualizacao'>
                        <p style={{fontFamily: 'Inter', fontWeight: 600, fontSize: '17px'}}>Pré-visualização do combo:</p>
                        <div className='produtos-disponiveis' id='produtos-visualizacao'>
                            
                            {produtosSelecionados.map((item, index) => {
                                return(
                                    <div className="item itemDeletar" key={item.id} onClick={() => removerProdutosSelecionado(index)}>
                                        <img src={item.imagem} alt="" onClick={() => removerProdutosSelecionado(index)}/>
                                        <p id='deletar'> REMOVER </p>
                                        <p>{item.produto} {verificarPeso(index, 'selecionados')}</p>
                                        <p>{item.preco}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <h6 style={{marginTop: '0px'}}>Preço sugerido: <b>R$ {precoSugerido}</b></h6>
                    </article>

                    <button id="button2" onClick={finalizarCombo}>Finalizar Cadastro</button>
                </section>
            </article>
            </div>
        </main>
    )
}