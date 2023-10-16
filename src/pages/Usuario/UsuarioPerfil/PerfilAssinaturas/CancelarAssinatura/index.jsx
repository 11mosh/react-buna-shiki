import './index.scss';


export default function CancelarAssinatura ({sim, nao}) {

    return (
        <main className='cancelar-assinatura'>
            <h1>Deseja realmente cancelar a assinatura?</h1>
            <h3>Depois de cancelada, essa ação não pode ser revertida.</h3>
            <div>
                <div className='sim' onClick={sim}>Sim</div>
                <div className='nao' onClick={nao}>Não</div>
            </div>
        </main>
    )
}