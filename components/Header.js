import React, { Component } from 'react'
import ActiveLink from '../components/ActiveLink'
import Link from 'next/link'

function MyLink (props) {
  const url = props.locale ? "/" + props.locale : "/";
  return (
    <Link href={url}>
      {props.children}
    </Link>
  );
}

export default class Header extends React.Component {

  render() {
    return (
      <div>
        {/* <ActiveLink>
          Maria Martucci
        </ActiveLink> */}
        <MyLink locale={this.props.locale}>
          <a>Maria Martucci</a>
        </MyLink>
        <style jsx>{`
          div {
            padding-left: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            background-color: #feb236;
          }
          span {
            font-family: 'La Belle Aurore', sans-serif;
            color: black;
            font-size: 26px;
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
  }
}

// export default Header