import validateLogin from "../utils/auth";

const Navbar = () => {
  const isLogin = validateLogin();

  if (!isLogin) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Live
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Livestreamming
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              login
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/admin/register">
              register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/setting">
              setting
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/logout">
              logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
