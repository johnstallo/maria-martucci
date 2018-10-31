import Link from 'next/link'

const layoutStyle = {
  paddingLeft: 20, paddingTop: 10, paddingBottom: 10,
  backgroundColor: '#feb236'
}

const linkStyle = {
  fontFamily: 'La Belle Aurore, sans-serif',
  color: 'black',
  fontSize: 26
}

const Header = () => (
    <div style={layoutStyle}>
        <Link href="/">
          <a style={linkStyle}>Maria Martucci</a>
        </Link>
    </div>
)

export default Header