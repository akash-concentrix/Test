import { Navigate, Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import TaskListPage from './pages/TasksPage';
import PrivateRoutes from './providers/privateRoutes';

const Router = () => {

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} index={true} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route element={<Navigate to="/dashboard/app" />} index={true} />
          <Route path='app' element={<DashboardAppPage />} />
          <Route path='user' element={<UserPage />} />
          <Route path='tasks' element={<TaskListPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='blog' element={<BlogPage />} />
        </Route>
      </Route>

      <Route element={< SimpleLayout />}>
        <Route element={<Navigate to="/dashboard/app" />} />
        <Route path='404' element={<Page404 />} />
        <Route path='*' element={<Navigate to="/404" />} />
      </Route>

      <Route path='*' element={<Navigate to="/404" replace />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}
export default Router;