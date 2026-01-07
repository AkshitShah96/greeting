function LikeButton({ likes, setLikesCount }) {

  function handleIncrement() {
    setLikesCount(likes + 1);
  }

  return (
    <button onClick={handleIncrement}>
      Likes: {likes}
    </button>
  );
}

export default LikeButton;
