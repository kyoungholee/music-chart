import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ChartPage from './pages/ChartPage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ChartPage />}></Route>
					<Route path="/detail/:id" element={<DetailPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
