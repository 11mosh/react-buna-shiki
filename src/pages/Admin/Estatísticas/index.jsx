import { useEffect, useState } from 'react';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import './index.scss';
import { toast } from 'react-toastify';
import { buscarEstatisticas } from '../../../api/estatisticaApi';

export default function Index() {
    const [estatisticas, setEstatisticas] = useState()
    


    async function buscarEstatisticasClick(){
        try{
            const campos = ['assinaturas', 'pedidosConcluidos', 'pedidosCancelados', 'clientes']
            let dateFim = new Date()
            dateFim = dateFim.toISOString()
            dateFim = dateFim.substr(0, 10)

            let dateInicio = new Date()
            dateInicio.setDate(dateInicio.getDate() - 30)
            dateInicio = dateInicio.toISOString()
            dateInicio = dateInicio.substr(0, 10)

            let dateComparacaoFim = `${dateInicio}`
            dateComparacaoFim = dateComparacaoFim.substring(0, 10)
            
            let dateComparacaoInicio = new Date()
            dateComparacaoInicio.setDate(dateComparacaoInicio.getDate() - 60)
            dateComparacaoInicio = dateComparacaoInicio.toISOString()
            dateComparacaoInicio = dateComparacaoInicio.substr(0, 10)            

            for(let cont = 0; cont < 1; cont++){
                let qtdRecente = await buscarEstatisticas(dateInicio, dateFim, campos[cont])
                let qtdAntiga = await buscarEstatisticas(dateComparacaoInicio, dateComparacaoFim, campos[cont])
                let taxa = (qtdRecente - qtdAntiga) / (qtdAntiga / 100)  
                console.log(qtdRecente);
                console.log(qtdAntiga);
                console.log(taxa);
            }
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }
    
    useEffect(() => {
        buscarEstatisticasClick()

        // eslint-disable-next-line
    }, [])
    
    
    
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