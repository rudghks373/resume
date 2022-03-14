import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Java & Spring 기반의 만 3년 차 개발자로 웹 서비스를 개발/배포/운영하였습니다. 주로 웹 개발을 담당했으며 기존 레거시 프로젝트 운영과 리팩토링 경험이 많고, 항상 최신의 기술이 옳다고 여기지 않지만. 상황에 따라 적절한 새로운 기술을 도입하기 위해 노력하였습니다.',
    '서비스 개발은 결국 개발과 비즈니스와의 커뮤니케이션이 가장 중요하다고 생각하고 있습니다. 커뮤니케이션은 적은 것보다는 많은 게 좋다고 생각하며, 직위 및 포지션에 관계없이 적극적으로 생각을 표현합니다. 회사 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를 적극적으로 합니다.',
    '코드 리뷰나 테스트 코드 작성을 굉장히 중요하게 생각하고 있으며, 특히 코드 리뷰는 개발자 업무중에 중요한 요소로 생각하여 코드를 통한 커뮤니케이션을 좋아합니다.',
    '반복되는 일이나 비효율적인 프로세스를 개선하는 일을 좋아합니다. 운영팀에 단순 업무를 자동화 도구를 만들어 제공하였으며, 효율적인 운영 업무를 위해 모니터링과 로그데이터 수집 및 시각화 경험이 있습니다.',
    '관심 있는 분야에 대해서 지식과 경험을 쌓는 활동을 좋아합니다. 개발자는 창의적인 아이디어와 기술로 자주 변하는 트렌드들 속에서 주어진 문제 해결을 하는 직업이라고 생각합니다. IT 관련 새로운 기술을 익히거나, 개발 공부를 하며 스스로 성장하는 것을 느낍니다. 그것이 동기가 되고 성취감이 되어 스스로 성장하게 하는 것이 개발자에 가장 큰 매력이라고 생각합니다.',
  ],
  sign: 'kyughwan',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
