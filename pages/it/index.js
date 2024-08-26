import Head from 'next/head'
import Hero from '../../components/Hero'
import Layout from '../../components/MyLayout'
import ContentLayout from '../../components/ContentLayout'
import ChapterPreview from '../../components/ChapterPreview'
import EndSpace from '../../components/EndSpace'
import Start from '../../components/Start'
import Page from '../../components/Page'

const Index = () => (
  <Page>
    <Head>
      <title>Maria Martucci</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>

      <meta name="description" content="Una storia di amore e fiducia in Dio" />
      <meta property="og:title" content="Maria Martucci" />
      <meta property="og:description" content="Una storia di amore e fiducia in Dio" />
      <meta property="og:image" content="/static/android-chrome-512x512.png" />
    </Head>


    <Hero subtitle="Una storia di amore e fiducia in Dio" author="di Maria Annunziata Stallo" />
    <Layout>
      <ContentLayout>
        <ChapterPreview title="1. Introduzione" chapterRef="it/1" />
        <ChapterPreview title="2. La Conversione di Mia Madre" chapterRef="it/2" />
        <ChapterPreview title="3. La Dura Prova" chapterRef="it/3" />
        <ChapterPreview title="4. La Gallina" chapterRef="it/4" />
        <ChapterPreview title="5. La Guarigione di Gino" chapterRef="it/5" />
        <ChapterPreview title="6. La Chiesa di Massafra" chapterRef="it/6" />
        <ChapterPreview title="7. La Malattia di Papà" chapterRef="it/7" />
        <ChapterPreview title="8. Il Tabacco" chapterRef="it/8" />
        <ChapterPreview title="9. La Tubercolosi" chapterRef="it/9" />
        <ChapterPreview title="10. La Nefrite" chapterRef="it/10" />
        <ChapterPreview title="11. L’Incidente alla Mano" chapterRef="it/11" />
        <ChapterPreview title="12. L’Ulcera" chapterRef="it/12" />
        <ChapterPreview title="13. La Conversione di una Vicina" chapterRef="it/13" />
        <ChapterPreview title="14. Conclusione" chapterRef="it/14" />
        <ChapterPreview title="15. Nota dell'Autrice" chapterRef="it/15" />
      </ContentLayout>
      <Start buttonUrl="it/1" buttonText="Iniziare a leggere" /> <br/>
      {/* <EndSpace /> */}
    </Layout>
    <style jsx>{`
    `}</style>
  </Page>
)

export default Index