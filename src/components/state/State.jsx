import Headers from '../../header/Headers'
import Footer from '../../footer/Footer';
import { Layout, Divider, Typography } from 'antd';
import s from './State.module.css'
const { Title, Text } = Typography;

const State = () => {
   return (
      <div className='App'>

         <Layout className="layout">
            <Headers />
            <div className='content'>
               <Title className="main-title">Стейты</Title>
               <Divider />
               <Title level={3}>Для чего нужен стейт?</Title>
               <p className={s.text}>State нужен для того, чтобы <Text italic>хранить какое-то изменяющее значение</Text>. Например, с которым будет взаимодействовать пользователь.</p>
               <Title level={3}>Как обновляется стейт?</Title>
               <p className={s.text}>Стейт обновляется всегда через <b>setState</b></p>
               <div className="content-code">
                  <pre><code>{`setState(updater, [callback])`}
                  </code></pre>

               </div>
               <Title level={3}>Что делает setState?</Title>
               <p className={s.text}>Метод <b>setState()</b> планирует изменение объекта состояния (state) компонента. Когда состояние меняется, компонент рендерится повторно.
               </p>
               <p className={s.text}>В настоящее время setState работает асинхронно внутри обработчиков событий.</p>
               <Title level={3}>Как создать стейт для <Text underline>классовой</Text> компоненты?</Title>
               <ol>
                  <li>Создаём классовую компоненту.</li>
                  <li>Создаем обьект <code>{`state ={ count : 0 }`}</code></li>
                  <li>В классе добавляем метод <code>hadlerState</code>, в которой обновляем стейт.</li>
                  <li>Вешаем на кнопку событие, например, onClick.</li>
               </ol>
               <div className="content-code">
                  <pre><code>{` class Components extends React.Component {
   state = {
      count: 0
   }

   hadlerState = () => {
      this.setState((state)=>({count:state.count+1}))
   }

   render() {
      return (
         <div>
            <p>{this.state.count}</p>
            <button onClick ={()=> this.hadlerState()}>Click me</button>
         </div>
      )
   }
}`}
                  </code></pre>

               </div>
               <Title level={3}>Как создать стейт для <Text underline>функциональной</Text> компоненты?</Title>

               <ol>
                  <li>Создаём функциональную компоненту, в виде стрелочной функции.</li>
                  <li>Импортируем в наш компоненет useState:<code>{` import {useState} from 'react'`}</code></li>
                  <li>Достаём данные из useState, с помощью деструктуризации массива.</li>
                  <li>Вешаем на кнопку событие, в котором будем обновлять setState.</li>
               </ol>

               <div className="content-code">
                  <pre><code>{`import {useState} from 'react'

const Components = () => {
   const [count, setCount] = useState();
   return (
      <div>
         <p>{count +1}</p>
         <button onClick={()=>setCount(count+1)}>Click me</button>
      </div>
   )
}`}
                  </code></pre>

               </div>
               <p className={s.link}><a href='https://ru.reactjs.org/docs/faq-state.html' target="_blank" rel='noopener'>Официальная документация</a></p>
               <Divider />
               <Footer />
            </div>
         </Layout >

      </div >)
}

export default State;