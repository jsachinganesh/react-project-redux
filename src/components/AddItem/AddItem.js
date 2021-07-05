import React from 'react';
import './AddItem.scss';

const AddItem = () => {
    const [itemName,setItemName] = React.useState('');
    // const [itemQty,setItemQty] = React.useState(0);
    // const [itemPrice,setItemPrice] = React.useState(0);
    
    return (
        <tr>
            <td className="itemBroIn">
                <input onChange={(e)=>setItemName(e.target.value)} value={itemName} type="text" />
            </td>
            <td className="itemBroIn">
                <input type="number" />
            </td>
            <td className="itemBroIn">
                <input type="text" />
            </td>
            {/* <td className="itemBroIn">
                <div className="">X</div>
            </td> */}
        </tr>
    );
}

export default AddItem;
