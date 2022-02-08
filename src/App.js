import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Components from './components/components/Components';
import Home from "./components/home/Home";
import State from './components/state/State';
import Props from "./components/props/Props";
import Lifecycle from "./components/lifecycle/Lifecycle";
import Events from "./components/events/Events";
import Key from "./components/key/Key";
import 'antd/dist/antd.css';
import None from "./none/None";
import Async from "./components/async/Async";
import Refs from "./components/refs/Refs";
import Virtualdom from "./components/virualdom/Virtualdom";
import Fragment from "./components/fragment/Fragment";
import Reactmemo from "./components/reactmemo/Reactmemo";
import Useeffect from "./components/useeffect/Useeffect";
import Router from "./components/router/Router";
import Context from "./components/context/Context";
import Form from "./components/form/Form";
import Antdesing from "./components/antdesing/Antdesing";

function App() {
  return (<div>
    <BrowserRouter>
        <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/components' element = {<Components />}></Route>
        <Route path='/props' element = {<Props />}></Route>
        <Route path='/state' element = {<State />}></Route>
        <Route path='/lifecycle' element = {<Lifecycle />}></Route>
        <Route path='/events' element = {<Events />}></Route>
        <Route path='/keys' element = {<Key />}></Route>
        <Route path='/async' element = {<Async />}></Route>
        <Route path='/refs' element = {<Refs />}></Route>
        <Route path='/vdom' element = {<Virtualdom />}></Route>
        <Route path='/fragment' element = {<Fragment />}></Route>
        <Route path='/reactmemo' element = {<Reactmemo />}></Route>
        <Route path='/useeffect' element = {<Useeffect />}></Route>
        <Route path='/router' element = {<Router />}></Route>
        <Route path='/context' element = {<Context />}></Route>
        <Route path='/form' element = {<Form />}></Route>
        <Route path='/antd' element = {<Antdesing />}></Route>

        <Route path='*' element = {<None />}></Route>
      </Routes> 
    </BrowserRouter> 
    </div>
);
}
export default App;


