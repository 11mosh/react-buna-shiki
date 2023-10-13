import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import './index.scss';

export default function Index() {
    return(
        <div id='page-adm-estatisticas'>
            <CabecalhoAdm />
            <main>
                <section id='s1'>
                    <h2>Visão geral de vendas dos últimos 30 dias: </h2>
                    <p>Exibindo resultados da busca:</p>
                </section>
                <section id='s2'>
                    <article>
                        <h4>Novas assinaturas</h4>
                        <p className='textoLaranja'>25</p>
                        <p className='textoVermelho'>(-0,8%)</p>
                    </article>
                    <article>
                        <h4> Compras concluídas </h4>
                        <p className='textoLaranja'> 376 </p>
                        <p className='textoVerde'> (+3,5% )</p>
                    </article>
                    <article>
                        <h4> Pedidos cancelados </h4>
                        <p className='textoLaranja'> 32 </p>
                        <p className='textoVermelho'> (+0,3%) </p>
                    </article>
                    <article>
                        <h4> Novos usuários </h4>
                        <p className='textoLaranja' > 500 </p>
                        <p className='textoVerde'> (+1%) </p>
                    </article>
                </section>
            </main>
        </div>
    )
}