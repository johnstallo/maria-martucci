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

const herojump = {
  color: 'black',
  backgroundColor: '#feb236',
  paddingLeft: 10,
  paddingRight: 20,
  paddingTop: 50,
  paddingBottom: 50
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
  // <div style={heroContainer}>
  //     <h1 style={heroTitle}>Maria Martucci</h1>
  //     <h3 style={heroSubtitle}>A simple story of love and trust in God</h3>
  // </div>

  <div class="container-fluid text-right" style={herojump}>
    <h1 style={heroTitle}>Maria Martucci</h1>
    <h4 style={heroSubtitle}>A story of love and trust in God<br />by Maria Anunziata Stallo</h4>
    <p style={languageSelector}><a style={languageSelectorLink} href="">English</a> | <a style={languageSelectorLink} href="">Italiano</a></p>
  </div>

)

export default Hero