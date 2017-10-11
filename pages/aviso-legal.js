import Link from 'next/link'
import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <nav aria-label="Estás aquí:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link prefetch href="/"><a>Inicio</a></Link></li>
          <li>
            <span className="show-for-sr">Actual: </span>Aviso Legal
          </li>
        </ul>
        <style jsx>{`
          nav {
            padding-top:1em;
          }
        `}</style>
      </nav>
        <h1>Aviso Legal</h1>
        <p>Los derechos de propiedad intelectual de los servicios on-line de CREU BLANCA y de su contenido pertenecen a dicha sociedad o, en su caso, a terceras personas.</p>

        <p>El usuario puede visualizar todos los elementos, imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado. Para la utilización con fines comerciales de los contenidos de la web, su distribución, así como su modificación, alteración o descompilación, se requiere un permiso previo de CREU BLANCA.</p>

        <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que CREU BLANCA pueda ofrecer en su sede web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.</p>

        <p>Con la voluntad de mejorar la página web, CREU BLANCA se reserva el derecho de efectuar las modificaciones que considere oportunas, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que presta como la forma en la que éstos aparezcan presentados o localizados.</p>

        <p>CREU BLANCA autoriza menciones a sus contenidos en otras webs, siempre que no reproduzcan los contenidos presentes en la página web de CREU BLANCA. En el caso de disponer de un enlace hipertexto a alguna de sus páginas, el usuario debe saber que está entrando en la página web de CREU BLANCA y debe percibir en su navegador su dirección URL. Si CREU BLANCA detecta el incumplimiento de las anteriores condiciones, así como cualquier utilización indebida de los contenidos presentados en su página web, se reserva el derecho de ejercer todas las acciones civiles y penales necesarias.</p>

        <h2>Protección de datos</h2>

        <p>En relación a los servicios a disposición de los usuarios a través de registro previo, todos los datos se mantienen en la más estricta privacidad de acuerdo con la legislación vigente. CREU BLANCA cumple esta legislación respecto a la protección de datos personales de sus usuarios y los mantiene en la más estricta confidencialidad de acuerdo con lo dispuesto en la Ley Orgánica 15/99 del 13 de diciembre de 1999 sobre Protección de Datos de Carácter Personal (LOPD), así como en lo dispuesto en la Ley de Servicios de la Sociedad de la Información y del Comercio Electrónico (SSICE) ley 34/2002 de 11 de julio.</p>

        <p>El usuario registrado en los servicios de la sede web de CREU BLANCA puede en todo momento ejercitar los derechos de acceso, rectificación y cancelación en los términos previstos en la LOPD y demás normas que la desarrollan. Puede hacerlo por correo electrónico <Link href='mailto:inform@creublanca.es'><a>inform@creublanca.es</a></Link> solicitando el acceso, cancelación o rectificación de sus datos.</p>

        <p>CREU BLANCA asegura la más estricta confidencialidad en la recogida y tratamiento de los datos facilitados por sus usuarios a través de Internet o cualquier otro medio. Los datos facilitados por los usuarios serán empleados únicamente para las finalidades descritas en el propio formulario de suscripción y determinadas por cada usuario.</p>

        <p>A efectos de esta información la expresión CREU BLANCA designa a las siguientes entidades: CENTRO DE EXÁMENES MÉDICOS, S.A. (C.I.F. A-08664658); DIAGNOSIS VIRTUAL, S.L. (C.I.F. B-57259160), DIAGNOSIS, S.A. (C.I.F. A-08689333); EXÁMENES MÉDICOS POR IMAGEN, S.L. (C.I.F. B-59347864); FUNDACIÓ PRIVADA IMHOTEP (C.I.F. G-60963816); INSTITUTO CLÍNICO DE ALTA TECNOLOGÍA, S.A. (C.I.F. A-17049479); MEDICAL RESONANCIA MAGNÉTICA, S.A. (C.I.F. A-59347914); y PARACELSO DIAGNÓSTICO MÉDICO, S.L. (C.I.F. B-99009433).</p>
        
        <p>El usuario podrá ejercitar sus derechos de acceso, rectificación, cancelación y oposición ante el Responsable de Datos de CREU BLANCA en el domicilio sito en Paseo Reina Elisenda de Montcada, nº 17, 08034-Barcelona, aportando fotocopia de su DNI o documento equivalente, y concretando el derecho que desea ejercer.</p>
    </Layout>
)
