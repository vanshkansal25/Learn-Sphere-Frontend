import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000/api/v1',
    credentials:'include', // so that we include cookies also for authorization
    prepareHeaders:(headers)=>{
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Course', 'Order'],  
  /* categories for cache invalidation & refetching.

    Example: if you invalidateTags: ['User'], RTK Query will refetch any queries that use the "User" tag.
  */
  endpoints: () => ({}),
});