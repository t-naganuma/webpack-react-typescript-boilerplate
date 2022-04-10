import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

function Header() {
  return <header className={styles.header}>Header</header>;
}

function Main({ name }: {name: string}) {
  return (
    <main className={styles.main}>
      <section>
        <div>Main</div>
        <p className={styles.name}>
          Hello,
          {name}
        </p>
      </section>
    </main>
  );
}

function Footer() {
  return <footer className={styles.footer}>footer</footer>;
}

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main name="webpack" />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
