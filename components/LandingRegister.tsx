import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
} from "@mui/material";
import {
  AccountCreation,
  BoxWrapper,
  BoxWrapperConfirmed,
  HeadlineText,
  RegisteredHeadline,
  ImageWrapper,
  InputFieldWrapper,
  KeepUpdated,
  PreRegText,
  SubmitButton,
  QuestionareButton,
} from "../styles/styledComponents";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { useSignUp, useSession } from "@clerk/nextjs";
import { useSnackbar } from "notistack";

type Props = {
  signedIn: boolean;
  onSignup: (data: { emailAddress: string; password: string }) => void;
};

const LandingRegister = ({ signedIn, onSignup }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [emailInFocus, setEmailInFocus] = useState(false);
  const [passwordExist, setPasswordExist] = useState(false);
  const [checked, setChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEmail(userEmail) && passwordExist) {
      onSignup({ emailAddress: userEmail, password: userPassword });
    } else {
      enqueueSnackbar("Vennligst fyll inn feltene for å fortsette");
    }
  };

  // const PROTOTYPE_URL = "https://www.figma.com/proto/H27n1NgHHeLdPadOqO2CaE/HD---Web-site?page-id=15%3A3&type=design&node-id=27-927&viewport=4570%2C2728%2C1.11&scaling=min-zoom&starting-point-node-id=27%3A938";

  return (
    <ImageWrapper $registered={signedIn}>
      {!signedIn ? (
        <BoxWrapper>
          <HeadlineText>
            Bli med i Norges{" "}
            <span style={{ color: "#000" }}>fremtidige hunde&shy;samfunn</span>
          </HeadlineText>
          <AccountCreation>
            <PreRegText>Forhånds&shy;registreringen har startet!</PreRegText>
            <br />
            <KeepUpdated>
              Få eksklusiv tilgang ved å registrere deg under
            </KeepUpdated>
          </AccountCreation>
          <form>
            <FormControl fullWidth>
              <FormLabel>E-postadresse</FormLabel>
              <InputFieldWrapper
                InputProps={{
                  sx: {
                    borderRadius: 4,
                    backgroundColor: "white",
                    height: "59px",
                  },
                }}
                key="email"
                onChange={(e) => {
                  if (isEmail(e.target.value)) {
                    setIsValid(true);
                    setUserEmail(e.target.value);
                  }
                }}
                onFocus={() => {
                  setEmailInFocus(true);
                }}
                onBlur={() => {
                  setEmailInFocus(false);
                }}
                variant="outlined"
                type={"email"}
                required
                error={!isValid && emailInFocus}
                helperText={
                  emailInFocus && !isValid ? "Ikke gyldig e-postadresse" : ""
                }
              />
            </FormControl>
            <br />
            <FormControl fullWidth>
              <FormLabel>Passord</FormLabel>
              <InputFieldWrapper
                InputProps={{
                  sx: { borderRadius: 4, backgroundColor: "white" },
                }}
                key="password"
                onChange={(e) => {
                  if (e.target.value) {
                    setPasswordExist(true);
                    setUserPassword(e.target.value);
                  }
                }}
                variant="outlined"
                autoComplete={"new-password"}
                type="password"
              />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(!checked)}
                  color="secondary"
                />
              }
              label={
                <span>
                  Jeg samtykker til å få tilsendt oppdateringer fra HappyDogs.{" "}
                  <Link
                    target={"_blank"}
                    href="./PersonvernHappyDogs.pdf"
                    color="inherit"
                  >
                    Les mer
                  </Link>
                </span>
              }
            />

            <SubmitButton
              type="submit"
              variant="contained"
              color="secondary"
              onClick={onSubmit}
              disabled={!checked}
            >
              Registrer meg
            </SubmitButton>
          </form>
        </BoxWrapper>
      ) : (
        <BoxWrapperConfirmed>
          <RegisteredHeadline>
            Takk for at du har registrert deg!
          </RegisteredHeadline>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "70%",
              marginTop: "25px",
            }}
          >
            <p>
              <span style={{ fontWeight: "bold" }}>
                Hvilke funksjoner vil du ha på Happydogs? <br />
              </span>
              Din mening er viktig. Svar på undersøkelsen og bli med på å forme
              HappyDogs. Som takk for hjelpen får du:
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontWeight: "bold" }}>
              6 måneder premiumabonnoment <br /> Være med i trekningen av et
              gavekort fra Musti, verdi 1000kr. <br />
              <p style={{ fontWeight: "bold", paddingBottom: "15px" }}></p>
            </div>
          </div>
          <QuestionareButton
            href="https://forms.gle/TZXh5qPjiK7teJct5"
            color="secondary"
            variant="contained"
          >
            Svar på spørreundersøkelsen
          </QuestionareButton>
        </BoxWrapperConfirmed>
      )}
    </ImageWrapper>
  );
};

export default LandingRegister;
