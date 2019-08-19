import EndSpace from './EndSpace'

const Layout = (props) => (
  <div>
    {props.children}
    <EndSpace />
    <div className="copyright">© 2016 M. A. Stallo. All rights reserved.</div>
    <style jsx>{`
      div {
        padding: 20px;
        font-family: 'Merriweather', serif;
        font-size: 18px;
      }
      div.copyright {
        font-family: 'Merriweather Sans', sans-serif;
        color:#555;
        font-size:14px;
        padding-left:0px;
      }
      @media (min-width: 768px) {
        div {
          padding-top: 20px;
          padding-left: 60px;
          padding-right: 40px;
          max-width: 800px;
        }
      }
    `}</style>
  </div>
)

export default Layout