import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Events.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Events = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">События</Title>
          <Divider />
          <p className={s.text}>Как и события HTML DOM, React может выполнять действия на основе пользовательских событий.</p>
          <p className={s.text}>React имеет те же события, что и HTML: щелчок, изменение, наведение мыши и т. д.</p>
          <p className={s.subtitle}>Добавление событий</p>
          <p className={s.text}>События React записываются в синтаксисе camelCase:</p>
          <p className={s.text}><code><b>onClick</b></code> вместо <code><b>onclick</b></code></p>
          <p className={s.text}>Обработчики событий React записываются внутри фигурных скобок:</p>
          <p className={s.text}>{`onClick={shoot}  вместо onClick="shoot()"`}.</p>
          <p className={s.subtitle}>Передача аргументов</p>
          <p className={s.text}>Чтобы передать аргумент обработчику событий, необходимо импользовать функцию стрелки.</p>
          <div className="content-code">
            <pre><code>{`function Football() {
  const shoot = (a) => {
    alert(a);
  }
  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));`}</code></pre>
          </div>
          <p className={s.subtitle}>Реагировать на объект события</p>
          <p className={s.text}>Обработчики событий имеют доступ к событию React, вызвавшему функцию.</p>
          <div className="content-code">
            <pre><code>{`function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  }
  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));`}</code></pre>
          </div>

          <p className={s.link}><a href='https://ru.reactjs.org/docs/handling-events.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Events;