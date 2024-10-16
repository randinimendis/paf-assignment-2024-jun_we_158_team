
/*
import React, { useEffect } from "react";
import PostCompose from "./PostCompose";
import PostItem from "./PostItem";
import { Spinner } from "react-bootstrap";
import {getFollowingPosts} from "../feature/followingPost/followingPostSlice";
import { useDispatch, useSelector } from "react-redux";

function NewsFeedContent() {
  const dispatch = useDispatch();
  const storeFollowingPosts = useSelector((state) => state.followingPostReducer.followingPosts);

 */ 
  // use redux toolkit thunk instead
  //
  // async function getFollowingPosts() {
  //   const response = await axios({
  //     method: "post",
  //     url: "/api/v1/followingposts",
  //     headers: {
  //       Authorization: localStorage.getItem("psnToken"),
  //     },
  //     data: {
  //       id: localStorage.getItem("psnUserId"),
  //     },
  //   });

  //   if (response.data !== null && response.data.status === "success") {
  //     setPosts(response.data.payload);
  //   }
  // }
/*
  useEffect(() => {
    dispatch(getFollowingPosts());
  }, []);

  return (
    <div>  */
      {/* <h1>NewsFeedContent page</h1> */}
    /*  <PostCompose />
      {storeFollowingPosts !== null ? (
        storeFollowingPosts.map((post) => {
          return (
            <PostItem
              key={post.post.id}
              postId={post.post.id}
              userId={post.user.id}
              firstName={post.user.firstName}
              lastName={post.user.lastName}
              content={post.post.content}
              image={post.post.image}
              loveList={post.post.love}
              shareList={post.post.share}
              commentList={post.post.comment}
              postDate={post.post.createdAt}*/
              /**  deletePost={() => dispatch(deletePost(post.post.id))}  */

     /*       />
          );
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
}

export default NewsFeedContent;*/

import axios from "axios";
import React, { useEffect } from "react";
import PostCompose from "./PostCompose";
import PostItem from "./PostItem";
import { Spinner } from "react-bootstrap";
import { getFollowingPosts, deletePost } from "../feature/followingPost/followingPostSlice"; // Adjust the import path as necessary
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function NewsFeedContent() {
  const dispatch = useDispatch();
  const storeFollowingPosts = useSelector((state) => state.followingPostReducer.followingPosts);

  useEffect(() => {
    dispatch(getFollowingPosts());
  }, []);

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  function showSuccessMessage(inputMessage) {
    toast.success(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function showFailMessage(inputMessage) {
    toast.error(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  
  /**deleted post  */


  async function deletePost(postId) {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/v1/deletepost/${postId}`, // Replace with your API endpoint for deleting posts
        headers: {
          Authorization: localStorage.getItem("psnToken"),
        },
      });

      if (response.data !== null && response.data.status === "success") {
        showSuccessMessage("Post deleted successfully!");
        dispatch(getFollowingPosts());
      } else {
        showFailMessage("Failed to delete post. Please try again later.");
      }
    } catch (error) {
      showFailMessage("Failed to delete post. Please try again later.");
    }
  }

  function handleDelPost(postId) {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(postId);
    }
  }

  return (
    <div>
      <PostCompose />
      {storeFollowingPosts!== null? (
        storeFollowingPosts.map((post) => {
          return (
            <PostItem
              key={post.post.id}
              postId={post.post.id}
              userId={post.user.id}
              firstName={post.user.firstName}
              lastName={post.user.lastName}
              content={post.post.content}
              image={post.post.image}
              loveList={post.post.love}
              shareList={post.post.share}
              commentList={post.post.comment}
              postDate={post.post.createdAt}
              deletePost={() => handleDelPost(post.post.id)}
           /*   <Button variant="danger" onClick={() => handleDeletePost(post.id)}>Delete</Button>*/
            />
          );
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
}

export default NewsFeedContent;

