import React from 'react';
import { connect } from 'react-redux';
import SideContext from '../../../context/SideContext';
import { logOutAction } from '../../../redux-store/actions/AuthAction';
import './LogOutBar.scss';

const LogOutBar = (props) => {
    const logOutRef = React.useContext(SideContext);
    

    const handleClose = (e) => {
        logOutRef.current.style.transform = 'translateX(-200%)';
    }

    const handleLog = (e) => {
        props.logOutAction();
    }

    return (
        <div ref={logOutRef} className="LogOutBar">
            <div onClick={handleClose} className="logClose">
                X
            </div>
            
            <h1>Dare Dragon</h1>
            <div className="sumAmount">
                <div className="box paid">
                    <div className="totalP">Total Paid</div>
                    <div className="paidA">9000</div>
                </div>
                <div className="box">
                    <div className="totalP">Total Pending</div>
                    <div className="pendA">9000</div>
                </div>
            </div>

            <button onClick={handleLog}>
                LogOut
            </button>
        </div>
    );
}

// logOutAction

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

const mapStateToDispatch = {
    logOutAction
}

export default connect(mapStateToProps,mapStateToDispatch)(LogOutBar);
