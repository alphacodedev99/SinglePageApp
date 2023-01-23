import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import getData from './utils/getData';
function App() {
	useEffect(() => {
		getData().then((data) => console.log(data));
	}, []);
	return (
		<div className='container mx-auto'>
			<Outlet />
		</div>
	);
}

export default App;
