import Headers from '../../header/Headers'
import { Layout, Divider, Typography } from 'antd';
import Footer from '../../footer/Footer';
import s from './Props.module.css'
const { Content } = Layout;
const { Title, Text } = Typography;

const Props = () => {
   return (
      <div className="App">
         <Layout className="layout">
            <Headers />
            <div className='content'>
               <Title className="main-title">Пропсы </Title>
               <Divider />
               <p className={s.text}><b>Пропсы</b> - это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.</p>
               <p className={s.text}>Пропсы предназначены только для чтения. Ни в каком случае их не следует изменять!</p>

               <div className="content-code">
                  <pre><code>{`// Неправильно!
props.number = 42;`}
                  </code></pre>
               </div>
               <p className={s.bold}>props.children</p>
               <p className={s.text}>В любом компоненте доступны props.children. Это контент между открывающим и закрывающим тегом компонента. Например:</p>
               <div className="content-code">
                  <pre><code>{`<Welcome>Привет, мир!</Welcome>`}</code></pre>
               </div>
               <p className={s.text}>Строка Привет, мир! доступна в props.children в компоненте Welcome:</p>

               <div className="content-code">
                  <pre><code>{`function Welcome(props) {
  return <p>{props.children}</p>;
}`}</code></pre></div>
               <p className={s.text}>Для классовых компонентов используйте this.props.children:</p>

               <div className="content-code">
                  <pre><code>{`class Welcome extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}`}</code></pre></div>
               <p className={s.link}><a href='https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components' target="_blank" rel='noopener'>Официальная документация</a></p>
               <Divider />
            </div>
            <Footer />
         </Layout>
      </div>)
}

export default Props;