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
import CadastroCombo from './pages/Admin/CadastroCombo';
import ProdutosGraos from './pages/Usuario/PaginaProdutos/Graos'
import MeusPedidos from './pages/Usuario/UsuarioPerfil/MeusPedidos';
import Pedidos from './pages/Admin/Pedidos';
import Combos from './pages/Usuario/PaginaProdutos/Combos';
import Assinatura from './pages/Usuario/Assinatura';
import UsuarioRodape from './components/Usuario/UsuarioRodape';
import Avaliacao from './pages/Usuario/UsuarioPerfil/MeusPedidos/avaliacao/telaAvaliacao';
import DescricaoProduto from './pages/Usuario/DescricaoProduto';
import PedidoFinalizado from './pages/Usuario/PedidoFinalizado';
import Confirmacao from './pages/Usuario/Assinatura/Confirmacao';
import Estatisticas from './pages/Admin/Estatísticas';
import Pagamento from './pages/Usuario/Pagamento';
import ConsultaAssinaturas from './pages/Admin/Assinaturas';
import RevisaoProduto from './pages/Admin/RevisaoProduto';
import Cartoes from './pages/Usuario/UsuarioPerfil/PerfilCartoes';
import RevisaoPedido from './pages/Admin/Pedidos/Revisão'
import AcompanharPedido from './pages/Usuario/AcompanharPedido'
import DadosPessoais from './pages/Usuario/UsuarioPerfil/DadosPessoais'
import ResumoPedido from './pages/Usuario/UsuarioPerfil/MeusPedidos/resumoPedido'

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
                <Route path='/rodape' element={<UsuarioRodape />} />
                <Route path='/login' element={<UsuarioLogin />}/>
                <Route path='/cadastro' element={<UsuarioCadastro />} />
                <Route path='/produtos/combos' element={<Combos />} />
                <Route path='/acompanhar-pedido' element={<AcompanharPedido />} />
                <Route path='/conta/meus-pedidos' element={<MeusPedidos />} />
                <Route path='/conta/meus-pedidos/resumoPedido' element={<ResumoPedido />} />
                <Route path='/conta/dados-pessoais' element={<DadosPessoais />} />
                <Route path='/combos' element={<Combos />} />
                <Route path='/descricao/:id' element={<DescricaoProduto />} />
                <Route path='/avalie' element={<Avaliacao />} />

                <Route path='/conta/meus-pedidos' element={<MeusPedidos />} />
                <Route path='/conta/cartoes' element={<Cartoes />} />

                <Route path='/produtos/graos' element={<ProdutosGraos />} />
                <Route path='/carrinho' element={<Carrinho/>} />
                <Route path='/assinatura' element={<Assinatura/>} />
                <Route path='/assinatura/confirmacao' element={<Confirmacao />} />
                <Route path='/pedido-finalizado' element={<PedidoFinalizado />} />
                <Route path='/pagamento' element={<Pagamento />} />

                <Route path='/adm' element={<AdmLogin />} />
                <Route path='/adm/inicio' element={<AdmInicio />} />
                <Route path='/adm/cadastro-produto' element={<CadastroProduto />} />
                <Route path='/adm/:id/alterar-produto' element={<CadastroProduto />} />
                <Route path='/adm/produtos' element={<Produtos />} />
                <Route path='/adm/pedidos' element={<Pedidos />} />
                <Route path='/adm/cadastro-combo' element={<CadastroCombo />} />
                <Route path='/adm/estatisticas' element={<Estatisticas />} />
                <Route path='/adm/consulta-assinaturas' element={<ConsultaAssinaturas />} />
                <Route path='/adm/:id/revisao-produto' element={<RevisaoProduto />} />
                <Route path='/adm/pedidos/revisao' element={<RevisaoPedido />} />
            </Routes>
         </BrowserRouter>
    )
}