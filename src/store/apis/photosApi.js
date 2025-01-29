import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "Photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      //recuperer les photos
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: "photo", id: photo.id };
          });

          tags.push({ type: "albumPhoto", id: album.id });
          console.log(tags);
          return tags;
        },
        query: (album) => ({
          url: "photos",
          params: {
            albumId: album.id,
          },
          method: "GET",
        }),
      }),

      //ajouter une photos
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "albumPhoto", id: album.id }];
        },
        query: (album) => {
          return {
            url: "photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),

      //supprimer une photo
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            method: "DELETE",
            url: `photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export { photosApi };
export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
