import Link from 'next/link'

const previewContainerStyle = {
  fontFamily: 'Merriweather Sans, sans-serif',
  marginBottom: 20,
  backgroundColor: 'white',
  color: 'black',
  paddingTop: 0,
  paddingBottom: 0,
  marginTop: 5,
  marginBottom: 5,
  fontWeight: 100
}

const previewTitle = {
  // fontFamily: 'La Belle Aurore, sans-serif',
  marginTop: 5,
  marginBottom: 5,
  fontSize: 18,
}

const previewText = {
  fontSize: 14,
}

const ChapterPreview = (props) => (
  <div style={previewContainerStyle}>
    <Link href={props.chapterRef}>
      <a style={previewTitle}>{props.title}</a>
    </Link>
  </div>
)

export default ChapterPreview