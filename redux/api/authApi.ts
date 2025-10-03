import { apiSlice } from './apiSlice';

// to build api endpoints
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData,
      }),
    }),
    activateUser: builder.mutation({
      query: (activationData) => ({
        url: '/user/activate-user',
        method: 'POST',
        body: activationData,
      }),
    }),
    socialAuth: builder.mutation({
      query: (socialData) => ({
        url: '/user/socialAuth',
        method: 'POST',
        body: socialData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/user/logout',
        method: 'GET',
      }),
    }),
    refreshToken: builder.query({
      query: () => '/user/refresh',
    }),
    getMe: builder.query({
      query: () => '/user/me',
      providesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useActivateUserMutation,
  useSocialAuthMutation,
  useLogoutMutation,
  useRefreshTokenQuery,
  useGetMeQuery,
} = authApi;