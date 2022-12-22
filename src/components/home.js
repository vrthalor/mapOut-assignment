import { useEffect, useState, createContext } from 'react';
import SubBox from './sub_box';
import MainBox from './main_box'

export const UserContext = createContext()
function Home() {
  const [globalCount, setGlobalCount] = useState(0)

  const incFun = () => {
    setGlobalCount(globalCount + 1)
  }
  const reset = (val) => {
    setGlobalCount(globalCount - val)
  }
  
  let data = {
    globalCount: globalCount,
    incFun: incFun,
    reset: reset
  }
  return (
    <div className="">
      <div className="home-section">
        <h2 align="center" className='mt-5'>MapOut Assignment</h2>
        <UserContext.Provider value={data}>
          <MainBox />
          <SubBox />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default Home;
