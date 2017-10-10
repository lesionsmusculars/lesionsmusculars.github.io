import Header from './Header'
import Footer from './Footer'
import ServiceWorker from '../pages/service-worker'
import NavBarBenFamNum from './NavBarBenFamNum'

const layoutStyle = {
  margin: '0 auto',
  padding: 0,
  'max-width': '100%'
}
const mainStyle = {
  padding: '0 20px 20px 20px',
  'max-width': '84rem',
  margin: '0 auto'
}

const Layout = (props) => (
  <div style={layoutStyle} className='layout'>
    <Header />
      <main style={mainStyle}>          
      <NavBarBenFamNum />
        {props.children}
      </main>
    <Footer />
    <ServiceWorker />
  </div>
)

export default Layout
