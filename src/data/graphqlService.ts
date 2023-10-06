import { nearEndpoints } from "./network";
import { constants } from "@/constants";
import request, { gql } from "graphql-request";

export type GqlFetchResult<T> = {
  data?: T;
  error?: string;
};

export const graphqlQLServiceNew = async ({
  query,
  variables,
  network,
}: {
  query: any;
  variables?: Record<string, unknown>;
  network?: "testnet" | "mainnet";
}) => {
  const net = network ?? constants.network;
  const isTestnet = net === "testnet";

  const baseUrl = isTestnet
    ? 'https://interop-testnet.hasura.app/v1/graphql'
    : 'https://interop-mainnet.hasura.app/v1/graphql';


  const headers = {
    "content-type": "application/json",
    "mb-api-key": "anon",
    "Access-Control-Allow-Origin": "*"
  };

  const queryLoad = () => request(baseUrl, query, variables, headers);

  return await queryLoad();
};

export const graphQLService = async ({
  query,
  variables,
  network,
}: {
  query: any;
  variables?: Record<string, unknown>;
  network?: "testnet" | "mainnet";
}) => {
  try {
    const data = await graphQlFetch(query, variables, network).then(
      async (data: Response) => {
        const res = await data.json();
        return res.data;
      }
    );

    return { data };
  } catch (error) {
    console.log(error, "error");
    return { error: `Query Error: ${error}` };
  }
};

export const graphQlFetch = async (
  query: string,
  variables: any,
  network?: "testnet" | "mainnet"
): Promise<Response> => {
  const net = network ?? constants.network;
  const isTestnet = net === "testnet";

  const baseUrl = isTestnet
    ? 'https://interop-testnet.hasura.app/v1/graphql'
    : 'https://interop-mainnet.hasura.app/v1/graphql';

  const res = fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
    headers: {
      "content-type": "application/json",
      "mb-api-key": "omni-site",
    },
  });

  return await res;
};
