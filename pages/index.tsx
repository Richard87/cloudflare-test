import { useClerk} from "@clerk/nextjs";
import { useSignUp } from "@clerk/nextjs";

import {buildClerkProps, clerkClient, getAuth} from "@clerk/nextjs/server";
import Navigationbar from "../components/Navigationbar";
import LandingRegister from "../components/LandingRegister";
import IconView from "../components/IconView";
import Footer from "../components/Footer";
import {HandleErrorWithToast, SuccessToast} from "../components/Toasts";

export const runtime = 'experimental-edge';
export const getServerSideProps = async (ctx) => {
  const {userId} = getAuth(ctx.req);

  const user = userId ? await clerkClient.users.getUser(userId) : null;
  const memberId = user?.publicMetadata?.member_id ?? null;
  const roles = user?.publicMetadata?.roles ?? [];

  return { props: { ...buildClerkProps(ctx.req),memberId, roles } };
}

export default function Home({memberId, roles}) {
  const clerk = useClerk();
  const { signUp, setActive } = useSignUp();

  const postRegisterUser = async ({ password, emailAddress }) => {
    try {
      const results = await signUp.create({ emailAddress, password });

      if (results.status === "complete"){
        await setActive({session: results.createdSessionId})
      }

      window.scrollTo(0, 0);
      SuccessToast("Bruker registrert!");
    } catch (err: any) {
      HandleErrorWithToast(err.errors[0] ?? err);
    }
  };

  return (
    <>
      <Navigationbar 
        roles={roles}
        signedIn={!!memberId}
        onLogin={() => clerk.openSignIn()}
        onLogout={() => clerk.signOut()} 
      />

      <LandingRegister onSignup={postRegisterUser} signedIn={!!memberId} />

      <IconView />
      <Footer />

    </>
  );
}
