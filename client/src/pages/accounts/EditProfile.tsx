import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountContainer from "../../components/accounts/container/AccountContainer";
import AccountButton from "../../components/accounts/form/button";
import AccountInput from "../../components/accounts/form/input";
import AccountProfile from "../../components/accounts/profile/AccountProfile";
import MyAlert from "../../components/alert/MyAlert";
import { EditProfileData } from "../../dto/AuthDTO";
import { updateUserData } from "../../redux/reduxActions/AuthActions";
import { RootState } from "../../redux/Store";

interface EditProfileProps {}

const EditProfile: React.FC<EditProfileProps> = () => {
  document.title = "Edit Profile - Instagram";

  const [errors, setError] = useState({
    email: "",
    username: "",
  });

  const user = useSelector((state: RootState) => state.auth.authenticatedUser);

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
      email: user.email,
      username: user.username,
      fullName: user.fullName,
      website: user.website,
      bio: user.bio,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
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

  return (
    <AccountContainer>
      <AccountProfile
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        username="squarepant"
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
        <AccountInput
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
        </AccountInput>
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
          btnSize="small"
        >
          <p>Temporarily disable my account</p>
        </AccountButton>
      </form>

      {messages.map((message) => (
        <MyAlert key={message.id} message={message.text} type={message.type} />
      ))}
    </AccountContainer>
  );
};

export default EditProfile;
