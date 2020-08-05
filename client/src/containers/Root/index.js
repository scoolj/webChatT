import React from 'react';

// redux
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducers from '../../redux/rootReducers';

import App from './App';

// rebass
import { Provider as RebassProvider, } from 'rebass';

const store = createStore(rootReducers, {}, composeWithDevTools());

const Root = () => (
	<ReduxProvider store={store}>
		<RebassProvider
			theme={{
				colors: {
					grayxdark: "#C71585",
					graydark: "#FFB6C1",
					graylight: "#DB7093",
					graysoft: "#C71585",
					graywhite: "#FF1493",
					purple: "#000",
					purplesoft: "#000",
					purpledark: "#C71585",
				},
				shadows: {
					bottom: '0 1px 0 rgba(0,0,0,.2), 0 2px 0 rgba(0,0,0,.06)',
					right: '0 0 20px rgba(0,0,0,.5), 0 0 21px rgba(0,0,0,.06)',
				},
			}}
		>
			<App />
		</RebassProvider>
	</ReduxProvider>
)

export default Root;