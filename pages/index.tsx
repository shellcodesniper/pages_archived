import React, { useState,FunctionComponent } from 'react';
import InLineScript from '@components/common/InLineScript'
import GreyDivider from '@components/common/GreyDivider';
import Layout from '@components/Layout';
import ReactMarkdown from 'react-markdown';

const multitool_readme: string = `
## Multitool 이란 ?

- 귀사의 Docker를 이용하여 배포/혹은 테스트용 서버의

  **업데이트 / 장애 알림 / 서비스 공격 탐지** 이벤트를 수신하여

  **카카오톡 / 메세지 / 전화** 등으로 수신해보실수 있는 서비스입니다.

  [DockerDeploy 도커허브 바로가기](https://hub.docker.com/repository/docker/shellcodesniper/healthchecker) 

- 해당 서비스에 사용되는 배포용 코드는 오픈소스로 되어있으며, 사용법에 대하여는 레포를 참고하시기 바랍니다.

  [깃허브 레포 바로가기](https://github.com/shellcodesniper/Docker_HealthChecker/)

- **현재 안정화 및 알파 테스트 진행중**으로, 해당 기간동안 서비스 요금은 **무료**입니다.

`

const IndexPage = () => {

  const repeatCount = 8;
  const hackRepeat = [];
  for (let i = 0; i < repeatCount; i += 1) hackRepeat.push(i);
  return (
  <Layout isLoggedIn={false} currentPage='/' >
    <div className="container">
      <GreyDivider title="OUR SERVICES" />

      <div className="row mt-1 mb-5">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="card bg-dark text-white">
            <div className="card-header text-center">
              <h1>Multitool API</h1>
            </div>
            <div className="card-body">
              <span className="text-justify font_18">
                <ReactMarkdown source={multitool_readme} />
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