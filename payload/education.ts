import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '삼육대학교',
      subTitle: '컴퓨터학부 소프트웨어전공 학사 졸업',
      startedAt: '2013-03',
      endedAt: '2019-02',
    },
    {
      title: '동국대학교사범대학부속고등학교',
      subTitle: '이공계 졸업',
      startedAt: '2010-03',
      endedAt: '2013-02',
    },
  ],
};

export default education;
