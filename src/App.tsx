import './styles.css'
import Image from './assets/images/images.png'
import Heart from './assets/images/Heart.svg'

const App = () => {
  return (
    <div>
      <h1>
        React + Typescript + Webpack - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={Image} alt="Logos Image" />
      <img src={Heart} alt="Heart Image" />
    </div>
  )
}

export default App
