import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import storage from 'local-storage';
import { alterar, buscarIdDetalhe, buscarIdImagens, buscarIdProduto, excluirImagens } from '../../../api/produtoApi';


export default function CadastroCombo () {


    return (
        <main className='cadastro-combo'>
            <CabecalhoAdm/>
            <main className='corpo-site'>
                <h1>Receba mensalmente os sabores marcantes que você adora, no conforto de sua casa: grãos ou moídos!</h1>
                <section className='texto-apresentacao'>
                    <p>Nós selecionamos uma lista dos melhores sabores de café pelos quais você pode se interessar, além de alguns itens que possam ser necessários.  :)</p>
                    <ul>
                        <li>&bull; Nossos produtos são enviados sempre o mais fresco possível;</li>
                        <li>&bull; Os produtos têm 5% de desconto ao final do pagamento;</li>
                        <li>&bull; Muito mais conforto e comodidade.</li>
                    </ul>
                </section>

                <section>
                    
                </section>
            </main>
        </main>
    )
}