function Hero() {
  return (
    <section className="main__hero hero">
      <div className="hero__content">
        <h1 className="hero__header">
          Ты <span>заслуживаешь знать</span> свою истинную карту
        </h1>

        {/* TODO Сделать золотые линии для большей премиальности, надписи золотые можно сделать пульсирующие и небольшой паралакс эффект для картинки! */}

        <p className="hero__text">
          Редкий шанс получить персональную натальную карту без скрытых условий.
          <br /> Мы делаем это бесплатно — потому что твоя история важна.
        </p>

        <a href="#card__form" className="hero__button">
          Получить свою карту!
        </a>
      </div>
    </section>
  );
}

export default Hero;
