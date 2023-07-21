import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const MembersView = z
  .object({
    id: z.string().uuid(),
    clerkId: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    location: z.string().nullable(),
  })
  .partial();
const ChangeEmailCommand = z
  .object({ email: z.string().nullable(), memberId: z.string().uuid() })
  .partial();
const IResult = z.object({}).partial();
const ChangeMemberLocationCommand = z
  .object({ location: z.string().nullable(), memberId: z.string().uuid() })
  .partial();
const ChangeMemberNameCommand = z
  .object({ name: z.string().nullable(), memberId: z.string().uuid() })
  .partial();
const ChangePasswordCommand = z
  .object({ password: z.string().nullable(), memberId: z.string().uuid() })
  .partial();
const ChangeMemberTelephoneCommand = z
  .object({ telephone: z.string().nullable(), memberId: z.string().uuid() })
  .partial();
const EmailVerification = z
  .object({ status: z.string().nullable(), strategy: z.string().nullable() })
  .partial();
const EmailAddress = z
  .object({
    email_address: z.string().nullable(),
    id: z.string().nullable(),
    linked_to: z.array(z.unknown()).nullable(),
    object: z.string().nullable(),
    verification: EmailVerification,
  })
  .partial();
const UserData = z
  .object({
    birthday: z.string().nullable(),
    created_at: z.number().int(),
    email_addresses: z.array(EmailAddress).nullable(),
    external_accounts: z.array(z.unknown()).nullable(),
    external_id: z.string().nullable(),
    first_name: z.string().nullable(),
    gender: z.string().nullable(),
    id: z.string().nullable(),
    image_url: z.string().nullable(),
    last_name: z.string().nullable(),
    last_sign_in_at: z.number().int().nullable(),
    object: z.string().nullable(),
    password_enabled: z.boolean(),
    phone_numbers: z.array(z.unknown()).nullable(),
    primary_email_address_id: z.string().nullable(),
    primary_phone_number_id: z.unknown().nullable(),
    primary_web3_wallet_id: z.unknown().nullable(),
    private_metadata: z.object({}).partial().passthrough().nullable(),
    profile_image_url: z.string().nullable(),
    public_metadata: z.object({}).partial().passthrough().nullable(),
    two_factor_enabled: z.boolean(),
    unsafe_metadata: z.object({}).partial().passthrough().nullable(),
    updated_at: z.number().int(),
    username: z.unknown().nullable(),
    web3_wallets: z.array(z.unknown()).nullable(),
  })
  .partial();
const UserCreatedEvent = z
  .object({
    data: UserData,
    object: z.string().nullable(),
    type: z.string().nullable(),
  })
  .partial();

export const schemas = {
  MembersView,
  ChangeEmailCommand,
  IResult,
  ChangeMemberLocationCommand,
  ChangeMemberNameCommand,
  ChangePasswordCommand,
  ChangeMemberTelephoneCommand,
  EmailVerification,
  EmailAddress,
  UserData,
  UserCreatedEvent,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/members",
    requestFormat: "json",
    response: z.array(MembersView),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z.array(MembersView),
      },
    ],
  },
  {
    method: "get",
    path: "/api/members/:memberId/private",
    requestFormat: "json",
    parameters: [
      {
        name: "memberId",
        type: "Path",
        schema: z.string().uuid(),
      },
    ],
    response: MembersView,
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/members/change-email",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ChangeEmailCommand,
      },
    ],
    response: z.object({}).partial(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/members/change-location",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ChangeMemberLocationCommand,
      },
    ],
    response: z.object({}).partial(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/members/change-name",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ChangeMemberNameCommand,
      },
    ],
    response: z.object({}).partial(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/members/change-password",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ChangePasswordCommand,
      },
    ],
    response: z.object({}).partial(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/members/change-telephone",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ChangeMemberTelephoneCommand,
      },
    ],
    response: z.object({}).partial(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/members/clerk/signup",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UserCreatedEvent,
      },
    ],
    response: z.object({}).partial(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/hello",
    requestFormat: "json",
    response: z.void(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
