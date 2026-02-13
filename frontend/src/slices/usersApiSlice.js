import { apiSlice } from "./apiSlice";
import { logout } from "./authSlice";
const USERS_URL = '/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body: data
            })
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
            url: `${USERS_URL}/profile`,
            method: 'PUT',
            body: data,
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateProfileMutation } = usersApiSlice;