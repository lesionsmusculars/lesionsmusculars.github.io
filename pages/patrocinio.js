import Head from 'next/head'
import Link from 'next/link'
import { Jumbotron } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <nav aria-label="Estás aquí:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link prefetch href="/"><a>Inicio</a></Link></li>
          <li>
            <span className="show-for-sr">Actual: </span>Patrocinio
          </li>
        </ul>
        <style jsx>{`
          nav {
            padding-top:1em;
          }
        `}</style>
      </nav>
      <section>

          <section className='call-to-action'> 
              <div>
                <Jumbotron>
                  <h1 className='green-creu-blanca'>Patrocinio</h1>
                  <h2><strong>Si están interesados en participar en el patrocinio de estas prestigiosas jornadas con la presencia de los mejores profesionales del sector, les animamos a ello.</strong></h2>
                  <Link href='/static/dossier-patrocinio-jornadas-lesion-muscular.pdf'><a download target='_blank' className='btn btn-secondary'><FontAwesome
                  name='download'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Dossier</a></Link>
                </Jumbotron>
              </div>
            </section>
        <style jsx>{`
          .call-to-action {
              text-align:center;
              margin:0 auto;
          }
          strong {
              font-weight:500;
          }
          strong.bold {
              font-weight:700;
          }
          .green-creu-blanca {
              color:#00ad69;
          }
          @media screen and (max-width: 768px) {
            .align-right img {
              margin:0 auto;
              display:block;
            }
            .align-right figcaption {
              text-align:center;
            }
          }
          @media screen and (min-width: 1024px) {
            .align-right {
              float:right;
              padding-left:1em;
            }
            .clear {
              clear:both;
            }
          }
          .fade-in {
            animation-name: fadeIn;
            animation-duration: 1.3s;
            animation-timing-function: cubic-bezier(0, 0, 0.4, 1);
            animation-fill-mode: forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </Layout>
)
