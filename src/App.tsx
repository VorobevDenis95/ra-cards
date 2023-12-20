import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <div className="container">
        <Cards src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </Cards>
        <Cards>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </Cards>
    </div>
 
   
  )
}

export default App
