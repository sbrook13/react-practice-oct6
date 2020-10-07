import React from 'react';
import './App.css';
import One from './One';
import Two from './Two';
import Three from './Three';
import BoxLink from './BoxLink';

function App() {
  return (
    <div id="app" className="">
      <header className="app-header">
        <h1>
          <a href="/" className="router-link-active">
            <img src="https://w7.pngwing.com/pngs/475/281/png-transparent-adidas-logo-adidas-logo-adidas-text-photography-shoes.png" alt="logo" />
            <span>Flatiron School</span>
          </a>
        </h1>
        <section>
          <a href="/videos" className="">Videos</a>
          <a href="/create-user" className="">Create User</a>
          <a href="/logout" className="">Logout Kyle Coberly</a>
        </section>
      </header>
      <main>
        <div className="modules">
          <nav>
            <ul className="modules">
              <BoxLink displayLabel="1" url="/modules/1/" isActive={true} />
              <BoxLink displayLabel="2" url="/modules/2/" isActive={true} />
              <BoxLink displayLabel="3" url="/modules/3/" isActive={true} />
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}

export default App;
