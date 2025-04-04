import './styles.css';
import SEO from './Meta';


const App = () => {
  const data = 0;
  return(
  <div className="app-container">
    <SEO title="My App" description="A React + TypeScript + Webpack template." />

    <h1>Welcome to My App</h1>
  </div>
  )
}

export default App
