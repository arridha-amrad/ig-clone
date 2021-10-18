import { useRef, useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  LOADING_POST,
  STOP_LOADING_POST,
} from "../redux/reduxTypes/PostActionType";
import { RootState } from "../redux/Store";
import axiosInstance from "../utils/AxiosInterceptors";

const CreateNewPost = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { loadingPost } = useSelector((state: RootState) => state.post);
  const { authenticatedUser } = useSelector((state: RootState) => state.auth);
  const history = useHistory();

  const handleFileChange = (e: any) => {
    const file = e.target?.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }
  }, [image]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("imageFile", image);
      formData.append("description", description);
      dispatch({ type: LOADING_POST });
      axiosInstance
        .post("/post", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.status === 200) {
            history.push(`/${authenticatedUser.username}`);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch({ type: STOP_LOADING_POST }));
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ImagePreviewWrapper onClick={() => fileRef.current?.click()}>
          {preview !== "" ? <Image src={preview} alt="post" /> : "Add Image"}
          <input
            ref={fileRef}
            hidden={true}
            name="imageFile"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </ImagePreviewWrapper>
        <PostDescription
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          placeholder="description..."
        />
        <Button disabled={!image || loadingPost}>
          {loadingPost ? "loading..." : "Submit"}
        </Button>
      </form>
    </Container>
  );
};
export default CreateNewPost;

const Image = styled.img`
  object-fit: cover;
  width: 500px;
  height: 500px;
  border-radius: 5px 5px 0 0;
`;

const Container = styled.div`
  width: 500px;
  height: 100%;
  margin: 2rem auto;
`;

const ImagePreviewWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

const PostDescription = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid var(--grey);
  outline: none;
`;

const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 50px;
  background-color: var(--lightBlue);
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  :disabled {
    background-color: var(--veryLightBlue);
    cursor: unset;
  }
`;
