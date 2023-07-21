import {enqueueSnackbar} from "notistack";

export const HandleErrorWithToast = (error: Error|string) => {
  console.error(error);
    
  if (error instanceof Error) {
    enqueueSnackbar(error.message, {variant: "error", preventDuplicate: true})
    return;
  } 
  
  if (typeof error === "string") {
    enqueueSnackbar(error, {variant: "error", preventDuplicate: true})
    return;
  }
}
export const SuccessToast = (message: string) => {
  enqueueSnackbar(message, {variant: "success"})
}