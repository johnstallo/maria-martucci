const Layout = (props) => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        padding: 20px;
        font-family: 'Merriweather', serif;
        font-size: 18px;
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