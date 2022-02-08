import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Lifecycle.module.css'
import { Layout, Typography, Divider, Image } from 'antd';
const { Title, Text } = Typography;

const Lifecycle = () => {
   return (
      <div className="App">
         <Layout className="layout">
            <Headers />
            <div className={s.content}>
               <Title className="main-title">Жизненые циклы </Title>
               <Divider />
               <p className={s.text}>Жизненный цикл компонента в целом делится на четыре части:</p>
               <ul className={s.list}>
                  <li><b>инициализация</b></li>
                  <li><b>монтаж</b>:</li>
                  <li><b>обновление</b></li>
                  <li><b>размонтирование</b></li>
               </ul>

               <p className={s.text}>
                  <Text mark>№ 1: Инициализация</Text>
               </p>
               <p className={s.text}>Это фаза, на которой компонент собирается начать свой путь, установив состояние и пропсы. Обычно это делается внутри метода <b>конструктора</b></p>
               <div className="content-code">
                  <pre><code>{`constructor(props)`}
                  </code></pre>
               </div>
               <p className={s.text}>
                  <Text mark>№ 2: Монтаж</Text>
               </p>
               <p className={s.text}>Монтирование - это фаза, на которой наш компонент React монтируется в DOM (то есть создается и вставляется в DOM).</p>
               <ol>
                  <li><b>componentWillMount()</b></li>
                  <p className={s.text}>Этот метод вызывается непосредственно перед монтированием компонента в DOM или методом визуализации. После этого метода компонент монтируется.</p>
                  <div className="content-code">
                     <pre><code>{`componentWillMount()`}
                     </code></pre>
                  </div>
                  <li><b>componentDidMount()</b></li>
                  <p className={s.text}>Этот метод вызывается после монтирования компонента в DOM. Как и componentWillMount, он вызывается один раз в жизненном цикле. Перед выполнением этого метода вызывается метод рендеринга (т.е. Мы можем получить доступ к DOM). В нем мы можем делать вызовы API и обновлять состояние с помощью ответа API.</p>
                  <div className="content-code">
                     <pre><code>{`componentDidMount()`}
                     </code></pre>
                  </div>
               </ol>
               <p className={s.text}>
                  <Text mark>№ 3: Обновление</Text>
               </p>
               <p className={s.text}>Это третья фаза, через которую проходит наш компонент. После фазы монтажа, на которой был создан компонент, на сцену приходит фаза обновления. Это то место где состояние компонента изменяется и, следовательно, происходит повторный рендеринг.</p>
               <p className={s.text}>Обновление может происходить при изменении свойств или состояния. Эти методы вызываются во время перерисовки:</p>

               <ol>
                  <li><b>render()</b></li>
                  <p className={s.text}> Из метода render() возвращается JSX, который создает интерфейс компонента.</p>
                  <p className={s.text}>Этот метод определяет, должен ли компонент обновляться или нет. По умолчанию возвращает <i>true</i>. Но в какой-то момент, если вы хотите повторно выполнить рендеринг компонента при каком-то условии, тогда метод shouldComponentUpdate является правильным местом.</p>
                  <div className="content-code">
                     <pre><code>{` render () {
   return (
      <div> 'Hello' </div>
   )}`}
                     </code></pre>
                  </div>
                  <li><b>shouldComponentUpdate()</b></li>
                  <p className={s.text}>Этот метод определяет, должен ли компонент обновляться или нет. По умолчанию возвращает <i>true</i>. Но в какой-то момент, если вы хотите повторно выполнить рендеринг компонента при каком-то условии, тогда метод shouldComponentUpdate является правильным местом.</p>
                  <div className="content-code">
                     <pre><code>{`shouldComponentUpdate(nextProps, nextState)`}
                     </code></pre>
                  </div>
                  <li><b>componentWillUpdate ()</b></li>
                  <p className={s.text}>Он вызывается до повторного рендеринга компонента. Он вызывается один раз после метода shouldComponentUpdate.</p>
                  <div className="content-code">
                     <pre><code>{`componentWillUpdate()`}
                     </code></pre>
                  </div>
                  <li><b>componentDidUpdate()</b></li>
                  <p className={s.text}>Этот метод вызывается сразу после повторного рендеринга компонента. После того, как компонент обновляется в DOM, выполняется метод <b>componentDidUpdate</b>. Этот метод получает аргументы, такие как prevProps и prevState.</p>
                  <div className="content-code">
                     <pre><code>{`componentDidUpdate(prevProps, prevState, snapshot)`}
                     </code></pre>
                  </div>
               </ol>
               <p className={s.text}>
                  <Text mark>№ 4: Размонтирование</Text>
               </p>
               <p className={s.text}>Это последний этап в жизненном цикле компонента. Компонент отключается от DOM на этом этапе. Метод, который доступен на этом этапе:</p>
               <ol>
                  <li><b>componentWillUnmount()</b></li>
               </ol>
               <p className={s.text}>Этот метод вызывается перед размонтированием компонента. Перед удалением компонента из DOM выполняется componentWillUnMount . Этот метод обозначает конец жизненного цикла компонента.</p>
               <div className="content-code">
                  <pre><code>{`componentWillUnmount()`}
                  </code></pre>
               </div>
               <Image className='aaaa' width={500} src="https://i.postimg.cc/GtjCKV1G/111148237187030562601537580608630216115.png" preview={{ src: 'https://i.postimg.cc/GtjCKV1G/111148237187030562601537580608630216115.png' }} />
               <p className={s.link}><a href='https://ru.reactjs.org/docs/state-and-lifecycle.html' target="_blank" rel='noopener'>Официальная документация</a></p>
               <Divider />
            </div>
            <Footer />
         </Layout >
      </div >)
}

export default Lifecycle;