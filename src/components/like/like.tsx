/*import { useState, useEffect } from "react";

export const Like = () => {
  var userId = 123;
  const [likes, setLikes] = useState([]);
  const handleLike = () => {
    // Check if the user has already liked the post
    const userLiked = likes.includes(userId);

    // If the user has not liked the post, add the like
    if (!userLiked) {
      setLikes([...likes, userId]);
    }

    // If the user has already liked the post, remove the like
    else {
      setLikes(likes.filter((id) => id !== userId));
    }
  };
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    setLikes(savedLikes);
  }, []);
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  return (
    <button onClick={handleLike}>
      {likes.includes(userId) ? (
        <>
          <i className="fas fa-thumbs-up"></i> Liked
        </>
      ) : (
        <>
          <i className="far fa-thumbs-up"></i> Like
        </>
      )}
    </button>
  );
};*/
