import ExpendablePanel from "./ExpendablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumListItem({ album }) {
  const [removeAlbum, result] = useRemoveAlbumMutation();

  const handleRemove = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        loading={result.isLoading}
        className="mr-2"
        onClick={handleRemove}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpendablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpendablePanel>
  );
}

export default AlbumListItem;
