import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // function pause for testing loading state

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
    fetchFn: async (...args) => {
      await pause(1000); // pause for testing loading state
      return fetch(...args); // fetch function to make the request
    },
  }),

  endpoints(builder) {
    return {
      // pour la suppression d'un album
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [
            {
              type: "Album",
              id: album.userId,
            },
          ];
        },
        query: (album) => ({
          url: `albums/${album.id}`,
          method: "DELETE",
        }),
      }),
      // creer un album d'un user
      createAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [
            {
              type: "Album",
              id: user.id,
            },
          ];
        },
        query: (user) => ({
          url: "albums",
          body: {
            title: faker.commerce.productName(),
            userId: user.id,
          },
          method: "POST",
        }),
      }),
      // recupere les albums d'un user
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          return [
            {
              type: "Album",
              id: user.id,
            },
          ];
        },
        query: (user) => ({
          url: "albums",
          params: {
            userId: user.id,
          },
          method: "GET",
        }),
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useCreateAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
