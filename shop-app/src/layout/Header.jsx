function Header() {
    return (
        <nav className="blue lighten-3">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="!#">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;