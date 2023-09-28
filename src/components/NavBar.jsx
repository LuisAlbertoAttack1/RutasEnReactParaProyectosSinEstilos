import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <div>
      <ul>
      <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/About'>About</NavLink>
        </li>
        <li>
            <NavLink to='/UserPage'>User</NavLink>
        </li>
        <li>
            <NavLink to='/'></NavLink>
        </li>
      </ul>
    </div>
  )
}

