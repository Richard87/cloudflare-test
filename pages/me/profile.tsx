import Navigationbar from "../../components/Navigationbar";
import Footer from "../../components/Footer";
import {useClerk} from "@clerk/nextjs";
import {CircularProgress, Grid, TextField} from "@mui/material";
import useApi from "../../components/useApi";
import {HandleErrorWithToast, SuccessToast} from "../../components/Toasts";
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
  const {apiClient, hooks} = useApi();
  const {data: member, isLoading} = hooks.useQuery("/api/members/:memberId/private", {params: {memberId}});

  const onSaveName = async (e) => {
    try {
      await apiClient.post("/api/members/change-name", {
        name: e.target.value,
        memberId: memberId
      })
      SuccessToast("Lagret!");
    } catch (e) {
      HandleErrorWithToast(e);
    }
  }
  
  const onSaveLocation = async (e) => {
    try {
      await apiClient.post("/api/members/change-location", {
        location: e.target.value,
        memberId: memberId
      })

      SuccessToast("Lagret!");
    } catch (e) {
      HandleErrorWithToast(e);
    }
  }

  const onSaveEmail = async (e) => {
    try {
      await apiClient.post("/api/members/change-email", {
        email: e.target.value,
        memberId: memberId
      })

      SuccessToast("Lagret!");
    } catch (e) {
      HandleErrorWithToast(e);
    }
  }

  const onSavePassword = async (e) => {
    try {
      await apiClient.post("/api/members/change-password", {
        password: e.target.value,
        memberId: memberId
      })

      SuccessToast("Lagret!");
    } catch (e) {
      HandleErrorWithToast(e);
    }
  }
  
  return (
    <>
      <Navigationbar
        roles={roles}
        signedIn={!!memberId}
        onLogin={() => clerk.openSignIn()}
        onLogout={() => clerk.signOut()}
      />
      {isLoading
        ? <CircularProgress />
        : <>
          <Grid container spacing={2} minHeight={500} justifyContent={"center"}>
            <Grid item xs={8}>
                <h1>Hi {member.name}</h1>
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth name={"name"}
                defaultValue={member.name}
                placeholder={"Navn"}
                onBlur={onSaveName}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth name={"email"}
                defaultValue={member.email}
                placeholder={"E-post"}
                onBlur={onSaveEmail}
              />
            </Grid>
            <Grid item xs={8}>
                <TextField
                  fullWidth name={"location"}
                  defaultValue={member.location}
                  placeholder={"Sted"}
                  onBlur={onSaveLocation}
                />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth name={"password"}
                defaultValue={""}
                placeholder={"Sett nytt passord"}
                type={"newPassword"}
                onBlur={onSavePassword}
              />
            </Grid>
          </Grid>
        </>}
      <Footer />
    </>
  )
}