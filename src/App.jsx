import s from './App.module.css'

function App() {

  return (
    <>
      <nav>
        <a href="#s1">Home</a>
        <a href="#s2">Sobre</a>
        <a href="#s3">Produtos</a>
      </nav>

      <main>
        <section id='s1'>
            <h1>TÍTULO DA EMPRESA</h1>
        </section>

        <section id='s2'>
            <div className={s.left}>
              <img src="" alt="" />
            </div>
            <div className={s.right}>
              <h2>Subtítulo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa repellendus? Voluptates tempore magnam, quam dolores omnis nihil. Magni expedita repellat tempore quisquam dicta porro, assumenda fugiat suscipit minima unde.</p>
            </div>
        </section>

        <section id='s3'>
              <div className={s.card}>
                <img src="" alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>

               <div className={s.card}>
                <img src="" alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>

               <div className={s.card}>
                <img src="" alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>
        </section>
      </main>

      <footer>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </footer>
    </>
  )
}

export default App
