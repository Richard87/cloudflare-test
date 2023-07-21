import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import {Theme} from "../components/Theme";
import "../styles/globals.css";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={2}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <ClerkProvider {...pageProps}>
            <Component {...pageProps} />
          </ClerkProvider>
        </Theme>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
