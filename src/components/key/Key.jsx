import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Key.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title, Text } = Typography;

const Key = () => {
   return (
      <div className="App">
         <Layout className="layout">
            <Headers />
            <div className='content'>
               <Title className="main-title">Ключи</Title>
               <Divider />
               <p className={s.text}>Ключи нужны для оптимизации рендера массивов значений. Они позволяют привязать каждый элемент к соответствующему значению в массиве и не обновлять его без необходиомсти.</p>
               <div className="content-code">
                  <pre><code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}
                  </code></pre>
               </div>
               <p className={s.text}>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:</p>
               <div className="content-code">
                  <pre><code>{`const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);`}
                  </code></pre>
               </div>
               <p className={s.text}>Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ:</p>
               <p className={s.text}><b>Не рекомендуется использовать индексы как ключи, если порядок элементов может поменяться.</b></p>
               <p className={s.text}><b>Ключи должны быть уникальными среди соседних элементов.</b></p>
               <p className={s.link}><a href='https://ru.reactjs.org/docs/lists-and-keys.html' target="_blank" rel='noopener'>Официальная документация</a></p>
               <Divider />
            </div>
            <Footer />
         </Layout>
      </div>)
}

export default Key;