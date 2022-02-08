import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Useeffect.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Useeffect = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">useEffect </Title>
          <Divider />
          <p className={s.text}>Хук <b>useEffect</b> решает задачи всех используемых в примере методов жизненного цикла (componentDidMount, componentDidUpdate, и componentWillUnmount).</p>
          <div className="content-code">
            <pre><code>{`import {useEffect} from 'react';`}</code></pre></div>
          <ul>
            <li>UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</li>
            <div className="content-code">
              <pre><code>{` useEffect ( () => { }, [])`}</code></pre></div>
            <li>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</li>
            <div className="content-code">
              <pre><code>{`useEffect ( () => { }, [name])`}</code></pre></div>
            <li>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</li>
            <div className="content-code">
              <pre><code>{`  useEffect ( () => { } )`}</code></pre></div>
            <li>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</li>
            <div className="content-code">
              <pre><code>{`   useEffect ( () => {
 return () => {};
      })`}</code></pre></div>
          </ul>

          <p className={s.link}><a href='https://ru.reactjs.org/docs/hooks-effect.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Useeffect;