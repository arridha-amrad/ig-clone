import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { uploadAvatar } from "../redux/reduxActions/AuthActions";

interface AvatarProps {
  username: string;
  imageURL: string;
}

const Avatar: React.FC<AvatarProps> = ({ username, imageURL }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const inputFileRef = useRef<HTMLInputElement>(null);
  const openInputFile = () => {
    inputFileRef.current?.click();
  };
  const { authenticatedUser } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const handleImageChange = (e: any) => {
    const file = e.target?.files[0];
    if (file) {
      setImage(file);
      const formData = new FormData();
      formData.append("avatarFile", file);
      dispatch(uploadAvatar(formData));
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

  return (
    <AvatarWrapper
      onClick={
        username === authenticatedUser.username ? openInputFile : undefined
      }
    >
      <AccountAvatar
        src={
          preview !== ""
            ? preview
            : username === authenticatedUser.username
            ? authenticatedUser.imageURL
            : imageURL
        }
        alt="profile"
      />
      <input
        ref={inputFileRef}
        type="file"
        name="avatarFile"
        id="fileInput"
        hidden={true}
        onChange={handleImageChange}
      />
    </AvatarWrapper>
  );
};
export default Avatar;

const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;

  @media (min-width: 736px) {
    justify-content: center;
  }
`;

const AccountAvatar = styled.img`
  height: 75px;
  width: 75px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;

  @media (min-width: 736px) {
    height: 150px;
    width: 150px;
  }
`;
