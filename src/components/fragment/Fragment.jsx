import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Fragment.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Fragment = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title"> Фрагменты</Title>
          <Divider />
          <p className={s.text}><b>Фрагменты</b> — это распространенный шаблон в наших кодовых базах на Facebook.</p>
          <p className={s.text}>Возврат нескольких элементов из компонента является распространённой практикой в React. Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.</p>
          <div className="content-code">
            <pre><code>{` render() {
    return (
      <React.Fragment>
        <ChildA />
        <ChildB />
        <ChildC />
      </React.Fragment>
    );
  }`}
            </code></pre>

          </div>
          <p className={s.subtitle}>Сокращённая запись</p>
          <div className="content-code">
            <pre><code>{`class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Привет</td>
        <td>Мир</td>
      </>
    );
  }
}`}
            </code></pre>

          </div>
          <p className={s.text}>Можно использовать <code>{` <></> `}</code> так же, как используется любой другой элемент. Однако такая запись не поддерживает ключи или атрибуты.

          </p>
          <p className={s.subtitle}>Ключевые фрагменты</p>
          <p className={s.text}>Если нужен фрагмент с ключом, то можно использовать {`<Fragment />`} напрямую. Вариант использования для этого — сопоставление коллекции с массивом фрагментов — например, для создания списка описаний:</p>
          <div className="content-code">
            <pre><code>{`function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}`}
            </code></pre>

          </div>
          <p className={s.text}> <span className={s.mark}>key</span> это единственный атрибут, который можно передать <span className={s.mark}>Fragment</span>. В будущем мы можем добавить поддержку дополнительных атрибутов, таких как обработчики событий.

          </p>

          <p className={s.link}><a href='https://ru.reactjs.org/docs/fragments.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout >
    </div >)
}

export default Fragment;