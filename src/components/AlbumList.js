import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";
import Skeleton from "./skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useCreateAlbumMutation();

  const handleClick = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    // content =
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <h3>error...</h3>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold ">AlbumList For {user.name}</h3>
        <Button loading={result.isLoading} onClick={handleClick}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
