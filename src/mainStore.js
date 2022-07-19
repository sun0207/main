import { initGlobalState } from "qiankun";

const state = {
  user: {
    id: 1111,
    name: "测试的",
  },
};

// 初始化 state
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();
