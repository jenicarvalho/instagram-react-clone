import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <TimeLine />
        <Sidebar />
      </Container>
    </>
  );
}
