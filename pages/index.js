import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/MyLayout'
import ContentLayout from '../components/ContentLayout'
import ChapterPreview from '../components/ChapterPreview'
import EndSpace from '../components/EndSpace'

const Index = () => (
  <div>
    <Head>
      <title>Maria Martucci</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>
    </Head>


    <Hero subtitle="A story of love and trust in God" author="by Maria Anunziata Stallo"/>
    <Layout>  
      <ContentLayout>
        <ChapterPreview title="Premise" chapterRef="premise" />
        <ChapterPreview title="1. Introduction" chapterRef="1-introduction" />
        <ChapterPreview title="2. My mother's conversion" chapterRef="2-my-mothers-conversion" />
        <ChapterPreview title="3. The fiery trial" chapterRef="3-the-fiery-trial" />
        <ChapterPreview title="4. The hen" chapterRef="4-the-hen" />
        <ChapterPreview title="5. The healing of Gino" chapterRef="5-healing-of-gino" />
        <ChapterPreview title="6. The church of Massafra" chapterRef="6-church-of-massafra" />
        <ChapterPreview title="7. Papa's illness" chapterRef="7-papas-illness" />
        <ChapterPreview title="8. The tobacco" chapterRef="8-tobacco" />
        <ChapterPreview title="9. Tuberculosis" chapterRef="9-tuberculosis" />
        <ChapterPreview title="10. Nephritis" chapterRef="10-nephritis" />
        <ChapterPreview title="11. The hand injury" chapterRef="11-hand-injury" />
        <ChapterPreview title="12. The ulcer" chapterRef="12-ulcer" />
        <ChapterPreview title="13. The conversion of a neighbor" chapterRef="13-conversion-of-a-neighbor" />
        <ChapterPreview title="14. Conclusion" chapterRef="14-conclusion" />
      </ContentLayout>
      <EndSpace />
    </Layout>
    <style jsx>{`
    `}</style>
  </div>
)

export default Index