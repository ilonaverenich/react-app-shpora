import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Refs.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title, Text } = Typography;

const Refs = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">Рефы</Title>
          <Divider />
          <p className={s.text}>React поддерживает особый атрибут, который можно прикрепить к любому компоненту. Атрибут <span className={s.mark}>ref</span> может быть объектом, созданным при помощи функции <code><b>React.createRef()</b></code> или колбэком, либо же строкой (устаревший API). Когда в роли атрибута ref выступает колбэк, функция получает DOM-элемент, лежащий в основе компонента, или экземпляр класса (в зависимости от типа элемента) в качестве аргумента. Это позволяет вам иметь прямой доступ к элементу DOM или экземпляру компонента.</p>

          <Title level={3}>Когда их вообще надо использовать?</Title>
          <p className={s.text}><i>Желательно никогда. Только, если в них есть необходимость.</i>
          </p>
          <p className={s.text}>
            Такая как:
          </p>
          <ol>
            <li>Фокус элемента, выделение текста.</li>
            <li>Анимации.</li>
            <li>Интеграция с DOM библиотеками.</li>
          </ol>
          <Title level={3}>Создание ссылок</Title>

          <p className={s.text}>Ссылки создаются с использованием метода <b>React.createRef()</b> и присоединяются к элементам React с помощью атрибута ref. Как правило, они назначаются свойствам экземпляра компонента, в то время как компонент сконструирован таким образом, чтобы ссылки были доступны из любого места этого компонента.</p>
          <div className="content-code">
            <pre><code>{` class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
  }`}
            </code></pre>

          </div>
          <Title level={3}>Доступ к ссылкам</Title>
          <p className={s.text}>Когда ref передается элементу в методе render(), ссылка на узел становится доступной в атрибуте current.</p>
          <div className="content-code">
            <pre><code>{` const node = this.myRef.current;`}
            </code></pre>

          </div>

          <Title level={3}>Добавление ссылки ref на компонент-класс</Title>
          <div className="content-code">
            <pre><code>{`  class MyComponent extends React.Component {
                constructor(props) {
                  super(props);
                  this.myRef = React.createRef();
                }
                render() {
                  return <div ref={this.myRef} />;
                }
            }
  `}
            </code></pre>

          </div>

          <Title level={3}>В функциональных компонентах используется хук useRef:</Title>
          <p className={s.text}>Нельзя использовать атрибут ref на компонентах-функциях, так как они не имеют экземпляров.</p>
          <div className="content-code">
            <pre><code>{` import { useRef } from 'react';

function MyComponent () {
    const refContainer = useRef(initialValue);
    return (
        <div ref={refContainer} />
    );
}`}
            </code></pre>

          </div>

          <p className={s.text}>useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.</p>
          <p className={s.text}>Рефы достаточно просты, но есть свои тонкости.</p>
          <p className={s.link}><a href='https://ru.reactjs.org/docs/refs-and-the-dom.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Refs;