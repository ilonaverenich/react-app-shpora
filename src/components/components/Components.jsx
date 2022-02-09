import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Components.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title, Text } = Typography;

const Components = () => {
   return (
      <div className="App">
         <Layout className="layout">
            <Headers />
            <div className='content'>
               <Title className="main-title">Компоненты </Title>
               <Divider />
               <p className={s.text}><b>React-компоненты</b> — это маленькие, повторно используемые части кода, которые возвращают React-элементы для отображения на странице. Самый простой React-компонент — это простая функция JavaScript, которая возвращает элементы React</p>
               <p className={s.subtitle}>Компоненты бывают: <Text mark>функциональные</Text> и  <Text mark>классовые</Text></p>
               <p className={s.text}>Название компонент с большой буквы, например 'Components'</p>
               <div className="content-code">
                  <pre><code>{`function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car;`}
                  </code></pre>
               </div>
               <div className="content-code">
                  <pre><code>{`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`}</code></pre>
               </div>

               <p className={s.text}>Концептуально, компоненты похожи на JavaScript-функции. Они принимают произвольные данные (называемые props) и возвращают React-элементы, которые описывают то, что должно появиться на экране.</p>
               <p className={s.link}><a href='https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components' target="_blank">Официальная документация</a></p>
               <Divider />
            </div>
            <Footer />
         </Layout>
      </div>)
}

export default Components;