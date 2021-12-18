import { atom } from "recoil";

export default atom<number>({
  key: "CurrentSection",
  default: 0,
});
