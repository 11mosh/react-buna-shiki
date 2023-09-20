import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';




function Consulta() {
  return (

    <body> 
      <CabecalhoAdm/> 
      <div className="consulta">
          <a className="a1" href=''>Tela inicial</a>
          <a className="a2" href=''>Visualizar produtos</a>
      </div>

      <div className='consulta-de-produtos'>
        <h2> Consulta de produtos</h2>
        <button><h1>Adicionar um produto</h1></button>
      </div>

      <div className='tabela-consulta'>
        <div className='buscar'>
          <input type="text" name='' placeholder='Busque por produtos, id do produto'/> 

          <section>
            <img src='/assets/images/adm/lupa.svg'/>
          </section>
          </div>
        <div className='filtro'>

          <div className='por-preco'>
            <h3>Ordenar por:</h3>
            <select type="text" name='' id='Mais caro'/>
          </div>
          <div className='selecao-1'>
            <h3>Filtrar por categoria:</h3>
            <select type="text" name='' id='Selecionar' placeholder='Filtrar por categoria'/>
          </div>
          <div className='selecao-2'>
            <h3>Filtrar por ADM:</h3>
            <select type="text" name='' id='Selecionar'/>
          </div>
        </div>

        <div className='consultas'>
          <div className='name'>
            <h4 className='numb1'>ID</h4>
            <h4 className='numb2'>Produto</h4>
            <h4 className='numb3'>Categoria</h4>
            <h4 className='numb4'>ADM</h4>
            <h4 className='numb5'>Estoque</h4>
            <h4 className='numb6'>Preços</h4>
            <h4 className='numb7'>Promocional</h4>
          </div>
          <div className='tab-consulta'>
            <div className='tab'>
                <div>7</div>
                <img src="/assets/images/cafeteiraa.png" alt="" />
                <div>Cafeteiras</div>
                <div>Edonardo</div>
                <div>10</div>
                <div>R$302,45</div>
                <div>-</div>
            </div>
            <div className='tab'>
                <div>7</div>
                <img src="/assets/images/cafeteiraa.png" alt="" />
                <div>Cafeteiras</div>
                <div>Edonardo</div>
                <div>10</div>
                <div>R$302,45</div>
                <div>-</div>
            </div>

            <div className='tab'>
                <div>7</div>
                <img src="/assets/images/cafeteiraa.png" alt="" />
                <div>Cafeteiras</div>
                <div>Edonardo</div>
                <div>10</div>
                <div>R$302,45</div>
                <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );

}

export default Consulta;