import {useClerk} from "@clerk/nextjs";
import {createApiClient} from "./generated/apiClient";
import {ZodiosHooks} from "@zodios/react";

export default function useApi() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const clerk = useClerk();
  const memberId = clerk.user?.publicMetadata.member_id as string;

  const apiClient = createApiClient(baseUrl);
  apiClient.use({
    name: "Authorization",
    request: async (api, config) => {
      const token = await clerk.session?.getToken({template: "api"});
      if (!token) {
        return config;
      }
      
      return {
        ...config,
        headers: {
          Authorization: 'Bearer ' + token,
          ...config.headers,
        },
      }
    }
  })

  const hooks = new ZodiosHooks("HappyDogsAPI", apiClient);
  return {apiClient, memberId, hooks}
}