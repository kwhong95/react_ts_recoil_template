import { atom } from 'recoil';

export type LoadingCollectionType = Record<string, string>;

export const loadingState = atom({
  key: 'loaingState',
  default: {} as LoadingCollectionType,
});