import React from 'react';
import Container from './containers/Count'
import store from './redux/store'
const App = () => {

	 

	return (
		<div>
			<Container store={store}/>
		</div>
	)

}

export default App


 