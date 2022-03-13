import { IExperience } from '../component/experience/IExperience';
import interpark from '../asset/interpark.jpg';
import niceinfo from '../asset/niceinfo.jpg';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '인터파크',
      image: interpark,
      position: 'Software Enginner (서비스인프라실 공통플랫폼팀)',
      startedAt: '2020-12',
      descriptions: [
        '인터파크 서비스인프라실 공통플랫폼팀',
        '공통 서비스 구축',
        '사내 프레임워크 표준화',
        'API 관리 플랫폼 개발',
      ],
      skillKeywords: [
        'JAVA 11',
        'JS',
        'Spring Boot',
        'Spring Batch',
        'Spring Hateoas',
        'Spring Security',
        'Zipkin',
        'JUIT5',
        'JPA',
        'MyBaits',
        'Redis',
        'MySQL',
        'Elasticsearch',
        'Logstash',
        'Filebeat',
        'Kibana',
        'Nginx',
        'Docker',
        'Vue.js',
        'Linux',
        'Scouter',
        'Pinpoint',
        'Grafana',
        'Prometheus',
      ],
    },
    {
      title: '나이스평가정보',
      image: niceinfo,
      position: 'Software Enginner (CB개발실 CB개발팀)',
      startedAt: '2019-02',
      endedAt: '2020-11',
      descriptions: [
        '나이스평가정보 CB개발실 CB개발팀에서 나이스크레딧 플랫폼 프론트엔트, 백엔드 개발업무',
        '나이크크레딧 홈페이지 개발',
        '나이스크레딧 플랫폼 개발 및 유지보수',
        '오라클 DB작업 및 쿼리 최적화',
        '프론트엔드 및 백엔드 개발',
      ],
      skillKeywords: [
        'JAVA 8,',
        'JS',
        'SpringFramework',
        'MyBaits',
        'Miplatform & Nexacropatform',
        'DevOn C Framework',
        'Oracle',
        'Linux',
      ],
    },
  ],
};

export default experience;
