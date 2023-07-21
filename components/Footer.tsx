import Link from "next/link";
import {
  BoldFooterText,
  CopyrightText,
  FooterSection,
  FooterWrapper,
  HeadlineText,
} from "../styles/styledComponents";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <FooterWrapper>
      <HeadlineText style={{ fontWeight: "500" }}>Happydogs</HeadlineText>
      <Grid
        container
        columnGap="146px"
        rowGap="60px"
        style={{ marginTop: "50px", marginBottom: "200px" }}
      >
        <FooterSection>
          <BoldFooterText> HappyDogs </BoldFooterText> <br />
          <br />
          T: +47 47 38 13 43 <br /> E: marie@happydogs.no
          <br /> W: www.happydogs.no
        </FooterSection>
        <FooterSection>
          <BoldFooterText> Postaddresse </BoldFooterText> <br />
          <br />
          Risbakken 8, 4013 Stavanger, Norway
        </FooterSection>
        <FooterSection>
          Org.nr.: 445 221 546 <br /> <br />
          <BoldFooterText>Chief Editor</BoldFooterText>
          <br /> Marie Hilander Gjerde <br /> <br /> {/*Give us feedback*/}
        </FooterSection>
        <FooterSection>
          <a target="_blank" href={"./PersonvernHappyDogs.pdf"}>
            {"> "}Terms and conditions
          </a>
          {/*<br />
          <br />
          {"> "}About HappyDogs
          <br />
          <br />
          {"> "}FAQ*/}
        </FooterSection>
      </Grid>
      <CopyrightText>Copyright © 2023 - HappyDogs</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;
