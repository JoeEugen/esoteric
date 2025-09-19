import { useState, useEffect, useRef } from "react";

function CardForm() {
  const [popup, setPopup] = useState(false);
  const [timeUnknown, setTimeUnknown] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const refName = useRef();
  const refBirthTime = useRef();

  const refQuestion = useRef();

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => {
        document.body.style.overflow = "unset";
        setPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  const submitForm = (e) => {
    e.preventDefault();
    const payload = {
      id: Date.now().toString(36),
      ts: Date.now(),
      name: refName.current.value || null,
      birthDate: birthDate,
      birthTime: refBirthTime.current.disabled
        ? null
        : refBirthTime.current.value || null,
      timeUnknown: timeUnknown,
      country: country,
      city: city,
      email: email,
      question: refQuestion.current.value || "",
      consent: consent,
    };

    localStorage.setItem("PrimaCarta:lastRequest", JSON.stringify(payload));

    setPopup(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="main__card card">
      <div className="card__content">
        <h2 className="card__title">Твоя натальная карта ждёт тебя</h2>
        <div className="card__text">
          <p>
            Каждая деталь — как звезда на небе. Чем точнее ты введёшь данные,
            тем глубже раскроется твоя карта.
          </p>
          <p>
            Дата и место рождения — обязательные знаки судьбы. <br /> А время?
            Если ты помнишь его — введи. Если нет — не переживай: звёзды всё
            равно узнают тебя.
          </p>
          <p>
            Письмо с картой придет на почту в течение 24–72 часов — в
            зависимости от того, сколько звёзд сейчас ждут своего часа.
          </p>
          <p>
            Mы не отправляем спам. Только то, что написано в твоём космическом
            коде.
          </p>
        </div>
      </div>

      <form
        id="card__form"
        className="card__form"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="card__field">
          <label className="card__label" htmlFor="card__name">
            Ваше Имя:
          </label>
          <input
            className="card__input"
            type="text"
            id="card__name"
            placeholder="Мария"
            ref={refName}
            name="name"
            autocomplete="name"
          />
        </div>

        <fieldset className="card__field-group">
          <legend className="card__legend">Данные рождения</legend>
          <div className="card__field">
            <label className="card__label" htmlFor="card__date">
              Дата:
            </label>
            <input
              className="card__input"
              type="date"
              id="card__date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              name="birthDate"
              required
              autoComplete="bday"
            />
          </div>

          <div className="card__field">
            <label
              className={timeUnknown ? "card__disabled" : "card__label"}
              htmlFor="card__time"
            >
              Время:
            </label>
            <input
              className={
                timeUnknown ? "card__input card__disabled" : "card__input"
              }
              type="time"
              id="card__time"
              ref={refBirthTime}
              name="birthTime"
              disabled={timeUnknown}
              autocomplete="off"
            />
            <div className="card__field card__checkbox">
              <input
                type="checkbox"
                id="card__timeUnknown"
                name="timeUnknown"
                checked={timeUnknown}
                onChange={(e) => {
                  setTimeUnknown(e.target.checked);
                  if (e.target.checked && refBirthTime.current)
                    refBirthTime.current.value = "";
                }}
              />

              <label htmlFor="card__timeUnknown">Не знаю время</label>
            </div>
          </div>
        </fieldset>

        <fieldset className="card__field-group">
          <legend className="card__legend">Место рождения</legend>

          <div className="card__field">
            <label className="card__label" htmlFor="card__country">
              Страна:
            </label>
            <input
              className="card__input"
              type="text"
              id="card__country"
              placeholder="Россия"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              name="country"
              required
              autoComplete="country"
            />
          </div>
          <div className="card__field">
            <label className="card__label" htmlFor="card__city">
              Город:
            </label>
            <input
              className="card__input"
              type="text"
              id="card__city"
              placeholder="Благовещенск"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              name="city"
              required
              autoComplete="address-level2"
            />
          </div>
        </fieldset>

        <div className="card__field">
          <label className="card__label" htmlFor="card__email">
            Почта:
          </label>
          <input
            className="card__input"
            type="email"
            id="card__email"
            placeholder="example@mail.ru"
            required
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="card__field">
          <textarea
            className="card__textarea"
            placeholder="Тут вы можете ввести уточняющую информацию или задать вопрос!"
            rows="5"
            maxLength={300}
            ref={refQuestion}
          ></textarea>
        </div>

        <div className="card__field card__checkbox">
          <input
            type="checkbox"
            id="card__consent"
            name="consent"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label htmlFor="card__consent">
            Я согласен(а) на обработку данных.
          </label>
        </div>
        <button type="submit" className="card__button">
          Отправить
        </button>
      </form>

      {popup && (
        <div className="card__popup-container">
          <div className="card__done">
            <p>Ваша заявка принята!</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default CardForm;
