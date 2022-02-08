import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import s from './Async.module.css'
import { Layout, Typography, Divider } from 'antd';
const { Title } = Typography;

const Async = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Headers />
        <div className='content'>
          <Title className="main-title">Ассинхронные запросы </Title>
          <Divider />
          <p className={s.text}>Большинство веб-приложений работают с данными, которые, как правило, хранятся в базе данных (БД). Что получить эти данные приложения обычно используют AJAX, то есть асинхронные запросы к серверу. Сервер, получив такой запрос, обращается к БД, а затем возвращает данные обратно приложению. </p>
          <p className={s.text}>Вы можете использовать встроенный в браузер метод window.fetch или любую AJAX-библиотеку, например Axios или jQuery AJAX.</p>
          <p className={s.text}>Лучшее место для асинхронного хапроса в методе componentDidMount</p>
          <p className={s.subtitle}>Пример: Устанавливаем состояние из AJAX-запроса</p>
          <p className={s.text}>Компонент ниже показывает, как в <b>componentDidMount</b> задать внутреннее состояние из результата AJAX-запроса.</p>
          <div className="content-code">
            <pre><code>{`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}`}
            </code></pre>

          </div>

          <p className={s.text}>Эквивалент с хуками:</p>
          <div className="content-code">
            <pre><code>{`function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}
`}
            </code></pre>

          </div>

          <p className={s.link}><a href='https://max-frontend.gitbook.io/react-course-ru-v2/asinhronnii-zapros' target="_blank">Официальная документация</a></p>
          <Divider />
        </div>
        <Footer />
      </Layout>
    </div>)
}

export default Async;