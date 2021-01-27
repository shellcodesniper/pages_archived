interface interfaceTopNavbar {
  isLoggedIn: boolean;
};

const topNavbar = ({ isLoggedIn }: interfaceTopNavbar) => {
  return (
    <div>
      <nav className="navbar transparent navbar-expand-lg d-block d-sm-block d-lg-none navbar-dark rounded nav-mobile" aria-label="SANDMOOD">
        <div className="container-fluid">
          <div className="navbar w-100 order-1 order-md-0 dual-collapse2">
            <a className="navbar-brand" href="/"><img src="/static/images/profile.png" className="logo_top"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="slide-collapse" aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMobile1">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/product/?category=best">BEST</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown" id="dropdown_outer" data-bs-toggle="dropdown" aria-expanded="false">test</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown_outer">
                    <li><a className="dropdown-item" href="/about/tes2t">test2</a></li>
                    <li><a className="dropdown-item" href="/about/test">test</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarMobile2">
              <ul className="nav navbar-nav navbar-mla">
                <li className="nav-item">
                  <a className="nav-link" href={isLoggedIn ? '/member/login' : '/member/logout'}>{ isLoggedIn ? 'LOGIN' : 'LOGOUT' }</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/member/mypage">MYPAGE</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar transparent navbar-expand-lg navbar-dark mt-2 mb-3 rounded d-none d-lg-block" aria-label="SANDMOOD">
        <div className="container-fluid">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <a className="navbar-brand" href="/"><img className="logo_top" src="/static/images/profile.png"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPC" aria-controls="navbarPC" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-white" id="navbarPC">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/product/?category=best">BEST</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown" id="dropdown_outer" data-bs-toggle="dropdown" aria-expanded="false">test</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown_outer">
                    <li><a className="dropdown-item" href="/about/tes2t">test2</a></li>
                    <li><a className="dropdown-item" href="/about/test">test</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-mla">
                <li className="nav-item">
                  <a className="nav-link" href={isLoggedIn ? '/member/login' : '/member/logout'}>{ isLoggedIn ? 'LOGIN' : 'LOGOUT' }</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/member/mypage">MYPAGE</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default topNavbar;