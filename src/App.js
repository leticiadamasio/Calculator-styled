import React, { Component } from "react";
import styled from "styled-components"

const Container = styled.div `
  background-color:#800000;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Titles = styled.div`
 display: flex;
 flex-direction: column;
 position: absolute;
 margin-bottom: 15%;
 align-items: center;
 height: 25%;
 width: 30%;
`

const H1 = styled.h1 `
  color:white;
  font-size: 7.25vh;
`

const H2 = styled.h2 `
  color: white;
  font-size: 4vh;
  position:relative;
  bottom:6vh;
`

const ContainerInputs = styled.div` 
  display: flex;
  flex-direction: center;
  align-items: center;
`

const Numbers = styled.input`
  border: none;
  margin: 10px;
  padding: 12px;
`

const Buttons = styled.button`
  font-size: 4vh;
  border: none;
  padding: 8px;
  margin: 0.2em;
  margin-top: 6.5px;
  height: 6.5vh;
  background-color:white;
`

export default class Calculator extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  }
  
  handleChange1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    })
  }

  handleChange2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    })
  }

  div = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 / n2
    })
   } else {
     this.setState({
      res: "undefined value."
     })
   }
  }


  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 * n2
    })
   } else {
     this.setState({
      res: "undefined value."
     })
   }
  }


  sub = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 - n2
    })
   } else {
     this.setState({
      res: "undefined value."
     })
   }
  }


  soma = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
    this.setState({
      res: n1 + n2
    })
   } else {
     this.setState({
      res: "undefined value."
     })
   }
  }
  
  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: null,
        n1: "",
        n2: ""
      });
    } else {
      this.setState({
        res: "undefined value."
      })
    }
  }

  render() {
    return (
      <Container>
      <Titles>
        <H1>Calc App</H1>
        <H2>Result: {this.state.res}</H2>
      </Titles>
      <ContainerInputs>
        <Numbers value={this.state.n1} type="number" onChange={this.handleChange1} />
        <Numbers value={this.state.n2} type="number" onChange={this.handleChange2} />
        <Buttons onClick={this.div}>/</Buttons>
        <Buttons onClick={this.mult}>*</Buttons>
        <Buttons onClick={this.sub}>-</Buttons>
        <Buttons onClick={this.soma}>+</Buttons>
        <Buttons onClick={this.clear}>Clear</Buttons>
      </ContainerInputs>
      </Container>
    );
  }
 }

