import { useState, createContext, useContext } from "react";
import SubBoxCommonHoc from '../common/hoc_box'
import { UserContext } from "../home";

function SubBoxCommon(props) {
    const data = useContext(UserContext);
    return (
        <div className="col-md-6">
            <div className="main-box box-class">
                <h3 className="count">{props.hocsub?.count}</h3>
                <div className="box-class-button">
                    <button onClick={() => {
                        props.hocsub?.increment()
                        data.incFun()
                    }} className="btn btn-outline-primary btn-sm">Increment</button>

                    <button onClick={() => {
                        props.hocsub?.reset()
                        data.reset(props.hocsub?.count)
                    }} className="btn btn-outline-danger btn-sm btnDanger">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default SubBoxCommonHoc(SubBoxCommon)