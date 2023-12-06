import React from 'react'
import "./style.css"



const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
  </svg>
)
function Card() {

  return (
    <section className='box'>

      <section className='card'>
        <div className='circle'></div>
        <h2>Basic</h2>
        <span><p className='coin'>$</p>20</span>
        <ul className='list'>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
        </ul>
        <button>buy now</button>
      </section>

      <section className='card'>
        <div className='circle'></div>
        <h2>Standard</h2>
        <span><p className='coin'>$</p>35</span>
        <ul className='list'>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
        </ul>
        <button>buy now</button>
      </section>

      <section className='card'>
        <div className='circle'></div>
        <h2>Premium</h2>
        <span><p className='coin'>$</p>60</span>
        <ul className='list'>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
          <li> <IconCheck /> <p>orem ipsum dolor sit amet consectetur adipiscing elit, malesuada eros proin primis ut potenti praesent</p></li>
        </ul>
        <button>buy now</button>
      </section>

    </section>
  )
}

export default Card