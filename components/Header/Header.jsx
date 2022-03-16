const Header = () => {
  return (
    <>
      <div
        className={
          "c-pagebar bg-white mt-0 mb-6 py-4 px-8 border-b border-gray-200 mb-0"
        }
      >
        <div className="c-pagebar__icon">
          <div className={"c-icon-box c-icon-box--orange"}>
            <i data-testid="icon" className="fa fa-bug" />
          </div>
        </div>
        <div className="c-pagebar__header">
          <h1 className="c-pagebar__title">Errors</h1>
          <h2 className="c-pagebar__subtitle">The stuff that breaks</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
