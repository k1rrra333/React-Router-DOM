import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/about">About</NavLink>
      <NavLink className="nav-link" to="/products">Products</NavLink>
      <NavLink className="nav-link" to="/cart">Cart</NavLink>
    </nav>
  )
}

export default Navbar