import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/MyLayout'
import ContentLayout from '../components/ContentLayout'

export default () => (
  <div>
    <Head>
      <title>Maria Martucci - Introduction</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans|La+Belle+Aurore" rel="stylesheet"></link>
    </Head>

    <Header />
    <Layout>
      <ContentLayout>
        <h3>Introduction</h3>
        <p>Maria Martucci was born in Mottola, a town in the province of Taranto, on September 16, 1909. Hers was a large family: her mother was a seamstress who worked from home, and Maria, being the eldest daughter, was entrusted with the housework and to care for her younger brothers. She worked diligently and with joy.</p>
        <p>She was 19 years old when she became engaged to my father, Cosimo Stallo (born November 2, 1905 in Massafra), who himself came from a poor family. My paternal grandmother was widowed when my father was only 17 years old; a train hit my grandfather as he traveled to work one day, and he died.</p>
        <p>From that moment onward, my father, who was the only male of five children, dutifully took on the burden and responsibility as head of family.</p>
        <p>On November 10, 1929, when Maria was 20 years old, my parents married and settled in Mottola.</p>
        <p>They had three children in the early years of their marriage: a girl and two boys. I do not remember their precise illness, but the first two children fell sick and died young. Following this great sorrow, my parents decided to move with their youngest child, Giovanni, to my father’s hometown of Massafra. It was 1936.</p>
      </ContentLayout>

      <Footer next="/2-my-mothers-conversion" nextTitle="My mother's conversion" />
    </Layout>
  </div>
)