import './index.scss';
import { useState, useEffect } from 'react';

export default function ItemDisponivel (props) {

    const [contador, setContador] = useState(0);

    function diminuir () {
        if (contador == 0) {

        } else if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <main>
            <div className="item">
                <div className="imagem">
                    <img src={props.itemm.imagem} alt="" />
                </div>
                <p>{props.itemm.produto}</p>
                <div className='quantidade-item'>
                    <p className='adicionar' onClick={diminuir}>-</p>
                    <p>{contador}</p>
                    <p className='adicionar' onClick={() => {setContador(contador + 1)}}>+</p>
                </div>
            </div>
        </main>
    )
}