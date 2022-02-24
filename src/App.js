import './App.css'
import Parent from './components/Parent'
import Middle from './components/CatchError/Middle'
import HOC from './components/HOC'
import Context from './components/Context'
import Hooks from './components/Hooks'
import PureComponent from './components/PureComponent'
import Memo from './components/Memo'
import CreateRef from './components/CreateRef'
import ForwardRef from './components/ForwardRef'
import CreatePortal from './components/CreatePortal'
function App() {
  return (
    <div className="App">
      <Parent></Parent>
      <div className="block"></div>
      <Middle></Middle>
      <div className="block"></div>
      <HOC></HOC>
      <div className="block"></div>
      <Context></Context>
      <div className="block"></div>
      <PureComponent></PureComponent>
      <div className="block"></div>
      <Memo></Memo>
      <div className="block"></div>
      <CreateRef></CreateRef>
      <div className="block"></div>
      <ForwardRef></ForwardRef>
      <div className="block"></div>
      <Hooks></Hooks>
      <div className="block"></div>
      <CreatePortal></CreatePortal>
      <div className="block"></div>
    </div>
  )
}

export default App
