import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

import './index.css';
import App from './App';
import store from './store';

import reportWebVitals from './reportWebVitals';

const theme = createTheme({
	pallete: {
		primary: {
			main: '#DBD9DB',
			light: '#D6C8E1',
			dark: '#82A2B5',
		},
		secondary: {
			main: '#D9E6EC',
			light: '#EBFFBF',
			dark: '#96B395',
		},
	},
	typography: {
		fontSize: 10,
		button: {
			fontSize: '1rem'
		}
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
