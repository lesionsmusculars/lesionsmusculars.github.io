import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/MyLayout.js'


export default () => (
    <Layout>
    <Head>
      <title>II Congreso Creu Blanca sobre Lesiones Musculares</title>
    </Head>
        <section className='call-to-action'>                
                <p>Per fer.</p>
                <style jsx>{`
                    .call-to-action {
                        text-align:center;
                        margin:0 auto;
                    }
                    h1 {
                        color:#391f92;
                    }
                    .button {
                        color:inherit;
                        text-transform:uppercase;
                        border-color:#391f92;
                    }
                    .button:hover {
                        color:#391f92;
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
