import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<>
			<Routes>
				<Route path='/taskflow' element={<LandingPage />} />
				<Route path='/' element={<MainPage />} />
			</Routes>
		</>
	);
}

export default App;
