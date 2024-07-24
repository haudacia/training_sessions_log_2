import React from 'react';
import { Navigate, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Layout from './pages/Layout'; // Certifique-se de ter o componente Layout
import HomePage from './pages/Home/HomePage';
import MyWorkout from './pages/MyWorkouts';
import TrackSession from './pages/TrackSession';
import SessionHistory from './pages/SessionHistory';
import Error from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="my-workouts" element={<MyWorkout />} />
      <Route path="track-session" element={<TrackSession />} />
      <Route path="session-history" element={<SessionHistory />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
