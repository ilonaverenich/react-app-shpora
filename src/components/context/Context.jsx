import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Context.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Context = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">Контекст</Title>
          <Divider />
          <p className={s.text}>Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.</p>
          <p className={s.subtitle}>React.createContext</p>
          <div className="content-code">
            <pre><code>{`const MyContext = React.createContext(defaultValue);`}
            </code></pre>
          </div>
          <p className={s.text}>Создаёт объект Context.Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.</p>
          <p className={s.text}>Аргумент defaultValue используется только в том случае, если для компонента нет подходящего Provider выше в дереве. Значение по умолчанию может быть полезно для тестирования компонентов в изоляции без необходимости оборачивать их. Обратите внимание: если передать undefined как значение Provider, компоненты, использующие этот контекст, не будут использовать defaultValue.</p>

          <p className={s.subtitle}>Context.Provider</p>
          <div className="content-code">
            <pre><code>{`<MyContext.Provider value={/* некоторое значение */}>`}
            </code></pre>
          </div>
          <p className={s.text}>Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.</p>
          <p className={s.text}>Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider.Один Provider может быть связан с несколькими компонентами, потребляющими контекст.Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.</p>

          <p className={s.subtitle}>Context.Consumer</p>
          <div className="content-code">
            <pre><code>{`<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`}
            </code></pre>
          </div>
          <p className={s.text}>Consumer — это React-компонент, который подписывается на изменения контекста.В свою очередь, использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.</p>
          <p className={s.text}>Consumer принимает функцию в качестве дочернего компонента.Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().</p>



          <p className={s.link}><a href='https://ru.reactjs.org/docs/context.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Context;