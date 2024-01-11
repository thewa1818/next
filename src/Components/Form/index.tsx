import React, { useState, useEffect } from "react";
import { StyledButton, StyledFormWrapper, StyledInput } from "./style";
import { type } from "os";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

const Form = () => {
  // const [value, setValue] = useState<string>("");

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({
    id: 0,
    title: "",
    body: "",
  });
  const [editPost, setEditPost] = useState<Post>({
    id: 0,
    title: "",
    body: "",
  });

  // データ呼び出します
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(res.data, "res");
        setPosts(res.data);
      } catch (error) {
        console.error("error message 落ちた！！！", error);
      }
    };

    fetchData();
  }, []);

  const handleAddPost = async () => {
    console.log(newPost, "中身をチェック");

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      console.log(res.data, "res");
      setPosts([...posts, res.data]);

      // 登録した後に、newPostのinputのvalueを空にしている＝入力欄を空にしているだけ
      setNewPost({ id: 0, title: "", body: "" });
    } catch (error) {
      console.error("error message 落ちた！！！", error);
    }
  };

  const handleEdit = async () => {
    // 早期リターン
    if (!editPost) return;

    // 編集のapiの処理
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${editPost.id}`,
        editPost
      );
      const updatePost = posts.map((item) =>
        item.id === editPost.id ? res.data : item
      );
      setPosts(updatePost);

      // 登録した後に、editPostのinputのvalueを空にしている＝入力欄を空にしているだけ
      setEditPost({ id: 0, title: "", body: "" });
    } catch (error) {
      console.error("error message 落ちた！！！", error);
    }
  };

  const handleDelete = async (postId: number) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      const updatePost = posts.filter((item) => item.id !== postId);
      console.log(updatePost, "updatePost");
      setPosts(updatePost);
    } catch (error) {
      console.error("error message 落ちた！！！", error);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledInput
        type="text"
        value={newPost.title}
        placeholder="タイトルを入力してください"
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <StyledInput
        type="text"
        value={newPost.body}
        placeholder="本文を入力してください"
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <StyledButton onClick={handleAddPost}>送信</StyledButton>

      <StyledInput
        type="text"
        value={editPost.title}
        placeholder="タイトルを入力してください"
        onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
      />

      <StyledInput
        type="text"
        value={editPost.body}
        placeholder="タイトルを入力してください"
        onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
      />

      <StyledButton onClick={(e) => editPost}>編集したものを送信</StyledButton>

      <div>
        {posts.map((item, index) => (
          <div key={index}>
            <p>{index}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <button onClick={() => setEditPost(item)}>編集</button>
            <button onClick={() => handleDelete(item.id)}>削除</button>
          </div>
        ))}
      </div>
    </StyledFormWrapper>
  );
};

export default Form;
