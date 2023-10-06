import request from "graphql-request";
import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { nearEndpoints } from "./network";
import { constants } from "@/constants";

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
    queryOpts = {},
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  const net = constants.network;
  const isTestnet = net === "testnet";

   const headers = {
    "content-type": "application/json",
    "mb-api-key": "omni-site",
    "Access-Control-Allow-Origin": "*"
  };

  const baseUrl = isTestnet
    ? nearEndpoints.testnet.graph
    : nearEndpoints.mainnet.graph;

  return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      request(baseUrl, document, queryKey[1] ? queryKey[1] : undefined, headers),
      queryOpts
  );
}
