import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Antdesing.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title} = Typography;

const Antdesing = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">Ant Desing</Title>
          <Divider />
          <p className={s.text}><b>Ant Design</b>- это <span className={s.mark}>библиотека</span> компонентов пользовательского интерфейса React.</p>

          <div className="content-code">
            <pre><code>{`npm install antd --save // ​​Устанавливаем модуль antd`}
            </code></pre>
          </div>
          <p className={s.text}>Добавьте файл antd css в App.css.</p>

          <div className="content-code">
            <pre><code>{`import 'import antd/dist/antd.css' // Импортируем файл App.css и импортируем css antd в файл`}</code></pre>
          </div>
          <p className={s.text}>Таким образом, наш проект React успешно представил библиотеку компонентов пользовательского интерфейса antd.</p>
          <p className={s.subtitle}>Функции Ant Desing</p>
          <ol>
            <li>Пользовательский интерфейс корпоративного класса, разработанный для веб-приложений.</li>
            <li> Набор качественных компонентов React из коробки.</li>
            <li>Написан на TypeScript с предсказуемыми статическими типами.</li>
            <li>Полный пакет дизайнерских ресурсов и средств разработки.</li>
            <li>Поддержка интернационализации для десятков языков.</li>
            <li>Мощная настройка темы в каждой детали.</li>
          </ol>


          <p className={s.link}><a href='https://ant.design/' target="_blank">Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Antdesing;