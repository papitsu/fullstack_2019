import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => (
  <h1>
    {props.text}
  </h1>
)

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const sum = props.value1+props.value2+props.value3
  if (sum === 0) {
    return (
      <div>
        Ei yhtään palautetta annettu
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text={props.prop1} value={props.value1}/>
        <Statistic text={props.prop2} value={props.value2}/>
        <Statistic text={props.prop3} value={props.value3}/>
        <Statistic text="yhteensä" value={sum}/>
        <Statistic text="keskiarvo" value={Math.round((props.value1-props.value3)*100/(sum))/100}/>
        <Statistic text="positiviisia" value={Math.round((props.value1)*1000/(sum))/10 + " %"}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="anna palautetta" />
      <Button text="hyvä" handleClick={() => setGood(good + 1)}/>
      <Button text="neutraali" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="huono" handleClick={() => setBad(bad + 1)}/>

      <Header text="statistiikka" />
      <Statistics prop1="hyvä" value1={good} prop2="neutraali" value2={neutral} prop3="huono" value3={bad}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))