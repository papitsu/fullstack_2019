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

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(6))

  const voteFcn = () => {
    const copy = [...points]
    copy[selected] += 1
    return setPoints(copy)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />

      {props.anecdotes[selected]}
      <div>has {points[selected]} votes</div>

      <div>
        <Button text="vote" handleClick={voteFcn} />
        <Button text="next anecdote" handleClick={() => setSelected(generateRandomInteger(0,5))} />
      </div>

      <Header text="Anecdote with the most votes" />

      {props.anecdotes[indexOfMax(points)]}
      <div>has {points[indexOfMax(points)]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)