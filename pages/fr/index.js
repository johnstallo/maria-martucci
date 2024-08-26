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

      <meta name="description" content="Une histoire d'amour et de confiance en Dieu" />
      <meta property="og:title" content="Maria Martucci" />
      <meta property="og:description" content="Une histoire d'amour et de confiance en Dieu" />
      <meta property="og:image" content="/static/android-chrome-512x512.png" />
    </Head>


    <Hero subtitle="Une histoire d'amour et de confiance en Dieu" author="par Maria Annunziata Stallo" />
    <Layout>
      <ContentLayout>
        <ChapterPreview title="1. Introduction" chapterRef="fr/1" />
        <ChapterPreview title="2. La Conversion de Ma Mère" chapterRef="fr/2" />
        <ChapterPreview title="3. L'Épreuve Dure" chapterRef="fr/3" />
        <ChapterPreview title="4. La Poule" chapterRef="fr/4" />
        <ChapterPreview title="5. La Guérison de Gino" chapterRef="fr/5" />
        <ChapterPreview title="6. L'Église de Massafra" chapterRef="fr/6" />
        <ChapterPreview title="7. La Maladie de Papa" chapterRef="fr/7" />
        <ChapterPreview title="8. Le Tabac" chapterRef="fr/8" />
        <ChapterPreview title="9. La Tuberculose" chapterRef="fr/9" />
        <ChapterPreview title="10. La Néphrite" chapterRef="fr/10" />
        <ChapterPreview title="11. L'Accident à la Main" chapterRef="fr/11" />
        <ChapterPreview title="12. L'Ulcer" chapterRef="fr/12" />
        <ChapterPreview title="13. La Conversion d'une Voisine" chapterRef="fr/13" />
        <ChapterPreview title="14. Conclusion" chapterRef="fr/14" />
        <ChapterPreview title="15. Note de l'Auteur" chapterRef="fr/15" />
      </ContentLayout>
      <Start buttonUrl="fr/1" buttonText="Commencer la lecture" /> <br/>
      {/* <EndSpace /> */}
    </Layout>
    <style jsx>{`
    `}</style>
  </Page>
)

export default Index
