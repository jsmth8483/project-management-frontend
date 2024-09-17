import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LandingPage from './components/LandingPage';
import SignupPage from './components/registration/SignupPage';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/taskflow' element={<LandingPage />} />
				<Route path='/signup' element={<SignupPage />} />
			</Routes>
		</>
	);
}

export default App;
