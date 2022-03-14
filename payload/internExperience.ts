import { IinternExperience } from '../component/internExperience/IinternExperience';

const internExperience: IinternExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '삼육대학교 정보전산원',
      position: '국가근로장학생',
      startedAt: '2017-03',
      endedAt: '2019-02',
      descriptions: [
        '강의실 실시간 모니터링 시스템 설계, 학사관리시스템 관리 및 유지보수',
        '전산지원팀 전산기기 A/S 및 관리',
        '소프트웨어 업그레이드 및 설치, 프로그램 사용법 설명 기타 업무',
        '네트워크 관리 및 유지보수',
        '랜선 및 허브장비 설치 및 유지보수',
      ],
    },
    {
      title: '넥스모션(주)',
      position: '개발팀 인턴',
      startedAt: '2018-03',
      endedAt: '2018-06',
      descriptions: [
        '(주)넥스모션 인턴으로 메신저 플랫폼 기반의 인공지능 챗봇(Chatbot) 개발',
        '챗봇 플랫폼 UI/UX구상 및 개발(HTML, JS)',
        'SpringBoot 기반 웹 개발 및 DA 설계',
        '실시간 위치기반 시스템을 위한 비콘 설치 및 연동 개발',
        '소프트웨어 테스트 및 유지보수',
      ],
      skillKeywords: ['JAVA 8,', 'JS', 'SpringBoot', 'MyBaits', 'DA#'],
    },
    {
      title: "학교 컴퓨터개발 동아리 'YAHAIT'",
      position: '개발 리더',
      startedAt: '2018-03',
      endedAt: '2019-02',
      descriptions: [
        '학교 컴퓨터학부 개발동아리 `YAHAIT` 에서 개발리더로 웹 개발 및 코딩 학습주도(자바,자바스크립트,파이썬등)',
        '웹/앱 애플리케이션 프로젝트 `거리 상점 결제 시스템` 프로젝트 수행 및 공모전 수상',
        '창업공모전 준비를 토대로 다양한 사업계획서 작성 및 준비',
      ],
    },
  ],
};

export default internExperience;
