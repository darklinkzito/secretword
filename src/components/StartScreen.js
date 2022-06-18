import "./StartScreen.css";;

const StartScreen = ({startGame}) => {
    return (
        <div>
            <div className="start">
                <h1>Secret Word</h1>
                <p>Clique no botão para começar!!!</p>
                <button onClick={startGame}>Começar</button>
            </div>
        </div>
    )
}

export default StartScreen;