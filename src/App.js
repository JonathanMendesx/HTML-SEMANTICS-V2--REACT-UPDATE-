import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          {/* Adicione itens de navegação aqui. */}
        </nav>
      </header>

      <main>
        <article>
          <section>
            {/* Conteúdo da primeira seção */}
          </section>

          <section>
            {/* Conteúdo da segunda seção */}
          </section>

          <section>
            {/* Conteúdo da terceira seção */}
          </section>

          <aside>
            {/* Conteúdo do primeiro aside */}
          </aside>

          <aside>
            {/* Conteúdo do segundo aside */}
          </aside>
        </article>
      </main>

      <footer>
        <nav>
          {/* Links ou itens de navegação do footer */}
        </nav>

        <nav>
          {/* Outro conjunto de links ou itens de navegação */}
        </nav>
      </footer>
    </div>
  );
}

export default App;
