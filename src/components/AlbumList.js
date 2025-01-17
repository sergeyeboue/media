import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";
import Skeleton from "./skeleton";
import Button from "./Button";
import ExpendablePanel from "./ExpendablePanel";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useCreateAlbumMutation();

  const handleClick = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    // content =
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <h3>error...</h3>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;

      return (
        <ExpendablePanel key={album.id} header={header}>
          List of photos here
        </ExpendablePanel>
      );
    });
  }

  return (
    <div>
      <div>
        AlbumList For {user.name}
        <Button onClick={handleClick}> + Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
