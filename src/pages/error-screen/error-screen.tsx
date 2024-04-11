function ErrorScreen(): JSX.Element {

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">Failed to load data.</b>
            <p className="cities__status-description">Please reload the page</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

export default ErrorScreen;
