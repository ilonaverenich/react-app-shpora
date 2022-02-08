import { Result } from 'antd';


const None = () => {
   return (
      <div className='App'>
         <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
         />
      </div>)
}

export default None; 