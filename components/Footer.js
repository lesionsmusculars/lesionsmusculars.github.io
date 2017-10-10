import React from 'react'
import Link from 'next/link'

const linkStyle = {
  marginLeft: 15
}

const footerStyle = {
  margin: '20px auto',
  textAlign: 'center'
}

const Footer = () => (
  <footer style={footerStyle}>
        <p><Link href="@"><a target="_blank"><img src='/static/logo-facebook-familias-numerosas.png' /></a></Link> <Link href="#"><a target="_blank"><img src='/static/logo-twitter-familias-numerosas.png' /></a></Link></p>

        <section>
          {/* <p className='purple'><Link href="http://www.elfac.org/"><a target="_blank"><img src='/static/logo-european-large-families-confederation-familias-numerosas.jpg' /></a></Link> <Link href="https://www.msssi.gob.es/"><a target="_blank"><img src='/static/logo-ministerio-familias-numerosas.png' /></a></Link> <Link href="http://www.masfamilia.org/que-es-2"><a target="_blank"><img src='/static/logo-familiarmente-responsable-familias-numerosas.png' /></a></Link>
          </p> */}
          <p className='grey'>Creu Blanca &#169; 2017
          <Link prefetch href="/aviso-legal">
            <a style={linkStyle}>Aviso Legal</a>
          </Link>
          <Link prefetch href="/politica-de-cookies">
            <a style={linkStyle}>Política de Cookies</a>
          </Link>
          <Link prefetch href="/creditos">
            <a style={linkStyle}>Creditos</a>
          </Link>         
          </p>
          
          <style jsx>{`
            .purple {
              color:#3a2092;
            }
            a {
              color:inherit;
            }
            a:hover {
              text-decoration:underline;
            }
            .grey {
              background-color:#e0e4e8;
            }
            section {
              background:#ffffff;
              }
          `}</style>

        </section>
        
        

    </footer>
)

export default Footer
