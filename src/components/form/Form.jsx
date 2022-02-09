import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Form.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Form = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">Работа с формой</Title>
          <Divider />
          <p className={s.text}>В React мы можем использовать все стандартные элементы форм, которые есть в html, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React</p>
          <div className="content-code">
            <pre><code>{` class UserForm extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = {name: ""};
                    this.onChange = this.onChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                }
              
                onChange(e) {
                  var val = e.target.value;
                  this.setState({name: val});
                }
              
                handleSubmit(e) {
                  e.preventDefault();
                  alert("Имя: " + this.state.name);
                }
              
                render() {
                  return (
                    <form onSubmit={this.handleSubmit}>
                      <p>
                        <label>Имя:</label><br />
                        <input type="text" value={this.state.name} onChange={this.onChange}/>
                      </p>
                      <input type="submit" value="Отправить" />
                    </form>
                  );
                }
              }
              
              ReactDOM.render(
                <UserForm />,
                document.getElementById("app")
            )`}</code></pre>
          </div>

          <p className={s.text}>Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:</p>
          <div className="content-code">
            <pre><code>{`  this.state = {name: ""};`}</code></pre>
          </div>
          <p className={s.text}>При определении поля ввода каждое поле связывается с определенным значением в state:</p>
          <div className="content-code">
            <pre><code>{` <input type="text" value={this.state.name} onChange={this.onChange} />`}</code></pre>
          </div>
          <p className={s.text}>Так, источником значения для поля ввода имени является объект this.state.name.</p>
          <p className={s.text}>Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.</p>

          <p className={s.text}>Суть каждого обработчика заключается в изменении значений в this.state:</p>
          <div className="content-code">
            <pre><code>{`onChange(e) {
                var val = e.target.value;
                this.setState({name: val});
            }`}</code></pre>
          </div>
          <p className={s.text}>С помощью e.target.value получаем введенное значение. После обновления новое значение this.state.name отобразится в поле ввода.</p>
          <p className={s.link}><a href='https://ru.reactjs.org/docs/forms.html' target="_blank" rel='noopener'>Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Form;