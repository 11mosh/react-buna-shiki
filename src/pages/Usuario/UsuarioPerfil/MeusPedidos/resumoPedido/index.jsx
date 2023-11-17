import CabecalhoUsuario from '../../../../../components/Usuario/UsuarioCabecalho'
import './index.scss'

import ResumoPedido from '../../../../../components/Usuario/ResumoPedido'
import UsuarioRodape from '../../../../../components/Usuario/UsuarioRodape'
import { Link, useParams } from 'react-router-dom'


export default function Index() {
const {id} = useParams();

    return(
        <div id='page-resumo-pedido'>
            <CabecalhoUsuario />
            <div id='conteudo'>
                <ResumoPedido idPedido={id}/>
                <section>
                    <Link to='/conta/meus-pedidos'>
                        <img src='/assets/images/icon-seta-longa-esquerda.svg' alt='seta-esquerda-branca' />
                        Voltar para meus pedidos
                    </Link>
                </section>
            </div>
            <UsuarioRodape />
        </div>
    )
}