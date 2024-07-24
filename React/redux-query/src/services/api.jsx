import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints: (builder) => ({
        getApiByName: builder.query({
            query: () => '/comments',
        }),

        createPost: builder.mutation({
            query: (newPost) => ({
                url: '/comments',
                method: 'POST',
                body: newPost,
            })
        }),

        deletePost:builder.mutation({
            query: (id) => ({
                url:`/comments/ ${id}`,
                method:'DELETE',
            })
        }),

        updatePost: builder.mutation({
            query: ({id,...updatedPost}) => ({
                url: `/comments/${id}`,
                method:'PUT',
                body: updatedPost
            })
        })
    }) 
   
})




export const { useGetApiByNameQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = api;