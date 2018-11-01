import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/MyLayout'
import ContentLayout from '../components/ContentLayout'
import EndSpace from './EndSpace';

const ChapterLayout = (props) => (
  <div>
    <Head>
      <title>{props.pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>
    </Head>

    <Header/>  

    <Layout>
      <ContentLayout>
        <h3>{props.chapterTitle}</h3>
        {props.children}
      </ContentLayout>
      <Footer next={props.next} nextTitle={props.nextTitle}/>
    </Layout>
    
    <EndSpace/>
  </div>
)

export default ChapterLayout