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


      <div id="categoryLayer">
        <i onClick={closeCategory} className="fa fa-times fa-lg closeCategoryButton" aria-hidden="true"></i>
        <div>
          <ul className="fir">
            <li>
              <div className="-all">
                <div id="allcategory" className="xans-element- xans-layout xans-layout-category">
                  <div className="position">
                    <ul>
                      <li data-param="?cate_no=75" className="depth1 xans-record-">
                        <a className="dropdown-item" href="/product/?category=best">BEST</a>
                        <ul className="-sub-category"></ul>
                      </li>
                      <li data-param="?cate_no=24" className="depth1 xans-record-">
                        <a className="dropdown-item" href="/product/?category=outer">OUTER</a>
                        <ul className="-sub-category">
                          <li><a className="dropdown-item" href="/category/jacket/">JACKET</a></li>
                          <li><a className="dropdown-item" href="/category/coat/">COAT</a></li>
                          <li><a className="dropdown-item" href="/category/cardigan/">CARDIGAN</a></li>
                          <li><a className="dropdown-item" href="/category/jumper/">JUMPER</a></li>
                        </ul>
                      </li>
                      <li data-param="?cate_no=23" className="depth1 xans-record-">
                        <a className="dropdown-item" href="/product/?category=top">TOP</a>
                        <ul className="-sub-category">
                          <li><a className="dropdown-item" href="/category/tee">TEE</a></li>
                          <li><a className="dropdown-item" href="/category/sleeveless/">SLEEVELESS</a></li>
                          <li><a className="dropdown-item" href="/category/knit/">KNIT</a></li>
                          <li><a className="dropdown-item" href="/category/blouse-shirt/">BLOUSE / SHIRT</a></li>
                          <li><a className="dropdown-item" href="/category/mtm-hood/">MTM / HOOD</a></li>
                        </ul>
                      </li>
                      <li data-param="?cate_no=26" className="depth1 xans-record-">
                        <a className="dropdown-item" href="/product/?category=dress">DRESS</a>
                        <ul className="-sub-category"></ul>
                      </li>
                      <li data-param="?cate_no=25" className="depth1 xans-record-">
                        <a className="dropdown-item" href="/product/?category=bottom">BOTTOM</a>
                        <ul className="-sub-category">
                          <li><a className="dropdown-item" href="/category/pants/">PANTS</a></li>
                          <li><a className="dropdown-item" href="/category/denim/">DENIM</a></li>
                          <li><a className="dropdown-item" href="/category/slacks/">SLACKS</a></li>
                          <li><a className="dropdown-item" href="/category/shorts/">SHORTS</a></li>
                          <li><a className="dropdown-item" href="/category/skirt/">SKIRT</a></li>
                        </ul>
                      </li>
                      <li data-param="?cate_no=27" className="depth1 xans-record-">
                        <a className="dropdown-item" href="/product/?category=shoenbag">SHOES / BAG</a>
                        <ul className="-sub-category">
                          <li><a className="dropdown-item" href="/category/shoes/">SHOES</a></li>
                          <li><a className="dropdown-item" href="/category/bag/">BAG</a></li>
                        </ul>
                      </li>
                      <li data-param="?cate_no=28" className="depth1 xans-record-">
                        <a className="dropdown-item" href="/product/?category=acc">ACC</a>
                        <ul className="-sub-category">
                          <li><a className="dropdown-item" href="/category/jewelry/">JEWELRY</a></li>
                          <li><a className="dropdown-item" href="/category/hat/">HAT</a></li>
                          <li><a className="dropdown-item" href="/category/belt/">BELT</a></li>
                          <li><a className="dropdown-item" href="/category/etc/">ETC</a></li>
                          <li><a className="dropdown-item" href="/category/muffler/">MUFFLER</a></li>
                          <li><a className="dropdown-item" href="/category/glass/">GLASS</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="ml-5">
            <li>
              <div className="-all">
                <h3>BOARD</h3>
                <div className="xans-element- xans-layout xans-layout-boardinfo">
                  <p className="xans-record-"><a className="dropdown-item" href="/board/notice/1/">NOTICE</a></p>
                  <p className="xans-record-"><a className="dropdown-item" href="/board/qa/6/">Q&amp;A</a></p>
                  <p className="xans-record-"><a className="dropdown-item" href="/board/faq/3/">FAQ</a></p>
                  <p className="xans-record-"><a className="dropdown-item" href="/board/review/4/">REVIEW</a></p>
                  <p className="xans-record-"><a className="dropdown-item" href="/board/event/8/">EVENT</a></p>
                </div>
              </div>
            </li>

            <li>
              <div className="-all">
                <h3>MEMBERSHIP</h3>
                <div className="xans-element- xans-layout xans-layout-statelogoff "><a className="dropdown-item" href="/member/login.html">로그인</a>
                  <a className="dropdown-item" href="/member/join.html">회원가입</a>
                  <a className="dropdown-item" href="/order/basket.html">장바구니 <span className="count  EC-Layout_Basket-count-display">(<span className="EC-Layout-Basket-count">0</span>)</span></a>
                </div>
              </div>
            </li>

            <li>
              <div className="-all">
                <h3>MY PAGE</h3>
                <p><a className="dropdown-item" href="/myshop/order/list.html">주문내역조회</a></p>
                <p><a className="dropdown-item" href="/myshop/wish_list.html">관심상품</a></p>
                <p><a className="dropdown-item" href="/myshop/mileage/historyList.html">적립금내역</a></p>
                <p><a className="dropdown-item" href="/myshop/coupon/coupon.html">쿠폰내역조회</a></p>
                <p><a className="dropdown-item" href="/myshop/board_list.html">게시물관리</a></p>
                <p><a className="dropdown-item" href="/myshop/addr/list.html">배송주소록관리</a></p>
              </div>
            </li>

            <li>
              <div className="-all">
                <h3>C/S CENTER</h3>
                <h4>전화번호-번화번호</h4>
                <p>MON-FRI / am11:00-pm6:00</p>
                <p>OFF TIME / pm1:00-pm2:00</p>
                <p>DAY OFF ( SAT/SUN/HOLIDAY )</p>
              </div>
            </li>

            <li>
              <div className="-all">
                <h3>BANK ACCOUNT</h3>
                <p>국민 ㅁㅁㅁㅁㅁㅁ</p>
                <p>예금주:ㅁㅁㅁㅁㅁ</p>
              </div>
            </li>

            <li>
              <div className="-all">
                <h3>[교환/반품 주소]</h3>
                <p>서울특별시</p>
                <p>a</p>
                <u>* 공지사항 및 이용안내를 참고하여 지정택배사로 반품요청해주세요.</u>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

const openCategory = () => {
  console.log('open Category');
}
const closeCategory = () => {
  console.log('close Category Button Clicked');
}

export default topNavbar;
