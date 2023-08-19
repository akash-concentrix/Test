import { Navigate, Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import Landing from "./pages";
import BlogPage from './pages/blog';
import UserPage from './pages/user';
import LoginPage from './pages/login';
import Page404 from './pages/404';
import ProductsPage from './pages/products';
import DashboardAppPage from './pages/dashboard';
import TaskListPage from './pages/tasks';
import PrivateRoutes from './providers/privateRoutes';

const Router = () => {

  return (
    <Routes>
      <Route path='/' element={<Landing />} index={true} />
      <Route path='/login' element={<LoginPage />} index={true} />
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