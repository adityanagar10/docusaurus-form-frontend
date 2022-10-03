import React from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
// Default implementation, that you can customize


createStore({
    data: {},
    currentPage: 0,
    currentThirdLevelNav: "",
    currentThirdLevelNavPages: [],
    nextThirdLevelNav: "",
    prevThirdLevelNav: "",
  });

export default function Root({ children }) {


  return <StateMachineProvider>
    {children}
  </StateMachineProvider>;
}