import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a>Maria Martucci</a>
    </Link>
    <style jsx>{`
      div {
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #feb236;
      }
      a {
        font-family: 'La Belle Aurore', sans-serif;
        color: black;
        font-size: 26px;
      }
      @media (min-width: 768px) {
        div {
          padding-left: 40px;
        }
      }
    `}</style>
  </div>
)

export default Header