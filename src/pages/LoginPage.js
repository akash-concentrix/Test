import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import { ToastContainer } from "react-toastify";
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import useResponsive from '../hooks/useResponsive';

import Logo from '../components/logo';
import Iconify from '../components/iconify';

import { LoginForm } from '../sections/auth/login';
import { useLogin } from '../hooks/useSessiondata';

import { showNotification } from "../components/notification";
import 'react-toastify/dist/ReactToastify.css';



const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const LoginPage = () => {
  const mdUp = useResponsive('up', 'md');
  const loginMutation = useLogin();
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const handleLogin = async (email, password) => {
    try {
      await loginMutation.mutateAsync({ email, password }, {
        onSuccess: (data) => {
          queryClient.setQueryData('token', data);
          localStorage.setItem('token', JSON.stringify(data));
          showNotification('success', 'Welcome', 2000);
          navigate("/dashboard");
        },
      });
    } catch (error) {
      const message = `Login failed: ${error?.response?.data?.detail}`
      showNotification('error', message, 'Login Failed', 5000);
    }
  };

  return (
    <>
      <ToastContainer />
      {loginMutation.isLoading}
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <LoginForm handleLogin={handleLogin} />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}

export default LoginPage;