import Header from './Header'

const layoutStyle = {
  padding: 20,
  fontFamily: 'Merriweather, serif',
  fontSize: 18
}

const Layout = (props) => (
  <div style={layoutStyle}>
    {props.children}
  </div>
)

export default Layout