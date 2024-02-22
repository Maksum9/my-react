import { useState } from 'react'
import article from './article.json'
import './App.css'

export default function App() {
const [selectIdx,setSelectIdx] = useState(0)
  const ClickPrev = () => {
    setSelectIdx(selectIdx - 1)
  }
  const ClickNext = () => {
    setSelectIdx(selectIdx + 1)
  }
  const visibleArticle = article[selectIdx]

  const disabledPrevBtn = selectIdx === 0;

  const disabledNextBtn = selectIdx === article.length - 1;

  return (
    <>
    <button disabled={disabledPrevBtn} onClick={ClickPrev}>Prev</button>
    <button disabled={disabledNextBtn} onClick={ClickNext}>Next</button>
    <p>{selectIdx + 1}/{article.length}</p>
    <article>
      <h1>{visibleArticle.topic}</h1>
      <p>{visibleArticle.text}</p>
    </article>
    </>
  )
}


