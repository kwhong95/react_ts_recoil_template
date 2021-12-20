import { atom } from 'recoil';

const postDataState = atom({
  default: [],
  key: 'postData',
});

export default postDataState;