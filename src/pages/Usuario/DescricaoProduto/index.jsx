import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { Link } from 'react-router-dom';
import './index.scss';

export default function DescricaoProduto () {

    
return (
    <main className='tudo'>
        <CabecalhoUsuario/>
        <nav style={{padding: '20px'}}>
                <Link to='/' style={{ decoration: 'dashed', color: 0}}> Home page </Link>
                 &gt;
                <p>Café em grão </p>
                &gt;
                <p>Descrição</p>
        </nav>
        
        <hr />

        <article className='corpo-site'>
            <main className="imagem-compra">
                <article className='imagem'></article>
                <article className='compra'></article>
            </main>

            <div className="detalhes-produto">
                <div className="tipos"></div>
                <div className="tipos"></div>
                <div className="tipos"></div>
                <div className="tipos"></div>
            </div>

            <div className="categoria"><h1><b>CATEGORIA:</b> CAFÉ EM GRÃO</h1> <img src="" alt="" /></div>

            <section className="descricao">
                <h1>Descrição</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deserunt ea laudantium odio rem doloribus dolor cum! Autem culpa deleniti debitis inventore vero necessitatibus atque asperiores, voluptas pariatur tempora nostrum.</p>
            </section>

            <section className='detalhes-tecnicos'>
                <p style={ {marginBottom: '10px'} }>Detalhes técnicos</p>

                <table>
                    <tr>
                        <td>Marca</td>
                        <td>Categoria</td>
                        <td>Informações sobre alergia</td>
                        <td>Peso</td>
                        <td>Dimensões do produto</td>
                    </tr>
                    <tr>
                        <td>ORFEU</td>
                        <td>Grãos</td>
                        <td>Não contém glúten</td>
                        <td>1000 gramas</td>
                        <td>15 x 9 x 29cm</td>
                    </tr>
                </table>
            </section>

            <section className="voce-pode-precisar">
                <h1>Você pode precisar</h1>

                <div className='produtos-necessidade'>
                    <button>&gt;</button>

                    <div className="produto"></div>
                    <div className="produto"></div>
                    <div className="produto"></div>
                    <div className="produto"></div>

                    <button>&gt;</button>
                </div>
            </section>
        </article>
        <UsuarioRodape />
    </main>
 )
}