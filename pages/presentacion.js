import Head from 'next/head'
import Link from 'next/link'
import Observer from 'react-intersection-observer'
import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <nav aria-label="Estás aquí:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link prefetch href="/"><a>Inicio</a></Link></li>
          <li>
            <span className="show-for-sr">Actual: </span>Presentación
          </li>
        </ul>
        <style jsx>{`
          nav {
            padding-top:1em;
          }
        `}</style>
      </nav>
      <section>

          <h1 className='green-creu-blanca'>Presentación del Congreso</h1>

          <Observer threshold={1} triggerOnce={true} render={() => (
            <figure className='align-right fade-in'>
              <img src='/static/lesio-muscular-creu-blanca.jpg'/>
              <figcaption><small>Lesión Muscular - Creu Blanca</small></figcaption>
            </figure>
            )} />
        
          <p>El II Congreso Creu Blanca sobre Lesiones Musculares tiene un enfoque muy práctico basado en la discusión y debate de casos clínicos en un ámbito multidisciplinar que va desde el mecanismo de lesión, diagnóstico, seguimiento, rehabilitación y readaptación hasta el return to play.</p>
          
          <p>Para ello se cuenta con la participación de algunos de los principales especialistas en lesiones musculares de este país y los propios casos clínicos serán presentados por especialistas de renombre internacional y basados en deportistas de élite.</p>

          <p>Programa científico organizado y coordinado por los <strong className='green-creu-blanca'>Drs. Carles Pedret y Xavier Alomar</strong>.</p>

          <br className='clear'/>
        <style jsx>{`
          .green-creu-blanca {
              color:#00ad69;
          }
          strong {
              font-weight:700;
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
