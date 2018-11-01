import Head from 'next/head'
import Hero from '../../components/Hero'
import Layout from '../../components/MyLayout'
import ContentLayout from '../../components/ContentLayout'
import ChapterPreview from '../../components/ChapterPreview'
import EndSpace from '../../components/EndSpace'

const Index = () => (
  <div>
    <Head>
      <title>Maria Martucci</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>
    </Head>


    <Hero subtitle="Una storia di amore e fiducia in Dio" author="- Maria Anunziata Stallo"/>
    <Layout>
      <ContentLayout>
        <ChapterPreview title="Premessa" chapterRef="it/premessa" />
        <ChapterPreview title="1. Introduzione" chapterRef="1-introduzione" />
        <ChapterPreview title="2. La conversione di mia madre" chapterRef="2-conversione-di-mia-madre" />
        <ChapterPreview title="3. La dura prova" chapterRef="3-dura-prova" />
        <ChapterPreview title="4. La gallina" chapterRef="4-gallina" />
        <ChapterPreview title="5. La guarigione di Gino" chapterRef="5-guarigione-di-gino" />
        <ChapterPreview title="6. La chiesa di Massafra" chapterRef="6-chiesa-di-massafra" />
        <ChapterPreview title="7. La malattia di papà" chapterRef="7-malattia-di-papa" />
        <ChapterPreview title="8. Il Tabacco" chapterRef="8-tabacco" />
        <ChapterPreview title="9. La tubercolosi" chapterRef="9-tubercolosi" />
        <ChapterPreview title="10. La nefrite" chapterRef="10-nefrite" />
        <ChapterPreview title="11. L’incidente alla mano" chapterRef="11-incidente-alla-mano" />
        <ChapterPreview title="12. L’ulcera" chapterRef="12-ulcera" />
        <ChapterPreview title="13. La conversione di una vicina" chapterRef="13-conversione-di-una-vicina" />
        <ChapterPreview title="14. Conclusione" chapterRef="14-conclusione" />
      </ContentLayout>
      <EndSpace />
    </Layout>
    <style jsx>{`
    `}</style>
  </div>
)

export default Index