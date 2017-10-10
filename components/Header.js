import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import NavBarBenFamNum from './NavBarBenFamNum'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header = () => (
  <div style={{ marginBottom: 20 }}>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="theme-color" content="#64bc58" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
      <meta name="apple-mobile-web-app-title" content="Beneficios Familias Numerosas"/>
      <link rel="apple-touch-icon" href="/static/icons/android-chrome-192x192.png"/>
      <meta name="msapplication-TileImage" content="/static/icons/android-chrome-192x192.png"/>
      <meta name="msapplication-TileColor" content="#64bc58"/>
      <link rel="stylesheet" href="/static/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/foundation.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i&amp;subset=latin-ext" rel="stylesheet" />
      <link rel="stylesheet" href="/static/global.css" />
      <script async="true" defer="true" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpb701GdEKst5BwD_bw7gzIc7vR65_f90&callback=initMap"
        type="text/javascript"></script>
      <script async="true" defer="true" src="/static/intersection-observer.js"
        type="text/javascript"></script>
    </Head>
    <header/>
      <div className='bg-header' />
    <header/>    
    <NavBarBenFamNum />
        <style jsx>{`
          header {
            background:#02272e;
          }
          .bg-header {
            margin:0 auto;
          }
          @media screen and (min-width: 320px) {
          .bg-header {
              background: url('/static/bg-congres-creu-blanca-lesions-musculars-320.png');
              padding:.25em;
              height:195px;
              width:320px;
            }
          }
          @media screen and (min-width: 768px) {
          .bg-header {
              background: url('/static/bg-congres-creu-blanca-lesions-musculars-768.png');
              padding:.5em;
              height:468px;
              width:768px;
            }
          }
          @media screen and (min-width: 1024px) {
          bg-header {
              background: url('/static/bg-congres-creu-blanca-lesions-musculars-1024.png');
              padding:.5em;
              height:682px;
              width:1024px;
            }
          }
        `}</style>

    </div>
)

export default Header
