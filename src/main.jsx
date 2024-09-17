import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Router>
	</StrictMode>
);
