import { WorkCaseProps } from './types/WorkCaseProps';
import grayMockup from './assets/gray-mockup.jpg';

export const UrlMap = {
  AboutMe: '/about',
  LandingPage: '/',
  Work: '/work',
}

// TODO [Dmitriy] - change activities
export const activities = [
  'Android (Java, Kotlin)',
  'Retrofit',
  'Firebase',
  'Python: basics',
  'C: basics',
  'Algorithms, data structs',
  'Git, Github',
  'OOP principles',
  'Design patterns'
];

export const workCasesImages: Record<string, string> = {
  grayMockup,
};

export const workCases: WorkCaseProps[] = [
  {
    title: 'Animal Zoo Mobile App — 2019',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    image: 'grayMockup',
    link: 'https://github.com/dee-tree',
  },
  {
    title: 'We Days — 2022',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    image: 'grayMockup',
    link: 'https://github.com/dee-tree',
  },
  {
    title: 'KSMT — 2023',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    image: 'grayMockup',
    link: 'https://github.com/dee-tree',
  },
];
