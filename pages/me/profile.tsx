import Navigationbar from "../../components/Navigationbar";
import {useClerk} from "@clerk/nextjs";
import {Grid, TextField} from "@mui/material";
import {GetServerSideProps} from "next";
import {buildClerkProps, clerkClient, getAuth} from "@clerk/nextjs/server";

export const runtime = 'experimental-edge';
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {userId} = getAuth(ctx.req);
  if (!userId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const user = await clerkClient.users.getUser(userId);
  const memberId = user?.publicMetadata?.member_id ?? null;
  const roles = user?.publicMetadata?.roles ?? [];

  return { props: { ...buildClerkProps(ctx.req),userId, memberId, roles } };
}

export default function Profil({memberId, roles}) {
  const clerk = useClerk();
  
  return (
    <>
      <Navigationbar
        roles={roles}
        signedIn={!!memberId}
        onLogin={() => clerk.openSignIn()}
        onLogout={() => clerk.signOut()}
      />
      <>
          <Grid container spacing={2} minHeight={500} justifyContent={"center"}>
            <Grid item xs={8}>
                <h1>Hi Jane Doe!</h1>
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth name={"name"}
                defaultValue={"Jane Doe"}
                placeholder={"Navn"}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth name={"email"}
                defaultValue={"email@email.com"}
                placeholder={"E-post"}
              />
            </Grid>
            <Grid item xs={8}>
                <TextField
                  fullWidth name={"location"}
                  defaultValue={"The world"}
                  placeholder={"Sted"}
                />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth name={"password"}
                defaultValue={""}
                placeholder={"Sett nytt passord"}
                type={"newPassword"}
              />
            </Grid>
          </Grid>
        </>
    </>
  )
}