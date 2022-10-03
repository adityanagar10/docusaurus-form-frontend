export default function updateAction(state, payload) {
    return {
      ...state,
      data: {
        ...state.data,
        ...payload.data
      },
      currentThirdLevelNav: payload.currentThirdLevelNav,
      currentThirdLevelNavPages: payload.currentThirdLevelNavPages,
      currentPage: payload.currentPage,
      nextThirdLevelNav: payload.nextThirdLevelNav,
      prevThirdLevelNav: payload.prevThirdLevelNav,
    };
  }
  