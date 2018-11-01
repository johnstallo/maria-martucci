import Link from 'next/link'

const linkStyle = {
  fontStyle: 'italic'
}

const layoutStyle = {
  marginTop: 30, paddingRight: 20
}

const Footer = (props) => (
    <div className="text-right" style={layoutStyle}>
        <Link href={props.next}>
          <a style={linkStyle}>{props.nextTitle} &#8594;</a>
        </Link>
        <style jsx>{`
          
        `}</style>
    </div>
)

export default Footer