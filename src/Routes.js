import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Usuario/Home';
import Sustentabilidade from './pages/Usuario/Sustentabilidade';
import Devolucao from './pages/Usuario/Devolucao';
import Privacidade from './pages/Usuario/Privacidade';
import CabecalhoUsuario from './components/Usuario/UsuarioCabecalho';
import CabecalhoAdm from './components/Admin/AdmCabecalho';
import UsuarioLogin from './pages/Usuario/UsuarioLogin';
import UsuarioCadastro from './pages/Usuario/UsuarioCadastro'
import Carrinho from './pages/Usuario/Carrinho';
import AdmLogin from './pages/Admin/AdmLogin';
import AdmInicio from './pages/Admin/TelaInicial';
import CadastroProduto from './pages/Admin/CadastroProduto';
import Produtos from './pages/Admin/Produtos';
import Cliente from './pages/Usuario/UsuarioPerfil';
import MeusPedidos from './pages/Usuario/MeusPedidos';
import Pedidos from './pages/Admin/Pedidos';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/devolucao' element={<Devolucao />} /> 
                <Route path='/privacidade' element={<Privacidade />} />
                <Route path='/sustentabilidade' element={<Sustentabilidade />}/> 
                <Route path='/cabeca' element={<CabecalhoAdm />}/>
                <Route path='/cabecalho' element={<CabecalhoUsuario />}/>
                <Route path='/login' element={<UsuarioLogin />}/>
                <Route path='/cadastro' element={<UsuarioCadastro />} />
                <Route path='/cliente' element={<Cliente />} />
                <Route path='/conta/meus-pedidos' element={<MeusPedidos />} />
                <Route path='/carrinho' element={<Carrinho/>} />
                <Route path='/adm' element={<AdmLogin />} />
                <Route path='/adm/inicio' element={<AdmInicio />} />
                <Route path='/adm/cadastro-produto' element={<CadastroProduto />} />
                <Route path='/adm/produtos' element={<Produtos />} />
                <Route path='/adm/pedidos' element={<Pedidos />} />
            </Routes>
         </BrowserRouter>
    )
}