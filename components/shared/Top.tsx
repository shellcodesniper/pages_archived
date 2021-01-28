interface interfaceTopNavbar {
  isLoggedIn: boolean;
  currentPage: string;
};

const isActive = (active: boolean, className?: string): string => {
  return active
    ? `nav-link active ${className}`
    : `nav-link ${className}`;
}

const topNavbar = (props: interfaceTopNavbar) => {
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
                  <a className={isActive(props.currentPage ==='/')} aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className={isActive(props.currentPage ==='about')} aria-current="page" href="/about">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className={isActive(props.currentPage ==='register')} aria-current="page" href="/register">서비스 사용신청</a>
                </li>

{/*
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown" id="dropdown_outer" data-bs-toggle="dropdown" aria-expanded="false">test</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown_outer">
                    <li><a className="dropdown-item" href="/about/tes2t">test2</a></li>
                    <li><a className="dropdown-item" href="/about/test">test</a></li>
                  </ul>
                </li>
*/}
              </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarMobile2">
              <ul className="nav navbar-nav navbar-mla">
                <li className="nav-item">
                  <a className={isActive(props.currentPage === 'login' || props.currentPage === 'logout')} href={props.isLoggedIn ? '/member/logout' : '/member/login'}>{ props.isLoggedIn ? 'LOGOUT' : 'LOGIN' }</a>
                </li>
                <li className="nav-item">
                  <a className={isActive(props.currentPage ==='mypage')} href="/member/mypage">MYPAGE</a>
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
                  <a className={isActive(props.currentPage ==='/')} aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className={isActive(props.currentPage ==='about')} aria-current="page" href="/about">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className={isActive(props.currentPage ==='register')} aria-current="page" href="/register">서비스 사용신청</a>
                </li>

{/*
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown" id="dropdown_outer" data-bs-toggle="dropdown" aria-expanded="false">test</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown_outer">
                    <li><a className="dropdown-item" href="/about/tes2t">test2</a></li>
                    <li><a className="dropdown-item" href="/about/test">test</a></li>
                  </ul>
                </li>
*/}
              </ul>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-mla">
                <li className="nav-item">
                  <a className={isActive(props.currentPage === 'login' || props.currentPage === 'logout')} href={props.isLoggedIn ? '/member/logout' : '/member/login'}>{ props.isLoggedIn ? 'LOGOUT' : 'LOGIN' }</a>
                </li>
                <li className="nav-item">
                  <a className={isActive(props.currentPage ==='mypage')} href="/member/mypage">MYPAGE</a>
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
