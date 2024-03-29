import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'JAVA',
      level: 3,
    },
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'Spring MVC',
      level: 3,
    },
    {
      title: 'Spring Security',
      level: 3,
    },
    {
      title: 'Spring Batch',
      level: 3,
    },
    {
      title: 'Spring Data JPA/Redis',
      level: 3,
    },
    {
      title: 'Spring HATEOAS',
      level: 3,
    },
    {
      title: 'Spring Framework',
      level: 3,
    },
    {
      title: 'DevOn Framework',
      level: 3,
    },
    {
      title: 'JPA',
      level: 3,
    },
    {
      title: 'Querydsl',
      level: 3,
    },
    {
      title: 'Hibernate',
      level: 3,
    },
    {
      title: 'MyBaits',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Oracle',
      level: 3,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'HTML',
      level: 3,
    },
    {
      title: 'Miplatform',
      level: 3,
    },
    {
      title: 'Nexacropatform',
      level: 3,
    },
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'CSS',
      level: 2,
    },
    {
      title: 'React.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'ELK Stack',
    },
    {
      title: 'NGINX',
    },
    {
      title: 'Ubuntu',
    },
    {
      title: 'CentOS',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'Jeus',
    },
    {
      title: 'Apache',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Dcoker',
    },
    {
      title: 'Agile',
    },
    {
      title: 'VSCode',
    },
    {
      title: 'DevOps',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Kafka',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Scouter',
    },
    {
      title: 'Pinpoint',
    },
    {
      title: 'Grafana',
    },
    {
      title: 'Prometheus',
    },
    {
      title: 'Upsource',
    },
    {
      title: 'Selenium',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 경험',
};

export default skill;
