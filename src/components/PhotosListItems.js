import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

export default function PhotosListItems({ photo }) {
  const [removePhoto, removePhotoResults] = useRemovePhotoMutation();

  const handleClick = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleClick} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" src={photo.url}></img>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl"></GoTrashcan>
      </div>
    </div>
  );
}
