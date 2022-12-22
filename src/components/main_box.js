import { memo, useContext } from "react";
import { UserContext } from "./home";

function MainBox() {
  const data = useContext(UserContext);
  
  return (
    <div className="">
      <div className="main-section">
        <div className="row">
          <div className="col-md-12">
            <div className="main-box box-class">
              <h3 className="count">{data.globalCount}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MainBox);
