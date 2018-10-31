const layoutStyle = {
  marginTop: 20,
  lineHeight: 2,
}

const ContentLayout = (props) => (
  <div style={layoutStyle}>
    {props.children}
  </div>
)

export default ContentLayout