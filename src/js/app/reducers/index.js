import { combineReducers } from 'redux'

import prework from './prework'
import introJs from './intro-js'
import jqueryAnimation from './jquery-animation'
import jqueryEvents from './jquery-events'
import recap from './recap'

export default combineReducers({
	prework,
	introJs,
	jqueryAnimation,
	jqueryEvents,
	recap
})
