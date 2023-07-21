import { AppBar, Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import landingPage from "../public/images/landingPage.jpg";

//Navigationbar

export const AppBarWrapper = styled(AppBar)`
  color: white;
  height: 140px;
  width: 100%;

  @media (max-width: 700px) {
    height: 100px;
  }
`;

export const MenuItemWrapper = styled.h6`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  color: #4e4234;
`;

export const TitleWrapper = styled.h4`
  color: #00235b;
  font-size: 44px;
  font-family: Comfortaa;
  letter-spacing: 0.05em;
  margin-top: 40px;
  margin-left: 60px;
  margin-bottom: 40px;
  align: left;
  font-weight: 700;
  flex-grow: 1;

  @media (max-width: 700px) {
    margin-left: 30px;
    font-size: 30px;
  }
`;
export const AppBarActions = styled.div`
  color: #4E4234;
  font-size: 16px;
  font-family: Comfortaa;
  letter-spacing: 0.05em;
  margin-right: 60px;

  @media (max-width: 700px) {
    margin-right: 30px;
  }
`;

//Landingpage registration

export const ImageWrapper = styled.div<{ $registered?: boolean }>`
  height: 959px;
  padding-top: 88px;
  max-width: 100%;
  background-image: url(${landingPage.src});
  background-size: cover;
  background-position: center center;
  box-shadow: ${(props) =>
    props.$registered ? "inset 0 0 0 1000px rgba(0, 35, 91, 0.7);" : ""};
`;

export const BoxWrapper = styled.div`
  width: 691px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 247, 236, 0.9);
  border-radius: 20px;
  color: #4e4234;
  box-sizing: border-box;
  padding: 61px;

  @media (max-width: 700px) {
    width: 80%;
    padding: 30px;
  }
`;

export const BoxWrapperConfirmed = styled(BoxWrapper)`
  width: 850px;
  padding-top: 100px;
  text-align: center;
  font-family: Inter;
  @media (max-width: 850px) {
    padding-top: 60px;
    width: 80%;
  }
`;

export const HeadlineText = styled.span`
  font-weight: 700;
  font-size: 41px;
  line-height: 50px;
  letter-spacing: 0.05em;
  font-family: "Comfortaa";
  text-transform: uppercase;
  color: #e55807;
  @media (max-width: 700px) {
    font-size: 26px;
    line-height: 35px;
  }
`;

export const RegisteredHeadline = styled(HeadlineText)`
  && {
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-family: Comfortaa;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 24px;
    }
  }
`;

export const PreRegText = styled.span`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const KeepUpdated = styled.span`
  font-family: "Inter";
  font-style: light;
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const AccountCreation = styled.div`
  padding-top: 39px;
  font-weight: 700;
  font-size: 21px;
  line-height: 23px;
  margin-bottom: 30px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const InputFieldWrapper = styled(TextField)`
  && {
    width: 550px;
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

export const SubmitButton = styled(Button)`
&& {
border-radius: 10px;
font-family: Inter;
font-weight: 700;
font-color: #FFF7EC
font-size: 16px;
text-transform: uppercase;
padding: 20px;
height: 42px;
width: 100%;

@media (max-width: 700px) {
    margin-top: 10px;
  }
}
`;

export const QuestionareButton = styled(SubmitButton)`
  && {
    width: 70%;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

//Icon view landingPage

export const IconViewWrapper = styled.div`
  text-align: center;
  padding-top: 109px;
  margin-bottom: 175px;
  @media (max-width: 700px) {
    margin-bottom: 116px;
  }
`;

export const IconGrid = styled(Grid)`
  width: 207px;
  height: 249px;
  border-radius: 20px;
  background-color: white;
  @media (max-width: 700px) {
    width: 168px;
  }
`;

export const IconImage = styled.img`
  margin-top: 39px;
  margin-bottom: 39px;
  height: 120px;
  @media (max-width: 700px) {
    margin-top: 34px;
    margin-bottom: 34px;
  }
`;

export const IconLabel = styled.div`
  && {
    width: 207px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 51px;
    font-family: Inter;
    font-weight: 700;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    padding: 10px;
    background: #00235b;

    @media (max-width: 700px) {
      width: 168px;
    }
  }
`;

//Footer components

export const FooterSection = styled.div`
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
`;

export const BoldFooterText = styled.span`
  font-weight: bold;
`;

export const CopyrightText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.4);
`;

export const FooterWrapper = styled.div`
  background-color: #00235b;
  width: "100%";
  padding-top: 92px;
  padding-left: 81px;
  padding-bottom: 112px;
  @media (max-width: 700px) {
    padding-bottom: 72px;
    padding-left: 52px;
  }
`;
