_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"0stj":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multitool",function(){return t("AoAU")}])},AoAU:function(n,e,t){"use strict";t.r(e);var o=t("q1tI"),c=t.n(o),a=t("WSYU"),s=t("apO0"),r=t("IujW"),i=t.n(r),l=c.a.createElement;e.default=function(){return l(s.a,{isLoggedIn:!1,currentPage:"multitool"},l("div",{className:"container"},l(a.a,{title:"MULTITOOL"}),l("div",{className:"row mt-5 mb-5"},l("div",{className:"col-12 col-md-8 offset-md-2"},l("div",{className:"card bg-dark text-white"},l("div",{className:"card-header text-center"},l("h1",null,"Multitool API")),l("div",{className:"card-body"},l("span",{className:"text-justify font_18"},l(i.a,{source:"\n## Multitool ?\n\n- \uadc0\uc0ac\uc758 Docker\ub97c \uc774\uc6a9\ud558\uc5ec \ubc30\ud3ec/\ud639\uc740 \ud14c\uc2a4\ud2b8\uc6a9 \uc11c\ubc84\uc758\n\n  **\uc5c5\ub370\uc774\ud2b8 / \uc7a5\uc560 \uc54c\ub9bc / \uc11c\ube44\uc2a4 \uacf5\uaca9 \ud0d0\uc9c0** \uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud558\uc5ec\n\n  **\uce74\uce74\uc624\ud1a1 / \uba54\uc138\uc9c0 / \uc804\ud654** \ub4f1\uc73c\ub85c \uc218\uc2e0\ud574\ubcf4\uc2e4\uc218 \uc788\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.\n\n  [DockerDeploy \ub3c4\ucee4\ud5c8\ube0c \ubc14\ub85c\uac00\uae30](https://hub.docker.com/repository/docker/shellcodesniper/healthchecker) \n\n- \ud574\ub2f9 \uc11c\ube44\uc2a4\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ubc30\ud3ec\uc6a9 \ucf54\ub4dc\ub294 \uc624\ud508\uc18c\uc2a4\ub85c \ub418\uc5b4\uc788\uc73c\uba70, \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud558\uc5ec\ub294 \ub808\ud3ec\ub97c \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n\n  [\uae43\ud5c8\ube0c \ub808\ud3ec \ubc14\ub85c\uac00\uae30](https://github.com/shellcodesniper/Docker_HealthChecker/)\n\n- **\ud604\uc7ac \uc548\uc815\ud654 \ubc0f \uc54c\ud30c \ud14c\uc2a4\ud2b8 \uc9c4\ud589\uc911**\uc73c\ub85c, \ud574\ub2f9 \uae30\uac04\ub3d9\uc548 \uc11c\ube44\uc2a4 \uc694\uae08\uc740 **\ubb34\ub8cc**\uc785\ub2c8\ub2e4.\n\n- \uba40\ud2f0\ud234 \uc11c\ube44\uc2a4 \ub3c4\uba54\uc778: `api.kuuwang.com` \uc73c\ub85c,\n\n  \uadc0\uc0ac\uc758 \uc11c\ube44\uc2a4 \ubc29\ud654\ubcbd\uc5d0\uc11c \ud574\ub2f9 \ub3c4\uba54\uc778\uc73c\ub85c\uc758 \uc811\uc18d\uc740 \ud5c8\uc6a9\ud574\uc8fc\uc154\uc57c \uc815\uc0c1 \uc774\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\n- \ud604\uc7ac '\ubb38\uc790\uba54\uc138\uc9c0' \uc640 '\uc804\ud654' \uc548\ub0b4 \uc11c\ube44\uc2a4\ub294 \uc815\uc0c1 \ub3d9\uc791 \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4.\n\n  \uc870\uc18d\ud788 \uce74\uce74\uc624\ud1a1 \uc54c\ub9bc \uc11c\ube44\uc2a4 \ud65c\uc131\ud654\ub97c \uc704\ud574 \ub178\ub825\ud558\uaca0\uc2b5\ub2c8\ub2e4.\n\n- \ud574\ub2f9 \uc11c\ube44\uc2a4 \ub4f1\ub85d \uc644\ub8cc\ud6c4, \ubc1b\uc544\ubcf4\uc2dc\uac8c \ub418\ub294 \uae30\ubcf8 \uba54\uc138\uc9c0 \ud0ec\ud50c\ub9bf\uc785\ub2c8\ub2e4. \ud0ec\ud50c\ub9bf \ubcc0\uacbd\uc740 \ucd94\ud6c4 \uad00\ub9ac\ud398\uc774\uc9c0\uc5d0\uc11c \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\n  ```\n  [Web\ubc1c\uc2e0]\n  SERVERNAME : STAGING_BACK IP : 3.34.***.50 \uc5d0\uc11c \uc774\ubca4\ud2b8 \ubc1c\uc0dd.\n  \ub0b4\uc6a9 : [SUPER ALERT] \ud574\ub2f9 \uc11c\ubc84\uc758 ROLLBACK/MASTER/SLAVE \uc804\ubd80 FAIL \uc785\ub2c8\ub2e4. \ube60\ub978 \ud655\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\n  ```\n"}))))))))}}},[["0stj",0,1,2,3]]]);