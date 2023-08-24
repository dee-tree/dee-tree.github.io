import { WorkCaseProps } from './types/WorkCaseProps';
import grayMockup from './assets/gray-mockup.jpg';
import gradientMockup from './assets/gradient-mockup.jpg';
import pinkWhiteMockup from './assets/pink-white-mockup.jpg';

// keep track of the proportions (4500 x 3000) of the photos, so that they are not cropped

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
  grayMockup, gradientMockup, pinkWhiteMockup
};

// TODO [Dmitriy] - change work cases
export const workCases: WorkCaseProps[] = [
  {
    title: 'Animal Zoo Mobile App — 2019',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    images: ['grayMockup', 'gradientMockup', 'pinkWhiteMockup'],
    link: 'https://github.com/dee-tree',
  },
  {
    title: 'We Days — 2022',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    images: ['pinkWhiteMockup', 'gradientMockup'],
    link: 'https://github.com/dee-tree',
  },
  {
    title: 'KSMT — 2023',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    images: ['gradientMockup'],
    link: 'https://github.com/dee-tree',
  },
];
