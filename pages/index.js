import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/MyLayout'
import ContentLayout from '../components/ContentLayout'
import ChapterPreview from '../components/ChapterPreview'
import EndSpace from '../components/EndSpace'
import Start from '../components/Start'
import Page from '../components/Page'

const Index = () => (
  <Page>
    <Head>
      <title>Maria Martucci</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>

      <meta name="description" content="A story of love and trust in God" />
      <meta property="og:title" content="Maria Martucci" />
      <meta property="og:description" content="A story of love and trust in God" />
      <meta property="og:image" content="/static/android-chrome-512x512.png" />
    </Head>


    <Hero subtitle="A story of love and trust in God" author="by Maria Annunziata Stallo" />

    <Layout>
      <ContentLayout>
        <ChapterPreview title="1. Introduction" chapterRef="1" />
        <ChapterPreview title="2. My Mother's Conversion" chapterRef="2" />
        <ChapterPreview title="3. The Fiery Trial" chapterRef="3" />
        <ChapterPreview title="4. The Hen" chapterRef="4" />
        <ChapterPreview title="5. The Healing of Gino" chapterRef="5" />
        <ChapterPreview title="6. The Church of Massafra" chapterRef="6" />
        <ChapterPreview title="7. Papa's Illness" chapterRef="7" />
        <ChapterPreview title="8. The Tobacco" chapterRef="8" />
        <ChapterPreview title="9. Tuberculosis" chapterRef="9" />
        <ChapterPreview title="10. Nephritis" chapterRef="10" />
        <ChapterPreview title="11. The Hand Injury" chapterRef="11" />
        <ChapterPreview title="12. The Ulcer" chapterRef="12" />
        <ChapterPreview title="13. The Conversion of a Neighbor" chapterRef="13" />
        <ChapterPreview title="14. Conclusion" chapterRef="14" />
        <ChapterPreview title="15. Author's Note" chapterRef="15" />
      </ContentLayout>
      <Start buttonUrl="/1" buttonText="Start reading" /> <br />
      {/* <EndSpace /> */}
    </Layout>
    <style jsx>{`
    `}</style>
  </Page>
)

export default Index