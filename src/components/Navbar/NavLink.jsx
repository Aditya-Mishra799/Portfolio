import React from 'react'
import styles from "./nav.module.css"
const NavLink = ({label, href}) => {
  return (
    <a href={href}>
      {label}
    </a>
  )
}

export default NavLink
