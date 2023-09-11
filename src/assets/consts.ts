import { WorkCaseProps } from '../types/WorkCaseProps';
import grayMockup from './img/gray-mockup.jpg';
import gradientMockup from './img/gradient-mockup.jpg';
import pinkWhiteMockup from './img/pink-white-mockup.jpg';

// keep track of the proportions (4500 x 3000) of the photos, so that they are not cropped

export const speedOfHeaders = 40;

// TODO [Dmitriy] - add work case images
export const workCasesImages: Record<string, string> = {
  grayMockup, gradientMockup, pinkWhiteMockup
};

// TODO [Dmitriy] - change work cases
export const workCases: WorkCaseProps[] = [
  {
    id: '0',
    title: 'Animal Zoo Mobile App — 2019',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    images: ['grayMockup', 'gradientMockup', 'pinkWhiteMockup'],
    links: [/*github*/ 'https://github.com/dee-tree', /*playmarket*/ 'https://github.com/dee-tree'],
  },
  {
    id: '1',
    title: 'We Days — 2022',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    images: ['pinkWhiteMockup', 'gradientMockup'],
    links: ['https://github.com/dee-tree'],
  },
  {
    id: '2',
    title: 'KSMT — 2023',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, assumenda cum ea ex hic illo 
                  labore, laborum neque non omnis perferendis provident quibusdam quidem sapiente voluptatum! Aut, dolore.`,
    images: ['gradientMockup'],
    links: ['https://github.com/dee-tree'],
  },
];

// TODO [Dmitriy] - change activities (in ActivityAreas) and subactivities
export const activityAreas = [
  {
    area: 'Kotlin/Java', subareas: [
      'Kotlin/JVM',
      'Kotlin/Multiplatform',
      'Gradle',
      'JNI',
      'Java agent',
      'Ktor',
      'Coroutines',
      'Java Executors',
    ]
  },
  {
    area: 'Android', subareas: [
      'Android SDK',
      'MVP / MVVM',
      'Dagger2',
      'Hilt',
      'Coroutines',
      'Firebase',
      'Ktor',
      'Retrofit',
      'OkHttp',
      'Jetpack Compose / XML',
      'Android Jetpack',
      'Glide',
      'Gradle',
    ]
  },
  {
    area: 'Research', subareas: [
      'Language tooling/features',
      'Kotlin Coroutines profiler',
      'Software verification',
      'SMT solvers',
    ]
  }
];
