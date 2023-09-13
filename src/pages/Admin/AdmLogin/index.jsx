import './index.scss'


export default function Index() {
    return(
        <div className='page-adm-login'>
            <section className='cabecalho'>
                <img src='/assets/images/logo.svg' alt='logo' />
            </section>
            <section className='conteudo'>
                <article className='img'>
                    <img src='/assets/images/login-adm/logo-adm.svg' alt='logo' />
                </article>
                <article className='login'>
                    <main>
                        <h2> LOGIN </h2>
                        <input type='txt' placeholder='Email'/>
                        <input type='txt' placeholder='Password'/>
                        <button> Login </button>
                    </main>
                </article>
            </section>
        </div>
    )
}