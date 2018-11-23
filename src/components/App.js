import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import Header from './Header'
import PageContainer from '../containers/PageContainer'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<UserContainer />
				<PageContainer />
			</div>
		);
	}
}

export default App;


/*return Object.assign({}, state, {
        photos: action.payload
      })

Converted to 

return {...state, photos: action.payload}*/