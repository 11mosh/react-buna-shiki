import { useEffect, useState } from 'react';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import './index.scss';
import { toast } from 'react-toastify';
import { buscarEstatisticas } from '../../../api/estatisticaApi';

export default function Index() {
    const [estatisticas, setEstatisticas] = useState([{taxa: 0}, {taxa: 0}, {taxa: 0}, {taxa: 0}])
    


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

            let estatisticasCalc = []
            for(let cont = 0; cont < 4; cont++){
                let qtdRecente = await buscarEstatisticas(dateInicio, dateFim, campos[cont])
                let qtdAntiga = await buscarEstatisticas(dateComparacaoInicio, dateComparacaoFim, campos[cont])
                let taxa = (qtdRecente - qtdAntiga) / (qtdAntiga / 100)  
                taxa = taxa.toFixed(0)
                estatisticasCalc[cont] = {taxa: taxa, qtd: qtdRecente}
            } 

            setEstatisticas(estatisticasCalc)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    function verificarCor(index){
        if(estatisticas[index].taxa > 0)
            return 'textoVerde'
        else if(estatisticas[index].taxa == 0)
            return ''
        else
            return 'textoVermelho'
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
                        <p className='textoLaranja'>{estatisticas[0].qtd}</p>
                        <p className={verificarCor(0)}>{estatisticas[0].taxa > 0 ? `(+${estatisticas[0].taxa}%)` : `(${estatisticas[0].taxa}%)`}</p>
                    </article>
                    <article>
                        <h4> Compras concluídas </h4>
                        <p className='textoLaranja'> {estatisticas[1].qtd} </p>
                        <p className={verificarCor(1)}> {estatisticas[1].taxa > 0 ? `(+${estatisticas[1].taxa}%)` : `(${estatisticas[1].taxa}%)`}</p>
                    </article>
                    <article>
                        <h4> Pedidos cancelados </h4>
                        <p className='textoLaranja'> {estatisticas[2].qtd} </p>
                        <p className={verificarCor(2)}> {estatisticas[2].taxa > 0 ? `(+${estatisticas[2].taxa}%)` : `(${estatisticas[2].taxa}%)`} </p>
                    </article>
                    <article>
                        <h4> Novos usuários </h4>
                        <p className='textoLaranja' > {estatisticas[3].qtd} </p>
                        <p className={verificarCor(3)}>{estatisticas[3].taxa > 0 ? `(+${estatisticas[3].taxa}%)` : `(${estatisticas[3].taxa}%)`} </p>
                    </article>
                </section>
            </main>
        </div>
    )
}