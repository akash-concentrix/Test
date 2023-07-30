import { Navigate, Routes, Route } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import TaskListPage from './pages/TasksPage';
import PrivateRoutes from './providers/privateRoutes';

// ----------------------------------------------------------------------

export default function Router() {
  // const routes = useRoutes([
  //   {
  //     path: '/dashboard',
  //     element: <DashboardLayout />,
  //     children: [
  //       { element: <Navigate to="/dashboard/app" />, index: true },
  //       { path: 'app', element: <DashboardAppPage /> },
  //       { path: 'user', element: <UserPage /> },
  //       { path: 'tasks', element: <TaskListPage /> },
  //       { path: 'products', element: <ProductsPage /> },
  //       { path: 'blog', element: <BlogPage /> },
  //     ],
  //   },
  //   {
  //     path: 'login',
  //     element: <LoginPage />,
  //   },
  //   {
  //     element: <SimpleLayout />,
  //     children: [
  //       { element: <Navigate to="/dashboard/app" />, index: true },
  //       { path: '404', element: <Page404 /> },
  //       { path: '*', element: <Navigate to="/404" /> },
  //     ],
  //   },
  //   {
  //     path: '*',
  //     element: <Navigate to="/404" replace />,
  //   },
  // ]);

  // return routes;



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