import React, { useState, useEffect, FunctionComponent } from 'react';
import { MainProductComponent } from '@components/Product/Product';
import Layout from '@components/Layout';


interface LoginPageProps {

};

const LoginPage:FunctionComponent<LoginPageProps> = (props: LoginPageProps) => {
  const [ userEmail, userPasswd ] = useState('');

  return (
  <Layout>
    <div className="container">
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="row">
        <div className="col-md-6 col-12 offset-md-3">
          <div className="card">
            <form method="post" action="/api/member/login">
              <div className="mb-1 mt-3 px-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">개인정보는 암호화되어 전송됩니다.</div>
              </div>
              <div className="mb-5  px-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" />
              </div>
              <div className="mb-3 px-3 row">
                <div className="col-12 col-md-5">
                  <button type="submit" className="btn btn-yul w100">로그인</button>&nbsp;
                </div>
                <div className="col-12 col-md-5 offset-md-2">
                  <button type="button" className="btn btn-secondary w100" onClick={()=>{location.href='/member/register'}}>회원가입</button>
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