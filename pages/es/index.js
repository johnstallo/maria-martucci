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
      <title>María Martucci</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>

      <meta name="description" content="Una historia de amor y confianza en Dios" />
      <meta property="og:title" content="María Martucci" />
      <meta property="og:description" content="Una historia de amor y confianza en Dios" />
      <meta property="og:image" content="/static/android-chrome-512x512.png" />
    </Head>


    <Hero subtitle="Una historia de amor y confianza en Dios" author="por María Anunciata Stallo" />
    <Layout>
      <ContentLayout>
        {/* <ChapterPreview title="Prefazione" chapterRef="it/prefazione" /> */}
        <ChapterPreview title="1. Introducción" chapterRef="es/1" />
        <ChapterPreview title="2. La Conversión de Mi Madre" chapterRef="es/2" />
        <ChapterPreview title="3. La Dura Prueba" chapterRef="es/3" />
        <ChapterPreview title="4. La Gallina" chapterRef="es/4" />
        <ChapterPreview title="5. La Curación de Gino" chapterRef="es/5" />
        <ChapterPreview title="6. La Iglesia de Massafra" chapterRef="es/6" />
        <ChapterPreview title="7. La Enfermedad de Papá" chapterRef="es/7" />
        <ChapterPreview title="8. El Tabaco" chapterRef="es/8" />
        <ChapterPreview title="9. La Tuberculosis" chapterRef="es/9" />
        <ChapterPreview title="10. La Nefritis" chapterRef="es/10" />
        <ChapterPreview title="11. El Accidente en la Mano" chapterRef="es/11" />
        <ChapterPreview title="12. La Úlcera" chapterRef="es/12" />
        <ChapterPreview title="13. La Conversión de una Vecina" chapterRef="es/13" />
        <ChapterPreview title="14. Conclusión" chapterRef="es/14" />
        <ChapterPreview title="15. Nota de la Autora" chapterRef="es/15" />
      </ContentLayout>
      <Start buttonUrl="es/1" buttonText="Comenzar a leer" /> <br/>
      {/* <EndSpace /> */}
    </Layout>
    <style jsx>{`
    `}</style>
  </Page>
)

export default Index
