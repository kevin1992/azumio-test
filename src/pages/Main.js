import React from 'react';
import {Column} from "../core/layout/Column";
import {Row} from "../core/layout/Row";
import MainAreasButtons from "../core/components/MainAreasButtons";
import FooterButton from "../core/components/FooterButton";
import Dot from "../core/components/Dot";
import Div100vh from 'react-div-100vh'


const Main = props => {
  return (
  <Div100vh>
    <Column height={"100%"} center>
      <Row width={"80%"} flex={1} center marginTop={30}>
        <Column textCenter>
          <h1>What are you main <br/>areas of focus?</h1>
          <h3>This will help us build a personalized <br/>experience for you</h3>
          <MainAreasButtons/>
        </Column>
      </Row>
      <Row marginBottom={30} width={"80%"}>
        <Row><FooterButton><b>BACK</b></FooterButton></Row>
        <Row middle center flex={1}>
          <Dot/>
          <Dot/>
          <Dot/>
          <Dot/>
          <Dot active/>
        </Row>
        <Row><FooterButton active><b>DONE</b></FooterButton></Row>


      </Row>

    </Column>
  </Div100vh>
  );
};
export default Main;
