// src/App.jsx
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home" element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
