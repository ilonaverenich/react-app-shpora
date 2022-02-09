import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Virtualdom.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Virtualdom = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">Виртуальный DOM</Title>
          <Divider />
          <p className={s.text}><b>Виртуальный DOM (VDOM)</b> — это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM. Этот процесс называется согласованием.</p>
          <img src='https://i.postimg.cc/FRqVCqzY/eqp1ffv7pfwux34or4iytxpumli.png' className={s.image}></img>
          <p className={s.text}>DOM расшифровывается как <b>Document Object Model</b> (объектная модель документа). Проще говоря, DOM — это представление пользовательского интерфейса (user interface, UI) в приложении. При каждом изменении UI, DOM также обновляется для отображения этих изменений. Частые манипуляции с DOM негативно влияют на производительность.</p>
          <p className={s.link}><a href='https://ru.reactjs.org/docs/dom-elements.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Virtualdom;