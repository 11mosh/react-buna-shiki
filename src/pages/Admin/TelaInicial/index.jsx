import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import './index.scss';
import {Link, useNavigate} from 'react-router-dom'
import storage from 'local-storage'

export default function Index() {
    const navigate = useNavigate()
    
    function Sair() {
        storage.remove('adm-logado')
        navigate('/adm')
    }
    
    return(
        <div id='page-adm-inicio'>
            <CabecalhoAdm/>
            <main>
                <section id='s1'>
                    <h1> Tela inicial </h1>
                </section>
                <section id='s2'>
                    <Link to='/adm/cadastro-produto'>
                        <div>
                            <img src='/assets/images/tela-inicial-adm/icon-coffee.svg' alt='icon-coffee' />
                        </div>
                        <h3> Adicionar um produto </h3>
                    </Link>
                    <Link to='/adm/produtos'>
                        <div>
                            <img id='eyes' src='/assets/images/tela-inicial-adm/icon-eyes.svg' alt='icon-eyes' />
                        </div>
                        <h3> Visualizar produto </h3>
                    </Link>
                    <Link to='/adm/pedidos'>
                        <div>
                            <img src='/assets/images/tela-inicial-adm/icon-list.svg' alt='icon-list' />
                        </div>
                        <h3> Visualizar pedidos </h3>
                    </Link>
                    <Link to='/adm/estatisticas'>
                        <div>
                            <img src='/assets/images/tela-inicial-adm/icon-arrow.svg' alt='icon-arrow' />
                        </div>
                        <h3> Estatísticas </h3>
                    </Link>
                    <Link to='/adm/cadastro-combo'>
                        <div>
                            <img src='/assets/images/tela-inicial-adm/icon-box.svg' alt='icon-box' />
                        </div>
                        <h3> Adicionar um combo </h3>
                    </Link>
                </section>
                <section id='s3'>
                    <button onClick={Sair}> Sair </button>
                </section>
            </main>
        </div>
    )
}