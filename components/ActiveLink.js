import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ children, router, href }) => {

  
  const handleClick = (e) => {
    e.preventDefault();

    // Feels hacky :(
    var parts = router.pathname.split("/");
    var url = "/";
    if (parts[1] && parts[1] == "it") {
      url += parts[1];
    }
    router.push(url)
  }

  return (
    <Link>
      <div onClick={handleClick}>
        <a href={href} >
          {children}
        </a>
        <style jsx>{`
          a {
            font-family: 'La Belle Aurore', sans-serif;
            color: black;
            font-size: 26px;
          }
          div:hover {
            cursor: pointer;
          }
        `}</style>
      </div>
    </Link>
  )

}

export default withRouter(ActiveLink)