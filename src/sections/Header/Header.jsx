function Header() {
  return (
    <header className="header">
      <div className="header__logo">Prima Carta</div>

      <ul className="header__nav">
        <li className="header__nav-item">
          <a href="#card__form">получить карту</a>
        </li>
        <li className="header__nav-item">
          <a href="#">задать вопрос</a>
        </li>
        <li className="header__nav-item">
          <a href="#">о нас</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
