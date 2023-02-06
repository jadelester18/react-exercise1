//Call all functions inside services and log updated value/s
import { getAllUsers, getUserById, updateUser, addUser } from "./services/users";
import { getCommentById, getCommentsByPostId, updateCommentBody, deleteCommentBody, addComment } from "./services/comments";
import { getPosts, getPostsByUser, getPostById, addPost, updatePostTitle, updatePostBody, updatePost, deletePostBy, deletePostsByUserId } from "./services/posts";

console.log("---- 1 ----");
console.log(getUserById(1));
console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());
addUser({ email: "jadelesterballester@gmail.com", website: "my-website.ph" })
console.log(getAllUsers());

console.log("---- 2 ----");
console.log(getCommentById(1));
console.log(getCommentsByPostId(1));
updateCommentBody(1, {body: "my body" })
console.log(getCommentById(1));
console.log(deleteCommentBody(1));
console.log(addComment({ postId: 1,
    name: "sample",
    email: "sample@sample.sample",
    body: "sample"}));

console.log("---- 3 ----");
console.log(getPosts());
console.log(getPostsByUser(1));
console.log(getPostById(1));
console.log(addPost({ userId: 1,
    title: "sample",
    body: "sample@sample.sample"}));
updatePostTitle(101, {
        title: "this is my new title"})
console.log(getPostById(101));
updatePostBody(101, {
    body: "this is my new body"})
console.log(getPostById(101));
updatePost(101, { userId: 1, title: "This is updated post title",
    body: "This is updated post body"})
console.log(getPostById(101));
console.log(deletePostBy(101));
console.log(deletePostsByUserId(1));