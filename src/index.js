









// index.js

// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/Root";
import MainRoutes from "./routes/MainRoutes"; // Import AdminRoutes component
import AdminRoutes from "./routes/AdminRoutes"; // Import AdminRoutes component
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

console.log('Starting application initialization'); // Log at the beginning of the file to indicate the start of application initialization

// Create routes
const routes = (
  <Router>
    <Routes>
      <Route path="/*" element={<Root />} />
      <Route path="/main/*" element={<MainRoutes />} /> {/* Include AdminRoutes component */}
      <Route path="/admin/*" element={<AdminRoutes />} /> {/* Include AdminRoutes component */}
    </Routes>
  </Router>
);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {routes}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

console.log('Application initialized successfully'); // Log at the end to indicate successful initialization
