import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
  return  comments.find((coms) => coms.id === id);
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return  comments.find((coms) => coms.postId === postId);
}

export function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((commentsData) => {
    if (commentsData.id === id) {
      return {
        ...commentsData,
        ...body,
      };
    }

    return commentsData;
  });
}

export function deleteCommentBody(id) {
  //delete comment by id
  return comments.filter((coms) =>  coms.id !== id)
}

function generateId(comments) {
  // generates a unique id based on the length of the comments array
  return comments.length + 1;
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  const newComment = {
    id: generateId(comments),
    ...comment
  };

  comments = [...comments, newComment];
  return newComment;
}
