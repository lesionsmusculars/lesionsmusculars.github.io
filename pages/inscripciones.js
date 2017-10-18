import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import FontAwesome from 'react-fontawesome'
import { Card, CardImg, CardBody, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default () => (
    <Layout>
      <nav aria-label="Estás aquí:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link prefetch href="/"><a>Inicio</a></Link></li>
          <li>
            <span className="show-for-sr">Actual: </span>Inscripciones
          </li>
        </ul>
        <style jsx>{`
          nav {
            padding-top:1em;
          }
        `}</style>
      </nav>

      <section className='call-to-action'>

        <FontAwesome
          name='credit-card'
          size='2x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />

        <h1>Inscripciones</h1>

        <p><small>Obtén tu acceso. Todavía están <span className='green-creu-blanca'>disponibles</span></small></p>

        <hr/>
        
        <Row>
          <Col sm="6">
            <Card inverse style={{ backgroundColor: '#00ad69', borderColor: '#00ad69' }}>
              <CardTitle className='margin-top'>Profesional</CardTitle>
              <CardText>Acceso profesional <strong>150€</strong>.</CardText>
              <Link href='#'><a className='btn btn-secondary'>Inscríbete</a></Link>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Bonificado</CardTitle>
              <CardText>Disponemos de accesos bonificados de hasta un <strong>25% de descuento</strong> para colectivos profesionales.</CardText>
              <Link href='#'><a className='btn btn-secondary'>Inscríbete</a></Link>
            </Card>
          </Col>
        </Row>

        <hr/>

        <p><small>You will be redirected to our partner <strong>EventBrite</strong> in order to get your ticket</small></p>


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
