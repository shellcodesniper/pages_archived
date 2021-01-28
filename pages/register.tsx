import React, { FunctionComponent } from 'react';
import Layout from '@components/Layout';
import { InputText, InputTextArea, InputCheckBox } from '@components/utils/Common';

interface LoginPageProps {

};

const LoginPage:FunctionComponent<LoginPageProps> = (_props: LoginPageProps) => {
  // const [ userEmail, userPasswd ] = useState('');

  return (
  <Layout isLoggedIn={false} currentPage='register'>
    <div className="container">
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="row">
        <div className="col-md-6 col-12 offset-md-3">
          <div className="card bg-dark">
            <form method="post" action="/api/register">
              <InputText type="text" id="name" labelText="성함" helpText="성함을 국문 혹은 영문으로 입력해주시기 바랍니다." />
              <InputText type="text" id="apiKey" labelText="apiKey" helpText="DockerDeploy에서 발급받은 apiKey를 입력해주시기 바랍니다." />
              <InputTextArea id="description" labelText="사용목적 및 남길말" helpText="사용목적을 간단하게 작성해주시기 바랍니다." />
              <InputTextArea id="registerPn" showRowNumber={2} labelText="전화번호등록" helpText="서버 알림 메세지를 수신받을 번호를 한줄에 하나씩 작성해주시기 바랍니다." />
              <InputText type="text" id="receiveNum" labelText="연락처" helpText="사용등록 완료시 연락받을 연락처를 작성해주시기 바랍니다." />
              <InputCheckBox id="agree" labelText="개인정보 수집동의"/>

              <div className="mt-5 mb-3 px-3 row">
                <div className="col-12">
                  <button type="button" className="btn btn-primary w100" onClick={()=>{location.href='/'}}>등록</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>

    </div>
  </Layout>
  )
}

export default LoginPage;