import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '해외호텔 API 개발',
      startedAt: '2022-08',
      where: '인터파크',
      descriptions: [
        {
          content: '해외호텔 공급사 연동 API 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '해외호텔 공급사(아고다,익스피디아,더비소프트등) 연동플랫폼 개발' },
            { content: 'SpringBoot Multi Module 프로젝트 + JPA 기반 REST API 개발' },
          ],
        },
        {
          content: '해외호텔 공통지역코드체계 API 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전사 공통적으로 사용할 지역코드 개발 (익스피디아 지역체계 사용)' },
          ],
        },
        {
          content: '해외호텔 상품 마크업(마진) 및 최종 요금 API 개발',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '해외호텔 어드민 플랫폼 차세대 전환 프로젝트',
      startedAt: '2022-04',
      where: '인터파크',
      descriptions: [
        {
          content: '해외호텔 어드민 플랫폼 차세대 전환 프로젝트',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'ASP.NET(닷넷) 기반의 레거시 해외호텔 어드민 프로젝트 -> 자바 기반(Spring Boot)의 차세대 프로젝트 개발',
            },
            {
              content:
                'DB프로시저 기반 서비스 로직 처리 -> 자바 애플리케이션 서비스 로직 처리로 전환',
            },
            { content: 'SpringBoot Multi Module 프로젝트 + JPA 기반 REST API 개발' },
            { content: '타임리프 템플릿 기반 Front-end 개발' },
          ],
        },
      ],
    },
    {
      title: '단축URL 서비스 리팩토링',
      startedAt: '2021-12',
      endedAt: '2022-01',
      where: '인터파크',
      descriptions: [
        {
          content: 'Nginx 서버 설정 및 HA 구성',
          weight: 'MEDIUM',
          descriptions: [{ content: '서버 이중화 및 로드밸런싱 작업' }],
        },
        {
          content: 'CI / CD 구축',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Docker + Jenkins를 이용하여 CI/CD 환경 구축' }],
        },
        {
          content: 'SpringBoot로 프레임워크 전환',
          weight: 'MEDIUM',
          descriptions: [
            { content: '구형 스프링프레임워크에서 SpringBoot로 전환' },
            { content: '레거시 코드 리팩토링 및 코드 공통화' },
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
          descriptions: [{ content: 'Logback + ELK 스택을 이용하여 로깅 수집 및 시각화' }],
        },
      ],
    },
    {
      title: '사내 JIRA 시스템 자동화 도구 개발',
      startedAt: '2021-07',
      endedAt: '2021-08',
      where: '인터파크',
      descriptions: [
        {
          content: 'JIRA ISSUE 화면 캡처 자동화 도구',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'JQL(Jira Query Language)를 통한 지라 이슈 데이터 자동화 추출 도구 개발',
            },
            {
              content: 'Java Selenium 크롤러 방식으로 지라 이슈 캡쳐 자동화 도구 개발',
            },
          ],
        },
      ],
    },
    {
      title: '배치(Batch) 관리 플랫폼 개발',
      startedAt: '2020-12',
      endedAt: '2022-04',
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
            { content: 'MyBatis -> JPA + Querydsl 전환 작업' },
          ],
        },
        {
          content: '배치 애플리케이션 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'SpringBatch 기반으로 배치 관리 플랫폼에서 사용할 배치 애플리케이션 개발',
            },
          ],
        },
        {
          content: 'CI / CD 구축',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Docker + Jenkins를 이용하여 CI/CD 환경 구축' }],
        },
        {
          content: 'APM(모니터링) 및 알림 도입',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Prometheus & Grafana을 사용하여 구성' }],
        },
        {
          content: '로그데이터 수집 및 시각화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Zipkin을 활용한 로그 트레이싱' },
            { content: 'Logback + ELK 스택을 이용하여 로깅 수집 및 시각화' },
          ],
        },
        {
          content: 'NGINX 서버 설정 및 HA 구성',
          weight: 'MEDIUM',
          descriptions: [{ content: 'NGINX 서버 설정 Upstream 및 SSL 설정구성, HA 구성' }],
        },
      ],
    },
    {
      title: '데이터 추출 시스템 운영 및 리팩토링',
      startedAt: '2020-12',
      endedAt: '2022-04',
      where: '인터파크',
      descriptions: [
        {
          content: '데이터 추출 시스템 운영 및 수정 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '레거시 및 불필요한 코드 조사 및 청산' },
            { content: '하루 데이터 추출양은 수천~수십만 건' },
          ],
        },
        {
          content: '데이터 추출 성능 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: '1건씩 -> 5000건씩 batch 처리로 성능 향상' },
            { content: '예외 처리 및 로그 데이터 수집으로 오류 모니터링 기능 추가' },
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
          descriptions: [
            { content: 'SMTP Protocol 기반 메일 시스템 개발' },
            { content: '자바 어플리케이션기반으로 하루 평균 1000건이상 발송' },
          ],
        },
      ],
    },
    {
      title: '나이스 크레딧 플랫폼 서비스 개발',
      startedAt: '2019-02',
      endedAt: '2020-11',
      where: '나이스평가정보',
      descriptions: [
        {
          content: '나이스크레딧 차세대 시스템 전환',
          weight: 'MEDIUM',
          descriptions: [
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
            { content: '하루 약 1,000~2,000건 신청 (건당 5,000원, 한달 약 1~2천만원 매출)' },
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
        {
          content: '나이스 크레딧 플랫폼 리팩토링 유지보수',
          weight: 'MEDIUM',
          descriptions: [{ content: '레거시 코드 리팩토링 및 코드 공통화' }],
        },
      ],
    },
  ],
};

export default project;
