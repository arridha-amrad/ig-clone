import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountContainer from "../../components/AccountContainer";
import AccountButton from "../../components/AccountButton";
import AccountProfile from "../../components/AccountProfile";
import MyAlert from "../../components/MyAlert";
import { EditProfileData } from "../../dto/AuthDTO";
import { updateUserData } from "../../redux/reduxActions/AuthActions";
import { RootState } from "../../redux/Store";
import AccountInput from "../../components/InlineInput";
import AccountTextArea from "../../components/InlineTextArea";

interface EditProfileProps {}

const EditProfile: React.FC<EditProfileProps> = () => {
  document.title = "Edit Profile - Instagram";

  const { authenticatedUser, loadingAuth, isBlocked } = useSelector(
    (state: RootState) => state.auth
  );

  const { messages } = useSelector((state: RootState) => state.message);

  const dispatch = useDispatch();

  const [states, setStates] = useState<EditProfileData>({
    email: "",
    username: "",
    fullName: "",
    website: "",
    bio: "",
    phoneNumber: "",
    gender: "",
  });

  useEffect(() => {
    setStates({
      ...states,
      email: authenticatedUser.email,
      username: authenticatedUser.username,
      fullName: authenticatedUser.fullName,
      website: authenticatedUser.website,
      bio: authenticatedUser.bio,
      phoneNumber: authenticatedUser.phoneNumber,
      gender: authenticatedUser.gender,
    });
    // eslint-disable-next-line
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStates({
      ...states,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(updateUserData(states));
  };

  const { email, username, fullName, website, phoneNumber, bio, gender } =
    states;

  return loadingAuth && isBlocked ? (
    <></>
  ) : (
    <AccountContainer>
      <AccountProfile
        username={authenticatedUser.username}
        imgUrl={authenticatedUser.imageURL}
        enableChangeProfile={true}
      />
      <form onSubmit={handleSubmit}>
        <AccountInput
          onChange={handleChange}
          value={fullName}
          label="Name"
          name="fullName"
        >
          <p>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </p>
          <p>You can only change your name twice within 14 days.</p>
        </AccountInput>
        <AccountInput
          onChange={handleChange}
          value={username}
          label="Username"
          name="username"
        />
        <AccountInput
          onChange={handleChange}
          value={website}
          label="Website"
          name="website"
        />
        <AccountTextArea
          onChange={handleChange}
          value={bio}
          label="Bio"
          name="bio"
        >
          <p>
            <span>Personal Information</span> Provide your personal information,
            even if the account is used for a business, a pet or something else.
            This won't be a part of your public profile.
          </p>
        </AccountTextArea>
        <AccountInput
          onChange={handleChange}
          value={email}
          label="Email"
          name="email"
        />
        <AccountInput
          onChange={handleChange}
          value={phoneNumber}
          label="Phone Number"
          name="phoneNumber"
        />
        <AccountInput
          onChange={handleChange}
          value={gender}
          label="Gender"
          name="gender"
        />
        <AccountButton
          isDisabled={username?.trim() === "" || email?.trim() === ""}
          text="Submit"
        ></AccountButton>
      </form>

      {messages.map((message) => (
        <MyAlert key={message.id} message={message.text} type={message.type} />
      ))}
    </AccountContainer>
  );
};

export default EditProfile;
