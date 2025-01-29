import React from "react";
import PhotosListItems from "./PhotosListItems";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleClick = () => {
    addPhoto(album);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4}></Skeleton>;
  } else if (error) {
    content = <div>error fetchin photos ...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItems key={photo.id} photo={photo}></PhotosListItems>;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold"> Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleClick}>
          + add photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}
