import ExpendablePanel from "./ExpendablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

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
      List of photos here
    </ExpendablePanel>
  );
}

export default AlbumListItem;
