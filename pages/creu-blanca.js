import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <nav aria-label="Estás aquí:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link prefetch href="/"><a>Inicio</a></Link></li>
          <li>
            <span className="show-for-sr">Actual: </span>Creu Blanca
          </li>
        </ul>
        <style jsx>{`
          nav {
            padding-top:1em;
          }
        `}</style>
      </nav>
        <h1>¿Qué es Creu Blanca?</h1>
        <p>Fundada en 1950, Creu Blanca es un grupo de empresas familiar (5 centros en Barcelona y 2 en Zaragoza) especializados en la prevención, el diagnóstico y el tratamiento de la salud, que cuenta con más de 250 profesionales de la medicina de todas las especialidades médicas.</p>

        <p>La Clínica Creu Blanca está equipada con la mejor tecnología y ofrece un servicio permanente de Urgencias, así como una Unidad Quirúrgica y habitaciones.</p>

        <p>Dentro del amplio abanico de servicios, la Unidad de Diagnóstico por la Imagen, formada por más de 30 especialistas, ha logrado diferentes especializaciones, entre ellas, la de diagnóstico y seguimiento de las lesiones deportivas.</p>
        
        <p>Este departamento liderado por el Dr. Xavier Alomar, trabaja conjuntamente con la Unidad de Traumatología para ofrecer una asistencia global a deportistas con el fin de conseguir una pronta recuperación.</p>

        <p>La Unidad de Diagnóstico por la Imagen cuenta con los equipos más avanzados del mercado, convirtiéndose el Grupo Creu Blanca en líder indiscutible de la sanidad privada catalana en cuanto a maquinaria se refiere.</p> 

        <p>Se dispone de 4 equipos de resonancia de 3 Teslas, 6 equipos convencionales de 1,5 teslas y 3 equipos no claustrofóbicos. También se cuenta con un TAC de 640 cortes, único a nivel español,  así como equipos de radiología digital y ecógrafos de última generación.</p>

        <p>Por nuestras instalaciones han pasado, y pasan, jugadores del FCB y el RCDE y deportistas del Consell Català de l’Esport.</p>
    </Layout>
)
