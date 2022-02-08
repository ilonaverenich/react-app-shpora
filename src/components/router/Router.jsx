import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Router.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Router = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">Роуты </Title>
          <Divider />
          <p className={s.text}>Для того, чтобы использовать роуты, необходимо установить его в проект:</p>
          <div className="content-code">
            <pre><code>{`npm install react-router-dom`}</code></pre>
          </div>
          <p className={s.text}>Далее, импортируем в браузер:</p>
          <div className="content-code">
            <pre><code>{`import {BrowserRouter, Routes, Route} from "react-router-dom";`}</code></pre>
          </div>
          <p className={s.subtitle}>Использование</p>
          <div className="content-code">
            <pre><code>{`<BrowserRouter>
      <Routes>
    <Route path='/' element = {<Home />}></Route>
    <Route path='/home' element = {<Home />}></Route>
    <Route path='/antd' element = {<Antdesing />}></Route>
    <Route path='*' element = {<None />}></Route></Routes> 
      </Routes>
</BrowserRouter> `}</code></pre>
          </div>
          <div className="content-code">
            <pre><code>{`import { NavLink } from "react-router-dom";`}</code></pre>
          </div>
          <div className="content-code">
            <pre><code>{` <Menu theme="dark" mode="horizontal" >
     <Menu.Item key="1"><NavLink to='/home'>Home</NavLink></Menu.Item>
     <Menu.Item key="2"><NavLink to='/Antdesing'>Components</NavLink></Menu.Item>
     <Menu.Item key="3"><NavLink to='/None'>Components</NavLink></Menu.Item>
</Menu>`}</code></pre>
          </div>
          <p className={s.link}><a href='https://v5.reactrouter.com/web/guides/quick-start' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Router;