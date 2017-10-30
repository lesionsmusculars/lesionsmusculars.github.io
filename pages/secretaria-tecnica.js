import Link from 'next/link'
import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <nav aria-label="Estás aquí:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link prefetch href="/"><a>Inicio</a></Link></li>
          <li>
            <span className="show-for-sr">Actual: </span>Secretaría Técnica
          </li>
        </ul>
        <style jsx>{`
          nav {
            padding-top:1em;
          }
        `}</style>
      </nav>

      <section className='call-to-action'>

        <p><img src='/static/atelier-mice-logo-web-2015.png'/></p>

        <h1>Secretaría Técnica</h1>

        <p><strong>AtelierMICE</strong><br/>
        Pere IV, 344 08019, Barcelona<br/>
        +34 937638894<br/>
        <Link href='mailto:ateliermice@ateliermice.com'>ateliermice@ateliermice.com</Link></p>


        <style jsx>{`
          .green-creu-blanca {
              color:#00ad69;
          }
            .call-to-action {
                text-align:center;
                margin:0 auto;
            }
            .text-left {
              text-align:left;
            }
            h1, h2 {
              color:#00ad69;
            }
            .margin-top {
              margin-top:1em;
            }
            @media screen and (min-width: 320px) {   
                .call-to-action {
                width: 100%;
                }
            }
            @media screen and (min-width: 360px) {   
                .call-to-action {
                width: 90%;
                }
            }
            @media screen and (min-width: 768px) {   
                .call-to-action {
                width: 80%;
                }
            }
            @media screen and (min-width: 1366px) {   
                .call-to-action {
                width: 72%;
                }
            }
        `}</style>

      </section>


    </Layout>
)
