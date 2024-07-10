"use client";

import React from "react";

import TabsProvider from "./TabsContext";

type TabsProps = {
  children: React.ReactNode;
};

type TabsWrapper = (props: TabsProps) => React.ReactNode;

const Tabs: TabsWrapper = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};
export default Tabs;
