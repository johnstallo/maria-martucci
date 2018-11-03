import ChapterLayout from '../components/ChapterLayout'

export default () => (
  <ChapterLayout
    pageTitle="Maria Martucci - The ulcer"
    chapterTitle="12. The ulcer"
    next="/13"
    nextTitle="Conversion of a neighbor">

    <p>At the age of 90 years, my mother developed a stomach ulcer and began to feel unwell. The family doctor told her that if she wanted to live she had to receive surgery; otherwise she would suffer and die. My mother replied to the doctor with these words: “Doctor, I have been serving the Lord for many years and perhaps the time has come for me to go home with Him! The vow I have made with God so many years ago I want to keep until death, because the Lord says: <span>Be faithful unto death, and I will give you the crown of life.</span>” (See Revelation 2:10). “Doctor, I want the crown that the Lord has promised me!”</p>
    <p>The doctor was so taken aback that he did not try to persuade her.</p>
    <style global jsx>{`
      span {
        color: #d64161;
        font-style: italic;
      }
    `}</style>
  </ChapterLayout>
)