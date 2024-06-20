const GameResultView = props => {
  const {choicesList, isShow, checkResult, newArray, text, restartGame} = props

  const showGame = () => (
    <div className="result">
      {isShow ? (
        <>
          {choicesList.map(choice => (
            <button
              type="button"
              data-testid={`${choice.id.toLowerCase()}Button`}
              onClick={() => checkResult(choice.id)}
              key={choice.id}
            >
              <img src={choice.imageUrl} alt={choice.id} />
            </button>
          ))}
        </>
      ) : (
        <>
          <div>
            <h1>YOU</h1>
            <img src={newArray[0].imageUrl} alt="your choice" />
          </div>
          <div>
            <h1>OPPONENT</h1>
            <img src={newArray[1].imageUrl} alt="opponent choice" />
          </div>
          <div>
            <p>{text}</p>
            <button type="button" onClick={restartGame}>
              PLAY AGAIN
            </button>
          </div>
        </>
      )}
    </div>
  )

  return showGame()
}

export default GameResultView
