import React from 'react';
import SideContext from './SideContext';

const SideBarState = (props) => {

    const sideRef = React.useRef(null);
    
    return <SideContext.Provider value={sideRef}>
        {props.children}
    </SideContext.Provider>

}

export default SideBarState;