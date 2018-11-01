import React, { Component } from 'react'
import ActiveLink from '../components/ActiveLink'

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <ActiveLink>
          Maria Martucci
        </ActiveLink>
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