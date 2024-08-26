const languageSelector = {
  marginTop: 30,
  marginBottom: 0,
  fontFamily: 'Merriweather Sans, sans-serif',
  fontWeight: 50,
}

const languageSelectorLink = {
  color: 'black',
  fontWeight: 800
}

const Hero = (props) => (
  <div className="container-fluid">
    <h1>Maria Martucci</h1>
    <h4>{props.subtitle}<br />{props.author}</h4>
    <p style={languageSelector}>
      <a style={languageSelectorLink} href="/">English</a> | <a style={languageSelectorLink} href="/it">Italiano</a> | <a style={languageSelectorLink} href="/es">Español</a> | <a style={languageSelectorLink} href="/fr">Français</a> | <a style={languageSelectorLink} href="/zh">中文</a>
    </p>
    <style jsx>{`
      div {
        text-align: right;
        color: black;
        background-color: #feb236;
        padding-left: 10px;
        padding-right: 20px;
        padding-top: 50px;
        padding-bottom: 50px;
      }
      h1 {
        font-family: 'La Belle Aurore', sans-serif;
        font-size: 48px;
        font-weight: 100px;
        margin-bottom: 0px
      }
      h4 {
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 18px;
        font-weight: 100;
        margin-top: 0px;
        line-height: 1.5;
      }
      @media (max-width: 320px) {
        h1 {
          font-size: 40px;
        }
        h4 {
          font-size: 14px;
        }
      }
      @media (min-width: 768px) {
        div {
          text-align: left;
          color: black;
          background-color: #feb236;
          padding-left: 60px;
          padding-top: 80px;
          padding-bottom: 50px;
        }
        h1 {
          font-size: 80px;
        }
      }
    `}</style>
  </div>

)

export default Hero