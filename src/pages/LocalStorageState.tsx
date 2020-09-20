import React, {useState} from 'react';

export const CartContext:any = React.createContext(null);

const LocalStorageState = (props:any) =>{

	const [cart, setCart]:any = useState([]);
	
	return(
		<CartContext.Provider value={[cart, setCart]}>
			{props.children}
		</CartContext.Provider>
	)
}


export default LocalStorageState;