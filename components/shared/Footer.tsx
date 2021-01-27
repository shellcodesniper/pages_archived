import { FunctionComponent } from 'react';
import style from '@stylesheets/footer.module.css'

interface FooterPropsInterface {

};

interface FooterDivPropsInterface {
  title: string;
  children: React.ReactNode;
}

const FooterDiv: FunctionComponent<FooterDivPropsInterface> = (props: FooterDivPropsInterface) => {
  return (
    <div className="col-12 col-md-3 pb-1">
      <div className="card w100h100">
        <div className="card-body">
          <h5 className="card-title font_12 font_bold">{props.title}</h5>
          {props.children}
        </div>
      </div>
    </div>
  )
};

const Footer: FunctionComponent<FooterPropsInterface> = (props: FooterPropsInterface) => {
  const openBusinessInfo: any = () => {
    window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no={사업자등록번호-제거}', 'bizCommPop', 'width=750, height=950;');
    return false;
  }

  return (
    <div className={style.footerBG}>
      <footer className="footer py-4 mt-auto">
        <div className="container-fluid">
          <div className="row">
            <FooterDiv title="Company">
              <span className="card-text font_11">
                owner. 김율 tel. 010-8139-3214<br />
                사업자 등록번호. 000-00-00000 mail order license. 2020-서울강남-02498호
                <br />
                <a href="#none" onClick={openBusinessInfo}>[사업자정보확인]</a><br />
                개인정보 처리담당자. 김도균 (admin@kuuwang.com)<br />
                address. [우편번호] 주소<br />
              </span>
              <h6 className="card-subtitle mb-2 text-muted font_11">copyright © THEANNE all rights reserved / published by plain design</h6>
            </FooterDiv>

            <FooterDiv title="C/S CENTER">
              <span className="card-text">
                <h5>010-8139-3214</h5>
              </span>
              <span className="card-text font_11">
                MON-FRI / am11:00-pm6:00<br />
                OFF TIME / pm1:00-pm2:00<br />
                DAY OFF (SAT/SUN/HOLIDAY)
              </span>
            </FooterDiv>
            <FooterDiv title="ACCOUNT">
              <span className="card-text font_12">
                국민 11111111<br />
                예금주: ㅁㅁㅁㅁ <br />
                <br />
                <select className="form-select" onChange={() => {if((this as any).value) window.open((this as any).value);}}>
                  <option value="">인터넷뱅킹 바로가기&nbsp;&nbsp; </option>
                  <option value="https://www.kbstar.com/">&nbsp;국민은행</option>
                  <option value="http://www.epost.go.kr/main.retrieveMainPage.comm">&nbsp;우체국</option>
                  <option value="http://www.nonghyup.com/Main/main.aspx">&nbsp;NH농협</option>
                  <option value="http://www.standardchartered.co.kr/np/kr/Intro.jsp">&nbsp;SC제일은행</option>
                  <option value="https://www.wooribank.com/">&nbsp;우리은행</option>
                  <option value="https://www.ibk.co.kr/">&nbsp;IBK기업은행</option>
                  <option value="https://www.kebhana.com/">&nbsp;KEB하나은행</option>
                  <option value="https://www.shinhan.com/index.jsp">&nbsp;신한은행</option>
                  <option value="https://pib.kjbank.com/ib20/mnu/BPB0000000001">&nbsp;광주은행</option>
                  <option value="https://www.dgb.co.kr/dgb_ebz_main.jsp">&nbsp;대구은행</option>
                  <option value="https://www.jbbank.co.kr/">&nbsp;전북은행</option>
                  <option value="https://www.busanbank.co.kr/">&nbsp;부산은행</option>
                  <option value="https://www.citibank.co.kr/ComMainCnts0100.act">&nbsp;한국씨티은행</option>
                  <option value="https://www.e-jejubank.com/JeJuBankInfo.do">&nbsp;제주은행</option>
                  <option value="https://www.knbank.co.kr/ib20/mnu/BHP000000000001">&nbsp;경남은행</option>
                </select>
              </span>
            </FooterDiv>

            <FooterDiv title="[교환/반품 주소">
              <span className="card-text font_11">
                주소: 제주도 제주시 제주동 제주1-111<br />
                자세한 주소주소주소 <br />
                <br />
                <br />
                <u>* 공지사항 및 이용안내를 참고하여 지정택배사로 반품요청해주세요. *</u>
              </span>
            </FooterDiv>

          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </div>
  )
}

export default Footer;