import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '오경환',
    small: '(Oh KyungHwan)',
  },
  contact: [
    {
      title: 'rudghks373@naver.com',
      link: 'mailto:﻿rudghks373@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/rudghks373',
      link: 'https://github.com/rudghks373',
      icon: faGithub,
    },
    {
      title: 'instagram/kyunghwan_0',
      link: 'https://www.instagram.com/kyunghwan_0/',
      icon: faInstagram,
    },
  ],
  notice: {
    title: '이메일이나 인스타그램 DM으로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
