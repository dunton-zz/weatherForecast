// src/reducers/reducer_weather.js
import { FETCH_WEATHER } from '../actions/index';

export default function (state=[], action) {
	switch (action.type) {
		// cases map with the action types in the index.js action
		case FETCH_WEATHER:
			// need to make new state including old info
			// along with new info, dont mutate state return
			// new version of state
			return [ action.payload.data, ...state ]; // ES^ syntax to add state to an  array, similar to conact
	}
	return state;
}