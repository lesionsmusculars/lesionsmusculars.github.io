import Head from 'next/head'
import Link from 'next/link'
import { Jumbotron } from 'reactstrap'
import dynamic from 'next/dynamic'
import Observer from 'react-intersection-observer'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout.js'

const GoogleMapReact = dynamic(
  import('google-map-react'),
  {
    loading: () => (<p>cargando ...</p>)
  }
)

const markerStyle = {
  'background-color': '#ffffff',
  width: '50px',
  'text-align': 'center',
  padding: '.5em',
  'position': 'relative',
  right: 25,
  bottom: 25,
  'border-radius': '50%'

}

const MarkerComponent = ({ text }) => <div style={markerStyle}>{text}</div>;

const ZOOM = 16

const CongressProgramm = (props) => (
    <Layout>
    <Head>
      <title>II Congreso Creu Blanca sobre Lesiones Musculares</title>
    </Head>
        <div>
            <section className='call-to-action'> 
            <div>
                <Jumbotron>
                    <p className='green-creu-blanca'>LUGAR DEL CONGRESO</p>
                    <h1><strong>Palau de Congressos de Catalunya</strong></h1>
                    <p className='green-creu-blanca'>FECHA DEL CONGRESO</p>
                    <h1><strong>23 de febrero de 2018</strong></h1>
                    <h1><Link href='/inscripciones'><a target='_blank' className='btn btn-outline-success btn-lg'>INSCRÍBETE</a></Link></h1>
                </Jumbotron>
            </div>
                </section>
                <section className='congress-data'>
                    <div className='congress-data-programm'>
                        <h1 className='align-center uppercase'>Programa</h1>
                    </div>
                    <div className='congress-data-people'/>
                </section>
                <section className='congress-data'>
                    <div className='congress-data-programm'>


                        <table className='table-scroll'>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            {props.programmitems.sort((a,b) => {
                                if (a.ID < b.ID) {
                                  return -1
                                }
                                if (a.ID > b.ID) {
                                  return 1
                                }
                                return 0
                                }).map((programmitem, ID) => (
                                <tbody key={ID}>
                                <tr className={programmitem.break == false ? '' : 'bg-green-creu-blanca'}>
                                    <td width='150'>{programmitem.horari}</td>
                                    <td width='300'><strong className={programmitem.iscase == true ? 'bold green-creu-blanca' : 'bold'}>{programmitem.titol}</strong>
                                    {programmitem.subtitol =="" ? '' : <span><br/>{programmitem.subtitol}</span>}
                                    {programmitem.drs == "" ? '' : <span><br/>
                                    {programmitem.drs.map((dr, index) => (
                                        <span key={index}>
                                        <em>{dr.nom}</em><br/>
                                        <small>{dr.carrec}</small><br/>
                                        </span>
                                    ))}</span>}
                                    {programmitem.moderadors == "" ? '' : <span>
                                    {programmitem.moderadors.map((moderador, index) => (
                                        <span key={index}>
                                        <em>{moderador.nom}</em><br/>
                                        <small>{moderador.carrec}</small><br/>
                                        </span>
                                    ))}</span>}</td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>
                    <div className='congress-data-people'>
                        
                        <Observer threshold={1} triggerOnce={true} render={() => (
                            <figure className='align-right fade-in'>
                            <figcaption className='align-center green-creu-blanca'><h2>Patrocinador principal</h2></figcaption>
                            <img src='/static/02-logo-toshiba-medical-congres-creu-blanca-lesions-musculars.jpg'/>
                            </figure>
                            )} />
                        
                        <Observer threshold={1} triggerOnce={true} render={() => (
                            <figure className='align-right fade-in'>
                            <figcaption className='align-center green-creu-blanca'><h2>Auspicio</h2></figcaption>
                            <img src='/static/logo-setrade-congres-creu-blanca-lesions-musculars.jpg'/>
                            </figure>
                            )} />
                            
                        <Observer threshold={1} triggerOnce={true} render={() => (
                            <figure className='align-right fade-in'>
                            <figcaption className='align-center green-creu-blanca'><h2>Auspicio</h2></figcaption>
                            <img src='/static/logo-aemef-congres-creu-blanca-lesions-musculars.jpg'/>
                            </figure>
                            )} />
                                
                        <Observer threshold={1} triggerOnce={true} render={() => (
                            <figure className='align-right fade-in'>
                            <figcaption className='align-center green-creu-blanca'><h2>Auspicio</h2></figcaption>
                            <img src='/static/logo-scme-congres-creu-blanca-lesions-musculars.jpg'/>
                            </figure>
                            )} /> 
                            
                        <Observer threshold={1} triggerOnce={true} render={() => (
                        <figure className='align-right fade-in'>
                        <figcaption className='align-center green-creu-blanca'><h2>Auspicio</h2></figcaption>
                        <img src='/static/logo-sccot-congres-creu-blanca-lesions-musculars.jpg'/>
                        </figure>
                        )} />
                    </div>
                </section>
                <section>
                    <div style={{width: '100%', height: '500px'}}>     
                        <GoogleMapReact
                            center={[Number(41.3835246), Number(2.1096141)]}
                            zoom={ZOOM}
                            >                            
                            <MarkerComponent
                                lat={41.3835246}
                                lng={2.1096141}
                                text={<Link prefetch href={'/la-sede'}><a title={'Sede: Palau de Congressos de Catalunya'}><span><img src={'/static/32/lesions-musculars-creu-blanca-32.png'} /></span></a></Link>}
                            />
                            </GoogleMapReact>
                        </div>
                </section>
                <style jsx>{`
                    .call-to-action p, .call-to-action h1, .congress-data h1, .congress-data p, .congress-data td, .congress-data ul {
                        line-height:1.2;
                    }
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
                    .green-creu-blanca, .btn-outline-success {
                        color:#00ad69;
                    }
                    .btn-outline-success {
                        border-color:#00ad69;
                    }
                    .btn-outline-success:hover {
                        background-color:#00ad69;
                        color:#ffffff;
                    }
                    .dark-color {
                        color:#1d1d1b;
                    }
                    .bg-green-creu-blanca {
                        color:#ffffff;
                        background:#00ad69!important;
                    }
                    .align-center {
                        text-align:center;
                    }
                    .uppercase {
                        text-transform:uppercase;
                    }
                    .dont-break-out {          
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    -ms-hyphens: auto;
                    -moz-hyphens: auto;
                    -webkit-hyphens: auto;
                    hyphens: auto;
                    }
                    figure {
                        margin-bottom:1.5em;
                    }
                    @media screen and (min-width: 768px) {              
                    .congress-data {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        align-items:top;

                        width: 100%;
                    }
                    .congress-data-programm {
                        width: 45%;
                        margin: 5px 20px;
                    }
                    .congress-data-people {
                        width: 35%;
                        margin: 5px 20px;
                    }
                    }
                    @media screen and (min-width: 1024px) {
                    .congress-data-programm {
                        width: 55%;
                    }
                    }
                    table, table thead, table tr, table tbody, table td {
                        background: none;
                        border: none;
                    }
                    table tbody tr td {
                        border-top:1px solid #00ad69;
                    }
                    table tbody tr td a {
                        margin:0;
                    }
                    table tbody tr td a.button {
                        background:#d86525;
                    }
                    table tbody tr td a.button:hover {
                        background:#aa4e1c;
                    }
                    @media screen and (max-width: 768px) {
                        table tbody td {
                        padding:.5rem .1rem .5rem .1rem;
                        }
                    }
                    @media screen and (min-width: 768px) {
                        .table-scroll table {
                        width:100%;
                        }
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
            </div>
    </Layout>
)

CongressProgramm.getInitialProps = async function() {
    const res = await fetch(`https://lesionsdata.now.sh/programm-data.json`)
    const res2 = await fetch(`https://lesionsdata.now.sh/specialists.json`)
    const programmitems = await res.json()
    const specialistsitems = await res2.json()
  
    console.log(`Items del prorama data fetched. Count: ${programmitems.length}, ${specialistsitems.length}`)
  
    return { programmitems, specialistsitems }
  }
  
  export default CongressProgramm
