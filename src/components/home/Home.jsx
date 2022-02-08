import Headers from '../../header/Headers';
import Footer from '../../footer/Footer';
import { Layout, Image } from 'antd';
import { Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
   return (

      <div className='App'> <Layout className="layout">
         <Headers />
         <div className='content'>
            <Title className="main-title">Пособие по React </Title>
            <p className='title'>JavaScript-библиотека для создания пользовательских интерфейсов</p>
            <Content className='create'> Для создания проекта выполните команды:
            </Content>
            <div className="content-code">
               <pre><code>{`npx create-react-app my-app
cd my-app
npm start`}
               </code></pre>
            </div>
            <Content className='create'> Программа курса Redev:
            </Content>
            <Image width={500} src="https://i.postimg.cc/c1VrdMCB/sh2.jpg" preview={{ src: 'https://i.postimg.cc/137n6xMD/sh.jpg' }} />
         </div>

         <Footer />
      </Layout></div>

   )
}

export default Home;