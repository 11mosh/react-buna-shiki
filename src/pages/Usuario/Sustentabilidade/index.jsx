import './index.scss'
import CabecalhoLink from '../../../components/Usuario/CabecalhoLink';

function Sustentabilidade () {

    return (
        <main className='sustent'>
            <CabecalhoLink />
            <section className='faixa-titulo'>Campanha de Sustentabilidade --- ONG Florescer</section>
            <div className='texto'>
                <p>
                    Caros parceiros e apoiadores,
                    <br></br> <br></br> <br></br> 
                    É com grande alegria que compartilhamos nossa nova parceria com a ONG Florescer. Juntos, estamos comprometidos em tornar nosso mundo mais verde e consciente.
                    <br></br> <br></br> <br></br> 
                    <b>Contribuição para um Propósito Maior:</b>
                    <br></br>
                    Parte dos lucros das vendas de nosso café e utensílios será doado à ONG Florescer. Isso significa que, ao escolher nossos produtos, você também está contribuindo para iniciativas de sustentabilidade e educação ambiental.
                    <br></br> <br></br>
                    Nossa promessa de plantar uma árvore para cada compra em nossa loja é nossa maneira de cuidar do meio ambiente e criar espaços verdes saudáveis.
                    <br></br> <br></br> <br></br> 
                    <b>Seja Parte da Mudança:</b>
                    <br></br>
                    Convidamos você a se unir a nós nesse esforço. Escolha nossos produtos e faça parte de um movimento para um mundo melhor.
                    <br></br> <br></br>
                    Mantenha-se informado:
                    <br></br>
                    Siga nossas redes sociais e visite nosso site para acompanhar nossos projetos com a ONG Florescer.
                    <br></br> <br></br>
                    Contato:
                    Para mais informações, entre em contato conosco em <b>bunashiki@gmail.com</b> 
                    <br></br>
                    Agradecemos por seu apoio e esperamos criar um impacto positivo juntos.
                    <br></br> <br></br>
                    Com gratidão,
                    <br></br>
                    Buna Shiki.
                </p>
            </div>

            <div className='imagens'>
                <img src="/assets/images/bunashikiSeta.svg" alt="Erro ao carregar imagem" />
                <img src="/assets/images/ongflorescer.png" alt="Erro ao carregar imagem" />
            </div>
        </main>
    )
}

export default Sustentabilidade;