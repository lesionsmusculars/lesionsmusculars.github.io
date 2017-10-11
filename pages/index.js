import Head from 'next/head'
import Link from 'next/link'
import { Jumbotron } from 'reactstrap';
import Layout from '../components/MyLayout.js'


export default () => (
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
                </Jumbotron>
            </div>
                </section>
                <section className='congress-data'>
                    <div className='congress-data-programm'>
                        <h1 className='align-center uppercase'>Programa</h1>
                        <table className='table-scroll'>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width='150'>8:00 - 8:30</td>
                                    <td width='300'><strong className='bold'>Entrega de Documentación</strong></td>
                                </tr>
                                <tr>
                                    <td width='150'>8:30 - 9:00</td>
                                    <td width='300'><strong className='bold'>Presentación de las Jornadas</strong><br/>
                                    <em>Dra. Enriqueta Alomar</em><br/>
                                    <small>Directora Médica del Grupo Creu Blanca</small></td>
                                </tr>
                                <tr>
                                    <td width='150'>9:00 - 9:45</td>
                                    <td width='300'><strong className='bold green-creu-blanca'>Anatomía de la Lesión Muscular</strong><br/>
                                    Cómo se ha de entender la Lesión Muscular a día de hoy<br/>
                                    <em>Dr. Carles Pedret</em><br/>
                                    <small>Clínica Mapfre de Medicina del Tenis, Clínica Diagonal y Clínica Creu Blanca</small></td>
                                </tr>
                                <tr>
                                    <td width='150'>9:45 - 10:15</td>
                                    <td width='300'><strong className='bold green-creu-blanca'>Caso Benfica 1 (isquios)</strong><br/>
                                    <em>Dr. Lluís Til</em><br/>
                                    <small>Director médico Sport Lisboa e Benfica</small><br/>
                                    <em>Moderador Dr. Gil Rodas</em><br/>
                                    <small>Jefe de Servicio de Medicina Deportiva Hospital Clínico de Barcelona</small></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='congress-data-people'>
                        <p className='green-creu-blanca uppercase'>Están colaborando en la elaboración y presentación de los casos clínicos</p>
                        <p><strong className='bold'>Especialistas de la Clínica Creu Blanca</strong></p>
                        <ul className='no-style'>
                            <li>Dr. Xavier Alomar</li>
                            <li>Dr. Calres Pedret</li>
                            <li>Dra. Mireia Bossy</li>
                        </ul>
                        <p><strong className='bold'>Especialistas del Consell Català de l'Esport</strong></p>
                        <ul className='no-style'>
                            <li>Dr. Ramon Balius</li>
                        </ul>
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
                    @media screen and (min-width: 768px) {              
                    .congress-data {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        align-items:center;

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
                    table thead, table tr {
                        background:none;
                        border:none;
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
                `}</style>
            </div>
    </Layout>
)
