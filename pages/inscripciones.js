import Link from 'next/link'
import Layout from '../components/MyLayout.js'

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
        <h1>Inscripciones</h1>

        <figure><img src='http://www.familiasnumerosas.org/fileadmin/user_upload/Destacados/Imagenhome2016familiasnumerosas.jpg' width='100%' height='324' alt='Imagen hazte socio Familias Numerosas' title='Imagen hazte socio Familias Numerosas'/></figure>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


        <style jsx>{`
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
                width: 70%;
                }
            }
            @media screen and (min-width: 1366px) {   
                .call-to-action {
                width: 62%;
                }
            }
        `}</style>

      </section>


    </Layout>
)
