import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss"

const App = () => {
  console.log(styles.div)
  return (
    <div className={styles.div}>
      Hello
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
