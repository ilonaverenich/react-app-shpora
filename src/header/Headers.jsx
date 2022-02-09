import { NavLink } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Headers = () => {
   return (

      <Layout className="layout">
         <Header>
            <Menu theme="dark" mode="horizontal" >

               <Menu.Item key="1"><NavLink to='/home'>Home</NavLink></Menu.Item>
               <Menu.Item key="2"><NavLink to='/components'>Components</NavLink></Menu.Item>
               <Menu.Item key="3"><NavLink to='/props'>Props</NavLink></Menu.Item>
               <Menu.Item key="4"><NavLink to='/state'>State</NavLink></Menu.Item>
               <Menu.Item key="5"><NavLink to='/lifecycle'>LifeCycle</NavLink></Menu.Item>
               <Menu.Item key="6"><NavLink to='/events'>Events</NavLink></Menu.Item>
               <Menu.Item key="7"><NavLink to='/keys'>Keys</NavLink></Menu.Item>
               <Menu.Item key="8"><NavLink to='/async'>Async</NavLink></Menu.Item>
               <Menu.Item key="9"><NavLink to='/refs'>Refs</NavLink></Menu.Item>
               <Menu.Item key="10"><NavLink to='/vdom'>VirtualDOM</NavLink></Menu.Item>
               <Menu.Item key="11"><NavLink to='/fragment'>Fragment</NavLink></Menu.Item>
               <Menu.Item key="12"><NavLink to='/reactmemo'>React.Memo</NavLink></Menu.Item>
               <Menu.Item key="13"><NavLink to='/useeffect'>useEffect</NavLink></Menu.Item>
               <Menu.Item key="14"><NavLink to='/router'>Router</NavLink></Menu.Item>
               <Menu.Item key="15"><NavLink to='/context'>Context</NavLink></Menu.Item>
               <Menu.Item key="16"><NavLink to='/form'>Form</NavLink></Menu.Item>
               <Menu.Item key="17"><NavLink to='/antd'>Ant Desing</NavLink></Menu.Item>

            </Menu>
         </Header>
      </Layout>)

}

export default Headers;

{/* <nav>
         <div>Logo</div>
         <div><NavLink to='/home'>Home</NavLink></div>
         <div><NavLink to='/components'>Components</NavLink></div>
         <div><NavLink to='/state'>State</NavLink></div>
         <div><NavLink to='/link'>Link</NavLink></div>
      </nav> */}