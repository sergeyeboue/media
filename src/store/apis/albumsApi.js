import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
  }),
  endpoints(builder) {
    return {
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

export const { useFetchAlbumsQuery, useCreateAlbumMutation } = albumsApi;
export { albumsApi };
