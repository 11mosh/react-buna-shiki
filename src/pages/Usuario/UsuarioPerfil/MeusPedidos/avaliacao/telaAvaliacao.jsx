import './custom.scss'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { URLRota } from '../../../../../constants.js';

function Avaliacao ({idPedido, fechar}) {


     const umaEstrela= async () => {
        const url = URLRota + '/pedido/' + idPedido +'/avaliacao/' + 1;
        const resposta = await axios.put(url)
        toast.info('Produto avaliado com 1 estrela!')
        fechar()
    }

    const duasEstrelas = async () => {
        const url = URLRota + '/pedido/' + idPedido +'/avaliacao/' + 2;
        const resposta = await axios.put(url)
        toast.info('Produto avaliado com 2 estrelas!')
        fechar()

    }
    const tresEstrelas= async () => {
        const url = URLRota + '/pedido/' + idPedido +'/avaliacao/' + 3;
        const resposta = await axios.put(url)
        toast.info('Produto avaliado com 3 estrelas!')
        fechar()

    }
    const quatroEstrelas= async () => {
        const url = URLRota + '/pedido/' + idPedido +'/avaliacao/' + 4;
        const resposta = await axios.put(url)
        toast.info('Produto avaliado com 4 estrelas!')
        fechar()

    }
    const cincoEstrelas = async () => {
        const url = URLRota + '/pedido/' + idPedido + '/avaliacao/' + 5;
        const resposta = await axios.put(url)
        toast.info('Produto avaliado com 5 estrelas!')
        fechar()
        
    }

    return (
      <div className="corpo-principal-avaliacao">
        <h2>Avalie nosso produto!</h2>
        <div>
          <img src="/assets/images/Star 22.svg" alt="" onClick={umaEstrela}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={duasEstrelas}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={tresEstrelas}/>  
          <img src="/assets/images/Star 22.svg" alt="" onClick={quatroEstrelas}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={cincoEstrelas}/>
        </div>
      </div>
    );
  }
  
  export default Avaliacao;