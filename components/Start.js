import Link from 'next/link'

const layoutStyle = {
  marginTop: 10, paddingRight: 20
}

const Start = (props) => (
    <div className="text-left" style={layoutStyle}>
        <br/>
        <Link href={props.buttonUrl}>
          <a>{props.buttonText} &raquo;</a>
        </Link>
        <style jsx>{`
          a {
            background-color: #feb236;
            padding: 8px;
            color: black;
            // font-size: larger;
            font-family: 'Merriweather Sans', sans-serif;
            // box-shadow: 3px 3px #ddd;
          }
        `}</style>
    </div>
)

export default Start