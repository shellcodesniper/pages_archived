import React from 'react';
import GreyDivider from '@components/common/GreyDivider';
import Layout from '@components/Layout';
import ReactMarkdown from 'react-markdown';

const multitool_readme: string = `
## Multitool ?

- 귀사의 Docker를 이용하여 배포/혹은 테스트용 서버의

  **업데이트 / 장애 알림 / 서비스 공격 탐지** 이벤트를 수신하여

  **카카오톡 / 메세지 / 전화** 등으로 수신해보실수 있는 서비스입니다.

  [DockerDeploy 도커허브 바로가기](https://hub.docker.com/repository/docker/shellcodesniper/healthchecker) 

- 해당 서비스에 사용되는 배포용 코드는 오픈소스로 되어있으며, 사용법에 대하여는 레포를 참고하시기 바랍니다.

  [깃허브 레포 바로가기](https://github.com/shellcodesniper/Docker_HealthChecker/)

- **현재 안정화 및 알파 테스트 진행중**으로, 해당 기간동안 서비스 요금은 **무료**입니다.

- 멀티툴 서비스 도메인: \`api.kuuwang.com\` 으로,

  귀사의 서비스 방화벽에서 해당 도메인으로의 접속은 허용해주셔야 정상 이용 가능합니다.

- 현재 '문자메세지' 와 '전화' 안내 서비스는 정상 동작 하고있습니다.

  조속히 카카오톡 알림 서비스 활성화를 위해 노력하겠습니다.

- 해당 서비스 등록 완료후, 받아보시게 되는 기본 메세지 탬플릿입니다. 탬플릿 변경은 추후 관리페이지에서 가능합니다.

  \`\`\`
  [Web발신]
  SERVERNAME : STAGING_BACK IP : 3.34.***.50 에서 이벤트 발생.
  내용 : [SUPER ALERT] 해당 서버의 ROLLBACK/MASTER/SLAVE 전부 FAIL 입니다. 빠른 확인이 필요합니다.
  \`\`\`
`

const IndexPage = () => {
  return (
  <Layout isLoggedIn={false} currentPage={'multitool'}>
    <div className="container">
      <GreyDivider title="MULTITOOL" />

      <div className="row mt-5 mb-5">
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

    </div>
  </Layout>
  )
}

export default IndexPage;