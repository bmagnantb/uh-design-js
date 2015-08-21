import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../app/reducers'

import 'normalize.css'
import '../../scss/style.scss'

export default class App {
	render() {
		var Handler = this.props.handler
		return (
			<Provider store={createStore(reducer)}>
				{() => <Handler />}
			</Provider>
		)
	}
}