const layoutStyle = {
  // marginLeft: 30, paddingRight: 20
}

const Photo = (props) => (
  <div style={layoutStyle}>
    <img src={props.src} className="img-fluid dropshadowclass" alt={props.caption} />
    <p>{props.caption}</p>
    <style jsx>{`
          div {
            margin: 0;
            padding: 0;
          }
          img {
            margin: 0;
            padding: 0;
            max-width:100%; 
            height:auto;
          }
          p {
            font-family: 'Merriweather Sans', sans-serif;
            font-size: smaller;
            border: 1;
            font-weight: bold;
          }
          .dropshadowclass {
            padding: 4px;
            border: solid 1px #efefef;
            -moz-box-shadow: 1px 1px 5px #aaa;
            -webkit-box-shadow: 1px 1px 5px #aaa;
            box-shadow: 1px 1px 5px #aaa;
          }
        `}</style>
  </div>
)

export default Photo