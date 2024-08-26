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
      <title>玛利亚·马图奇</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>

      <meta name="description" content="一个关于爱与信仰上帝的故事" />
      <meta property="og:title" content="玛利亚·马图奇" />
      <meta property="og:description" content="一个关于爱与信仰上帝的故事" />
      <meta property="og:image" content="/static/android-chrome-512x512.png" />
    </Head>


    <Hero subtitle="一个关于爱与信仰上帝的故事" author="作者：玛利亚·安努齐亚塔·斯塔罗" />
    <Layout>
      <ContentLayout>
        <ChapterPreview title="1. 引言" chapterRef="zh/1" />
        <ChapterPreview title="2. 我母亲的皈依" chapterRef="zh/2" />
        <ChapterPreview title="3. 烈火考验" chapterRef="zh/3" />
        <ChapterPreview title="4. 母鸡" chapterRef="zh/4" />
        <ChapterPreview title="5. 吉诺的康复" chapterRef="zh/5" />
        <ChapterPreview title="6. 马萨夫拉教会" chapterRef="zh/6" />
        <ChapterPreview title="7. 爸爸的疾病" chapterRef="zh/7" />
        <ChapterPreview title="8. 烟草" chapterRef="zh/8" />
        <ChapterPreview title="9. 结核病" chapterRef="zh/9" />
        <ChapterPreview title="10. 肾炎" chapterRef="zh/10" />
        <ChapterPreview title="11. 手部受伤" chapterRef="zh/11" />
        <ChapterPreview title="12. 溃疡" chapterRef="zh/12" />
        <ChapterPreview title="13. 邻居的皈依" chapterRef="zh/13" />
        <ChapterPreview title="14. 结论" chapterRef="zh/14" />
        <ChapterPreview title="15. 作者的说明" chapterRef="zh/15" />
      </ContentLayout>
      <Start buttonUrl="zh/1" buttonText="开始阅读" /> <br/>
      {/* <EndSpace /> */}
    </Layout>
    <style jsx>{`
    `}</style>
  </Page>
)

export default Index
