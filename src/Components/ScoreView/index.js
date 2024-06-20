const ScoreView = props => {
  const {score} = props

  return (
    <div>
      <div>
        <h1>
          ROCK <br /> PAPER <br /> SCISSORS
        </h1>
      </div>
      <div>
        <p>Score</p>
        <p>{score}</p>
      </div>
    </div>
  )
}

export default ScoreView
