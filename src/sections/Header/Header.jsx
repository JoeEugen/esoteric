function Header () {
    return(
        <header className="header">
            <div className="header__logo">Prima Carta</div>

                <ul className="header__nav">
                    <li className="header__nav-item">
                        <a href="#">главная</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">о нас</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">вопросы</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">получить карту</a>
                    </li>
                </ul>

        </header>
    )
}

export default Header;
