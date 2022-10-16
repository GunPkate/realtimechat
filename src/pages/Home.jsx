// import react from 'react'
import Chats from '../component/Chats';
import Sidebar from '../component/Sidebar';

const Home = () =>{
    return <div className='home'>
        <div className="container">
              <Sidebar/>
              <Chats/>
        </div>
    </div>
}

export default Home;