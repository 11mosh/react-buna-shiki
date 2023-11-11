import './index.scss';
import { useState, useEffect } from 'react';
import storage from 'local-storage';

export default function ItemDisponivel (props) {

    const [contador, setContador] = useState(0);

    function diminuir () {
        if (contador > 0) {
            setContador(contador - 1);
            
        } 
    };

    function aumentar () {
        setContador(contador + 1);
    };

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
                    <p className='adicionar' onClick={aumentar}>+</p>
                </div>
            </div>
        </main>
    )
}