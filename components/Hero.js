const heroTitle = {
  fontFamily: 'La Belle Aurore, sans-serif',
  fontSize: 48,
  fontWeight: 100,
  marginBottom: 0
}

const heroSubtitle = {
  fontFamily: 'Merriweather Sans, sans-serif',
  fontSize: 18,
  fontWeight: 100,
  marginTop: 0,
  lineHeight: 1.4,
}

const heroContainer = {
  marginBottom: 40,
  backgroundColor: '#044',
  color: 'white'
}

const languageSelector = {
  marginTop: 30,
  marginBottom: 0,
  fontFamily: 'Merriweather Sans, sans-serif',
}

const languageSelectorLink = {
  color: 'black'
}

const Hero = () => (
  <div className="container-fluid">
    <h1>Maria Martucci</h1>
    <h4 style={heroSubtitle}>A story of love and trust in God<br />by Maria Anunziata Stallo</h4>
    <p style={languageSelector}><a style={languageSelectorLink} href="">English</a> | <a style={languageSelectorLink} href="">Italiano</a></p>
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
      @media (min-width: 768px) {
        div {
          text-align: left;
          color: black;
          background-color: #feb236;
          padding-left: 40px;
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