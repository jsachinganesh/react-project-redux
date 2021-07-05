import React from 'react';
import { connect } from 'react-redux';
import SideContext from '../../../context/SideContext';
import { logOutAction } from '../../../redux-store/actions/AuthAction';
import './LogOutBar.scss';

const LogOutBar = (props) => {
    const logOutRef = React.useContext(SideContext);
    const [pay,setPay] = React.useState(0);
    const [pen,setPen] = React.useState(0);
    React.useEffect(()=>{
      cal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.invoices]);

    const cal = () => {
        const data = props.invoices;
        let paidAmount = 0;
        let pendingAmount = 0;
        data.forEach((el,i)=>{
          const int = parseInt(el.amountToPay);
          if(el.isPaid === 'paid'){
            paidAmount = paidAmount + int;
          }else{
            pendingAmount = pendingAmount + int;
          }
        });
        console.log(paidAmount,pendingAmount);
        setPay(paidAmount);
        setPen(pendingAmount);
    }

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
            
            <h1>Account Sum</h1>
            <div className="sumAmount">
                <div className="box paid">
                    <div className="totalP">Total Paid</div>
                    <div className="paidA">{pay}</div>
                </div>
                <div className="box">
                    <div className="totalP">Total Pending</div>
                    <div className="pendA">{pen}</div>
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
        auth:state.auth,
        invoices: state.invoiesState.invoices,
    }
}

const mapStateToDispatch = {
    logOutAction
}

export default connect(mapStateToProps,mapStateToDispatch)(LogOutBar);
