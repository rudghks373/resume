import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '배치(Batch) 관리 플랫폼 개발',
      startedAt: '2020-12',
      where: '인터파크',
      descriptions: [
        {
          content: '배치 관리 플랫폼 프론트엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vue.js 프레임워크 사용' },
            { content: '오픈소스 CoreUI 으로 구성' },
          ],
        },
        {
          content: '배치 관리 플랫폼 백엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'SpringBoot 기반 Rest API 개발' },
            { content: 'MyBatis -> JPA ORM 전환 작업' },
          ],
        },
        {
          content: '배치 가이드 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'SpringBatch 기반으로 배치 관리 플랫폼에서 사용할 어플리케이션 가이드 개발',
            },
          ],
        },
        {
          content: 'APM(모니터링) 및 알림 도입',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Prometheus & Grafana을 사용하여 구성' }],
        },
        {
          content: '로그데이터 수집 및 시각화',
          weight: 'MEDIUM',
          descriptions: [{ content: 'ELK 스택을 이용하여 로깅 수집 및 시각화' }],
        },
        {
          content: 'Docker & NGINX 서버 설정 및 HA 구성',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Docker & NGINX 서버 설정과, 로드밸런싱 및 HA 구성' }],
        },
      ],
    },
    {
      title: 'API 관리 플랫폼 개발',
      startedAt: '2020-12',
      where: '인터파크',
      descriptions: [
        {
          content: 'Add Foo Feature in 2019',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'CI/CD 설계 및 개발' },
            { content: 'NGINX 서버 설정 upstream 및 SSL 설정' },
          ],
        },
      ],
    },
    {
      title: '데이터 추출 시스템 운영 및 리팩토링',
      startedAt: '2020-12',
      where: '인터파크',
      descriptions: [
        {
          content: '데이터 추출 시스템 운영 및 수정 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '레거시 및 불필요한 코드 조사 및 청산' },
            { content: '하루 약 100건 이샹 요청 (데이터 추출양은 수천~수십만건)' },
          ],
        },
        {
          content: '데이터 추출 성능 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'insert 를 한건씩 excuteUpdate 하고 있어서 속도 저하 발생' },
            { content: 'insert builk' },
          ],
        },
        {
          content: '리버스 엔지니어링',
          weight: 'MEDIUM',
          descriptions: [{ content: 'DB 리버스 ER 모델링 진행' }, { content: 'DA# 사용' }],
        },
      ],
    },
    {
      title: '단축URL 서비스 리팩토링',
      startedAt: '2021-11',
      endedAt: '2022-03',
      where: '인터파크',
      descriptions: [
        {
          content: 'SpringBoot로 프레임워크 전환',
          weight: 'MEDIUM',
          descriptions: [{ content: '구형 스프링프레임워크 버전에서 전환' }],
        },
        {
          content: 'APM(모니터링) 및 알림 도입',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Prometheus & Grafana을 사용하여 구성' }],
        },
        {
          content: '로그데이터 수집 및 시각화',
          weight: 'MEDIUM',
          descriptions: [{ content: 'ELK 스택을 이용하여 로깅 수집 및 시각화' }],
        },
      ],
    },
    {
      title: '사내 JIRA 시스템 자동화 도구 개발',
      startedAt: '2020-07',
      endedAt: '2022-08',
      where: '인터파크',
      descriptions: [
        {
          content: 'JIRA ISSUE 화면 캡처 자동화 도구',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '회계 감사 시, Jira Issue를 일일이 손으로 화면캡처 해야하는 에러 사항 존재',
            },
            {
              content:
                'Jira Query Language를 통해 검색된 Jira Issue 들을 자동화 캡처 어플리케이션 개발',
            },
          ],
        },
      ],
    },
    {
      title: '나이스 크레딧 플랫폼 서비스 개발',
      startedAt: '2019-02',
      endedAt: '2020-11',
      where: 'NICE평가정보',
      descriptions: [
        {
          content: '나이스크레딧 차세대 시스템 전환',
          weight: 'MEDIUM',
          descriptions: [
            { content: '스트럿츠(Struts) -> 전자정부프레임워크(스프링프레임워크) 전환 작업' },
            { content: 'Miplatform -> Nexacropatform 전환 작업' },
            { content: '레거시 및 불필요한 코드 조사 및 청산' },
          ],
        },
        {
          content: '전자 압류 및 추심 서비스',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '전자 압류 및 수심 서비스를 1건씩 신청하고 있어서, 다 건으로 개발 할 수 있도록 아이디어 제시',
            },
            { content: '전자 압류 및 추심 서비스를 다건으로 신청할 수 있는 서비스 개발' },
            { content: '하루 약 1,000~2,000건 신청 (건당 5,000원 매출)' },
          ],
        },
        {
          content: '압류관리정보 통합관리 서비스',
          weight: 'MEDIUM',
          descriptions: [{ content: '압류정보를 통합적으로 관리할 수 있는 시스템 개발' }],
        },
        {
          content: '신용보고서 및 신용스코어 서비스',
          weight: 'MEDIUM',
          descriptions: [{ content: '사업부 요구에 따라 신용보고서 및 신용스코어 서비스 개발' }],
        },
      ],
    },
    {
      title: '서버 로그 통합 시스템 개발',
      startedAt: '2020-08',
      endedAt: '2020-11',
      where: '나이스평가정보',
      descriptions: [
        {
          content: '전사 시스템 통합 로그 프로젝트에 참여',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Filebeat & Logstash를 활용해 각 시스템 로그들을 수집 및 가공하여 Kafka로 수집',
            },
            { content: 'Kafka Consumer API를 통해 수집된 로그들을 로그 통합 시스템에 적재' },
            { content: '초당 10,000건 이상 대용량 데이터 수집 및 적재 처리' },
          ],
        },
      ],
    },
    {
      title: '사내 메일 배치 서비스 개발',
      startedAt: '2019-07',
      endedAt: '2019-09',
      where: '나이스평가정보',
      descriptions: [
        {
          content: '사내 전사 메일 발송 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: '자바 어플리케이션기반으로 하루 평균 1000건이상 발송' }],
        },
      ],
    },
  ],
};

export default project;
