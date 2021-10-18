import { FC } from "react";
import styled from "styled-components";
import { VSpacer } from "../styledComponents/spacer-el";
import BirthDayCakeIcon from "../icons/birthday-cake.svg";
import { AuthTitle } from "./AuthPage";
import { BirthDayState } from "../pages/auth/Register";

interface BirthDayFormProps {
  data: BirthDayState;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  isLoading: boolean;
}

const BirthDayForm: FC<BirthDayFormProps> = ({
  data,
  handleSubmit,
  handleChange,
  isLoading,
}) => {
  const months = [
    "--month--",
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const createDate = () => {
    let dates: string[] = ["--date--"];
    for (let i = 1; i <= 31; i++) {
      dates.push(i.toString());
    }
    return dates;
  };

  const createYears = () => {
    let years: string[] = ["--year--"];
    for (
      let startYear = 1950;
      startYear < new Date().getFullYear();
      startYear++
    ) {
      years.push(startYear.toString());
    }
    return years;
  };

  return (
    <>
      <AuthTitle>
        <img src={BirthDayCakeIcon} alt="icon" />
        <p className="title">Add Your Birthday</p>
        <p className="info">
          This won't be a part of your public profile.
          <span>&nbsp;Why do I need to provide my birthday?</span>
        </p>
      </AuthTitle>
      <VSpacer aa_length="20px" />
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Select name="month" onChange={handleChange} value={data.month}>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </Select>
          <Select name="date" onChange={handleChange} value={data.date}>
            {createDate().map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </Select>
          <Select name="year" onChange={handleChange} value={data.year}>
            {createYears().map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </FormContainer>
        <Text>
          Use your own birthday, even if this account is for a business, a pet,
          or something else.
        </Text>
        <Button
          disabled={
            data.date === "" ||
            data.month === "" ||
            data.year === "" ||
            data.date === "--date--" ||
            data.month === "--month--" ||
            data.year === "--year--" ||
            isLoading
          }
          type="submit"
        >
          {isLoading ? "loading..." : "Next"}
        </Button>
        <VSpacer aa_length="20px" />
      </form>
    </>
  );
};

const Button = styled.button`
  width: 100%;
  background-color: var(--lightBlue);
  color: #fff;
  border: none;
  outline: none;
  :disabled {
    background-color: var(--veryLightBlue);
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Select = styled.select`
  display: inline;
  height: 35px;
  outline: none;
  border: 1px solid #585858;
  color: #585858;
  padding: 0px 5px;
  border-radius: 5px;

  option {
    color: #333;
  }
`;

const Text = styled.p`
  text-align: center;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #aaa;
`;

export default BirthDayForm;
