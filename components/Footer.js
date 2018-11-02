import Link from 'next/link'

const layoutStyle = {
  marginTop: 30, paddingRight: 20
}

const Footer = (props) => (
    <div className="text-right" style={layoutStyle}>
        <br/>
        <Link href={props.next}>
          <a>{props.nextTitle} &raquo;</a>
        </Link>
        <style jsx>{`
          a {
            background-color: #feb236;
            padding: 8px;
            color: black;
            font-size: larger;
            font-family: 'Merriweather Sans', sans-serif;
            // box-shadow: 3px 3px #ddd;
          }
        `}</style>
    </div>
)

export default Footer