import React from "react";
import { Home } from './src/Pages/Home'

import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar animated={true} barStyle='light-content' />
      <Home />
    </>
  )
}
