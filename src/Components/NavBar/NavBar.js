import "./styles.css"
import newChefLogo from './../../Images/newChefLogoGrey.png'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function NavBar() {
    return <nav className = "nav">
        <div className="logo-title-group">
            <img className="nc-logo" src={newChefLogo} style={{width: '1.8rem', height: '2rem'}} alt="New Chef Logo"/>
            <Link to="/" className="site-title">
                NewChef
            </Link>
        </div>
        <ul>
            <CustomLink to = "/courses">Courses</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })
    return (
        <li className = {isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}