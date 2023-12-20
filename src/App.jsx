import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Footer from './components/Footer';
import HelloWordl from './components/HelloWordl';


const App =()=> {
  return (
    <>
    <main className='container mt-4'>
      <HelloWordl myFriend='Hello My Friend!!'></HelloWordl>
    </main>
    <Footer></Footer>
  
    </>
  )
}

export default App
