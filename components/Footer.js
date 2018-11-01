import Link from 'next/link'

const linkStyle = {
  fontStyle: 'italic'
}

const layoutStyle = {
  marginTop: 30, marginBottom: 70, paddingRight: 20
}

const Footer = (props) => (
    <div className="text-right" style={layoutStyle}>
        <Link href={props.next}>
          <a style={linkStyle}>{props.nextTitle} &#8594;</a>
        </Link>
    </div>
)

export default Footer