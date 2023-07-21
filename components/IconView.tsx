import { Grid } from "@mui/material";
import {
  HeadlineText,
  IconGrid,
  IconImage,
  IconLabel,
  IconViewWrapper,
} from "../styles/styledComponents";
import Link from "next/link";

const IconView = () => {
  return (
    <IconViewWrapper>
      <HeadlineText>
        VELKOMMEN TIL HAPPYDOGS!
        <span style={{ color: "#000" }}>
          {" "}
          <br />
          SIDEN LANSERES SNART <br /> - FØLG MED
        </span>
      </HeadlineText>
      <Grid
        container
        gap={3}
        style={{ marginTop: "38px", justifyContent: "center" }}
      >
        <Link href="/">
          <IconGrid item>
            <IconImage src={"/images/dogfaceIcon.png"} />
            <IconLabel>Avl</IconLabel>
          </IconGrid>
        </Link>
        <Link href="/">
          <IconGrid item>
            <IconImage src={"/images/puppyIcon.png"} />
            <IconLabel>Valper</IconLabel>
          </IconGrid>
        </Link>
        <Link href="/">
          <IconGrid item>
            <IconImage src={"/images/clubIcon.png"} height={"120px"} />
            <IconLabel>Klubber</IconLabel>
          </IconGrid>
        </Link>
        <Link href="/">
          <IconGrid item>
            <IconImage src={"/images/breederIcon.png"} />
            <IconLabel>Oppdrettere</IconLabel>
          </IconGrid>
        </Link>
      </Grid>
    </IconViewWrapper>
  );
};

export default IconView;
