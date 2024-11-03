import './App.css'

function App() {
  fetch('http://localhost:4000/news')
    .then(res => res.text())
    .then(data => console.log(data))

  return (
    <>
      
    </>
  )
}

export default App
