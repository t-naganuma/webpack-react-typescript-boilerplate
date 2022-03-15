import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss"

type Props ={
  id: string,
  name: string
}

const Header = (props: Props) => {
  const id = props.id;
  const name = props.name;
  return (
    <header id={id}>{name}</header>
  )
}

const App = () => {
  return (
    <div className={styles.div}>
      <Header id="header" name="Bob" />
      Hello World
    </div>
  )
};



ReactDOM.render(
  <App />,
  document.getElementById('app')
)
