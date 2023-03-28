import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import CalculatorUI from './components/Calculator';
import Home from './home/home';
import CommentSpace from './components/getQuotes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<CalculatorUI />} />
      <Route path="quote" element={<CommentSpace />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
