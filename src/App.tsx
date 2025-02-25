import './App.scss'
import {default as Logo} from './assets/img/queen-bee.jpg';

function App() {

  return (
    <>
      <header className='align-middle'>
        <h1 className='flex flex-row '>
          <img
            src={Logo}
            className="
              flex-grow-0
              w-1/12
            "
            alt={'Logo image.'}
          />
          <span className='w-11/12'>The Queen Bee&apos;s Domain</span>
        </h1>
      </header>
      <div>
        <div className="grid grid-cols-9 gap-1">

        </div>
        <div className="card">

        </div>
      </div>
    </>
  )
}

export default App
