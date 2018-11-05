const BibleQuote = (props) => (
  <span>
    {props.children}
    <style jsx>{`
      span {
        color: #d64161;
        font-style: italic;
      }
    `}</style>
  </span>
)

export default BibleQuote