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
          <p className='blue-congress'>Creu Blanca &#169; 2017
          <Link prefetch href="/la-sede">
            <a style={linkStyle}>La sede</a>
          </Link>
          <Link prefetch href="/aviso-legal">
            <a style={linkStyle}>Aviso Legal</a>
          </Link>
          <Link prefetch href="/politica-de-cookies">
            <a style={linkStyle}>Política de Cookies</a>
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
            .blue-congress {
              background:#02272e;
              color:#ffffff;
            }
            section {
              background:#ffffff;
              }
          `}</style>

        </section>
        
        

    </footer>
)

export default Footer
