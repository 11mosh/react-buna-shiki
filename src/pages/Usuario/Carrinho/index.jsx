import "./index.scss";
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import { Link } from 'react-router-dom';



export default function Carrinho () {

    return (    
      <main className="page-carrinho">
        <Cabecalho/>
        
            <div className="tudo">
                <img src="/assets/images/carrinhoo.svg" alt="carrinho"/>

                <p className="">
                    
                    OPS!
                </p>

                <p>
                    Seu carrinho esta vazio.
                </p>

          
                <p>
                    Navegue pelo site para adicionar 
                    produtos ao seu carrinho.
                </p>

               

                <button>Adicionar produtos</button>


            </div>

        <UsuarioRodape/>

      </main>

    )
}