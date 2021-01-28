import React, { FunctionComponent } from 'react';
import InLineScript from '@components/common/InLineScript'
import GreyDivider from '@components/common/GreyDivider';
import Layout from '@components/Layout';

const IndexPage = () => {
  const repeatCount = 8;
  const hackRepeat = [];
  for (let i = 0; i < repeatCount; i += 1) hackRepeat.push(i);
  return (
  <Layout isLoggedIn={false} currentPage='about'>
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <img className="img-fluid mb-5" src="/static/images/profile.png"></img>
        </div>
      </div>

      <GreyDivider title="WHO AM I" />

      <div className="row mt-1 mb-5">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="card bg-dark text-white">
            <div className="card-header text-center" >
              <h1>KUUWANG</h1>
            </div>
            <div className="card-body">
              <span className="text-justify">
                <h3 className="text-center">스택</h3>
                <p>FULLSTACK + DevOps</p>
                <hr />
                <h3 className="text-center">Work Experience</h3>
                <br />
                <p>Work at Caramella (south korea) [2016-2021(current)] </p>
                <hr />
                <h3 className="text-center">Personal Project</h3>
                <br />
                <span>
                  api.kuuwang.com &nbsp;
                  kuuwang.com &nbsp;
                  주식 자동 트레이딩 &nbsp;
                  sandmood.com &nbsp;
                </span>
                <hr />
                <h3 className="text-center">GITHUB / LINKEDIN</h3>
                <br />
                <h2 className="text-center">
                  <a className="mr-4" href="https://github.com/shellcodesniper/"><i className="fab fa-github text-white"></i></a>&nbsp;
                  <a href="https://www.linkedin.com/in/도균-김-b8808414a/"><i className="fab fa-linkedin-in"></i></a>
                </h2>
              </span>
            </div>
          </div>
        </div>
      </div>

      <GreyDivider title="OUR SERVICES" />

      <div className="row mt-1 mb-5">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="card bg-dark text-white">
            <div className="card-header text-center">
              <h1>Kuuwang - Multitool API ?</h1>
            </div>
            <div className="card-body">
              <span className="text-justify font_18">
                Mobile Push Notification / Sending Point / Product Management / Member Management 등 여러가지 기능들이 모여있는 집합체로서의 역할을 합니다.
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
      </div>

      <GreyDivider title="INSTAGRAM" />
      
      <InstagramDiv username="kuuwange"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/InstagramFeed/1.5.4/InstagramFeed.min.js"></script>
    </div>
  </Layout>
  )
}

interface InstagramProps {
  username: string;
};

const InstagramDiv: FunctionComponent<InstagramProps> = (props: InstagramProps) => {
  const inlineScript = `new InstagramFeed({
    'username': '${props.username}',
    'container': document.getElementById("instagram-feed"),
    'display_profile': false,
    'display_biography': false,
    'display_gallery': true,
    'display_captions': false,
    'callback': null,
    'styling': true,
    'items': 12,
    'items_per_row': 6,
    'margin': 1
  });`;

  return (
    <div className="row mb-5">
      <div className="card bg-dark text-white py-3 w100">
        <div className="card-body">
          <div className="card-text">
            <InLineScript script={inlineScript}/>
            <div id="instagram-feed"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;