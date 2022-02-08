import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Reactmemo.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title, Text } = Typography;

const Reactmemo = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">React.memo() </Title>
          <Divider />
          <p className={s.text}>Использование memo приведет к тому, что React <span className={s.mark}>пропустит рендеринг компонента</span> , если его свойства не изменились.</p>
          <p className={s.text}>Чтобы улучшить производительность пользовательского интерфейса, React предлагает компонент более высокого порядка React.memo(). При <code>React.memo()</code>обертывании компонента React запоминает визуализированный вывод обернутого компонента, а затем <i>пропускает ненужные рендеринги</i>.</p>
          <div className="content-code">
            <pre><code>{`const MyComponent = React.memo(function MyComponent(props) {
  /* рендер с использованием пропсов */
});`}</code></pre></div>
          <p className={s.text}>Если компонент всегда рендерит одно и то же при неменяющихся пропсах, то можно обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
          <p className={s.text}>Если компонент всегда рендерит одно и то же при неменяющихся пропсах, то можно обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
          <p className={s.text}>React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.</p>
          <p className={s.text}>По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.</p>
          <div className="content-code">
            <pre><code>{`function MyComponent(props) {
  /* рендер с использованием пропсов */
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}
export default React.memo(MyComponent, areEqual);`}</code></pre></div>
          <p className={s.text}><b>Не полагайтесь на него, чтобы «предотвратить» рендер, так как это может привести к ошибкам.</b></p>
          <p className={s.link}><a href='https://ru.reactjs.org/docs/react-api.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Reactmemo;