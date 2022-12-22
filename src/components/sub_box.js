import { useState } from "react";
import SubBoxCommon from "./common/SubBoxCommon";

function SubBox(props) {
  const [totalBox, setTotalBox] = useState(0)

  const onChangeFun = (e) =>{
    const {value} = e.target
    if(value>100){
      alert("Not allowed more than 100")
      return
    }
    setTotalBox(value)
  }
  return (
    <div className="">
      <div className="main-section">
        <div className="input-section">
          <input type="text" className="form-control" value={totalBox} onChange={onChangeFun} />
        </div>
        <div className="row">
          {Array.apply(null, { length: totalBox }).map(val => (
            <>
              <SubBoxCommon />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubBox;




