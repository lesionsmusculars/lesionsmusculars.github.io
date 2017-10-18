import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Observer from 'react-intersection-observer'
import Layout from '../components/MyLayout.js'

const MapaDeGoogle = dynamic(
  import('../components/MapaDeGoogle'),
  {
    loading: () => (<p>cargando ...</p>)
  }
)

export default () => (
    <Layout>
      <nav aria-label="Estás aquí:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link prefetch href="/"><a>Inicio</a></Link></li>
          <li>
            <span className="show-for-sr">Actual: </span>La Sede
          </li>
        </ul>
        <style jsx>{`
          nav {
            padding-top:1em;
          }
        `}</style>
      </nav>
      <section>

        <h1 className='green-creu-blanca'>Palau de Congressos de Catalunya, sede del II Congreso Creu Blanca sobre Lesiones Musculares</h1>

        <Observer threshold={1} triggerOnce={true} render={() => (
          <figure className='align-left fade-in'>
            <img src='/static/palau-de-congressos-creu-blanca.jpg'/>
            <figcaption><small>Palau de Congressos de Catalunya</small></figcaption>
          </figure>
          )} />
        
        <p>El Palau de Congressos de Catalunya está situado en la prestigiosa Avinguda Diagonal de Barcelona, el centro financiero y comercial más importante de la ciudad. El edificio forma parte del Hotel Rey Juan Carlos I - Business and City Resort el cual está rodeado de los jardines más preciosos de Barcelona. Es uno de los complejos hoteleros urbanos más destacados a nivel internacional.</p>
          
        <p>El edificio es un símbolo de la Barcelona contemporánea. Lo diseñaron los arquitectos Ferrater y Cartañá en 2001 y obtuvo el "Premio Nacional de Arquitectura". Está compuesto por diferentes edificios que unidos lo dotan de una gran funcionalidad y versatilidad con la luz como principal protagonista.</p>

        <p>Cuenta, además, con un espectacular jardín, por donde acceder directamente a la planta -1, donde se encuentra el Auditorio F</p>

        <p>Los Jardines del complejo, con más de 25.000 m2, datan del s. XIX y dan al complejo un marco incomparable para las celebraciones al aire libre.</p>

        <h2 className='green-creu-blanca'>Auditorio F</h2>

        <Observer threshold={1} triggerOnce={true} render={() => (
          <figure className='align-right fade-in'>
            <img src='/static/auditori-f-creu-blanca.jpg'/>
            <figcaption><small>Auditorio F</small></figcaption>
          </figure>
          )} />

        <p>La Sala F es el segundo auditorio del Palau de Congressos de Catalunya y tiene una capacidad total de 350 butacas, donde destacan, materiales como la cuarcita y las maderas nobles dotan las salas destinadas a la realización de eventos con un gran éxito de una personalidad única, elegante y acogedora, teniendo la capacidad idónea para llevar a cabo el II Congreso Creu Blanca sobre Lesiones Musculares.</p>

        <br className='clear'/>
      <section>
        
        <MapaDeGoogle name={'Palau de Congressos de Catalunya'} lat={41.3835246} lng={2.1096141} address={`Avinguda Diagonal 661-671`} code={'08028'} city={'Barcelona'}/>
          </section>
        <style jsx>{`
          .green-creu-blanca {
              color:#00ad69;
          }
          @media screen and (max-width: 768px) {
            .align-right img, .align-left img {
              margin:0 auto;
              display:block;
            }
            .align-right figcaption,
            .align-left figcaption {
              text-align:center;
            }  
          }
          @media screen and (min-width: 1024px) {
            .align-left {
              float:left;
              padding-right:1em;
            }
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
