import s from './App.module.css'

import card01 from '/01.jpg'
import card02 from '/02.jpg'
import card03 from '/05.jpg'
import redes01 from '/face.png'
import redes02 from '/instagram.png'
import redes03 from '/github.png'

import banner from '/senai.jpg'

function App() {

  return (
    <>
      <nav>
        <a href="#s1">Home</a>
        <a href="#s2">Sobre</a>
        <a href="#s3">Produtos</a>
      </nav>

      <main>
        <section id='s1' className={s.s1}>
        </section>

        <section id='s2' className={s.s2}>
            <div className={s.left}>
              <img src={banner} alt="" />
            </div>
            <div className={s.right}>
              <h2>Subtítulo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa repellendus? Voluptates tempore magnam, quam dolores omnis nihil. Magni expedita repellat tempore quisquam dicta porro, assumenda fugiat suscipit minima unde.</p>
            </div>
        </section>

        <section id='s3' className={s.s3}>
              <div className={s.card}>
                <img width={400} src={card01} alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>

               <div className={s.card}>
                <img width={400} src={card02} alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>

               <div className={s.card}>
                <img width={400} src={card03} alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>
        </section>
      </main>

      <footer>
        <a href="www.facebook.com"><img width={40} src={redes01} alt="" /></a>
        <a href="www.instagram.com"><img width={40} src={redes02} alt="" /></a>
        <a href="www.github.com"><img width={40} src={redes03} alt="" /></a>
      </footer>
    </>
  )
}

export default App
