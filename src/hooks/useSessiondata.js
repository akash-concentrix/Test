import { useQuery, useMutation } from 'react-query';
import { fetchSessionData } from '../apis/session';

import { login } from '../apis/login';

export function useSessionData() {
  const { data, isLoading, isError, error } = useQuery('sessionData', fetchSessionData);
  return { data, isLoading, isError, error };
}

export function useLogin() {
  const mutation = useMutation((data) => login(data));
  return mutation;
}