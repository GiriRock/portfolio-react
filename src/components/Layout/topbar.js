import {NavLink} from 'react-router-dom'
import './layout.sass'

const TopBar = () =>{
    return(
        <>
        <header className='top-bar'>

            <a href="/" class="logo">Giridharan</a> 
            <nav>
                <div className='top-bar-nav'>
                <NavLink to="/">
                    <span>
                        Home
                    </span>
                </NavLink>
                <NavLink to="/">
                    <span>
                        About Me
                    </span>
                </NavLink>
                <NavLink to="/">
                    <span>
                        Skills
                    </span>
                </NavLink>
                <NavLink to="/">
                    <span>
                        Career
                    </span>
                </NavLink>
                <NavLink to="/">
                    <span>
                        Contact Me
                    </span>
                </NavLink>

                </div>
            </nav>
            </header>
        </>
    )
}

export default TopBar