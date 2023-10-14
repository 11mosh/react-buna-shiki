import { Link } from 'react-router-dom'
import './index.scss'


export default function Index(props) {
    
    
    
    function selecionarLink(Nomelink){
        if(props.selecionar === Nomelink)
            return 'selecionado'
    }
    
    return(
        <div id='comp-barra-navegacao-conta'>
            <nav>
                <div className="listra"></div>
                    <nav>
                        <Link to={'/conta/cartoes'} className={selecionarLink('Cartões')}>Cartões</Link> <hr className="desaparece" />
                        <Link to={'/conta/assinaturas'} className={selecionarLink('Assinaturas')}>Assinaturas</Link> <hr className="desaparece" />
                        <Link to={'/conta/dados-pessoais'} className={selecionarLink('DadosPessoais')}>Dados Pessoais</Link> <hr className="desaparece" />
                        <Link to={'/conta/enderecos'} className={selecionarLink('Endereços')}>Endereços</Link> <hr className="desaparece" />
                        <Link to={'/conta/meus-pedidos'} className={selecionarLink('MeusPedidos')} >Meus Pedidos</Link> <hr className="desaparece" />
                        <Link to={'/'}>Sair</Link>
                    </nav>
            </nav>
        </div>
    )
}