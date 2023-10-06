/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query minsta_fetch_feed_minted_tokens(\n    $accountId: String!\n    $contractAddress: String\n    $limit: Int\n    $offset: Int\n  ) {\n    token: mb_views_nft_tokens(\n      where: {\n        minter: { _eq: $accountId }\n        nft_contract_id: { _eq: $contractAddress }\n        burned_timestamp: { _is_null: true }\n        metadata_content_flag: { _is_null: true }\n        nft_contract_content_flag: { _is_null: true }\n      }\n      order_by: { minted_timestamp: desc },\n       offset: $offset,\n       limit: $limit\n    ) {\n      id: token_id\n      createdAt: minted_timestamp\n      media\n      title\n      description\n      metadata_id\n    }\n    mb_views_nft_tokens_aggregate(where: {minter: {_eq: $accountId}, nft_contract_id: {_eq: $contractAddress}, burned_timestamp: {_is_null: true}}) {\n      aggregate {\n      count\n      }\n    }\n  }\n": types.Minsta_Fetch_Feed_Minted_TokensDocument,
    "\nquery minsta_fetch_firstToken($accountId: String!, $contractAddress: String) {\n  token: mb_views_nft_tokens(where: {minter: {_eq: $accountId}, nft_contract_id: {_eq: $contractAddress}, \n    burned_timestamp: {_is_null: true}, metadata_content_flag: {_is_null: true}, nft_contract_content_flag: {_is_null: true}}, order_by: {minted_timestamp: desc}, limit: 1, offset: 0) {\n    id: token_id\n    createdAt: minted_timestamp\n    media\n    title\n    description\n    metadata_id\n  }\n}\n": types.Minsta_Fetch_FirstTokenDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query minsta_fetch_feed_minted_tokens(\n    $accountId: String!\n    $contractAddress: String\n    $limit: Int\n    $offset: Int\n  ) {\n    token: mb_views_nft_tokens(\n      where: {\n        minter: { _eq: $accountId }\n        nft_contract_id: { _eq: $contractAddress }\n        burned_timestamp: { _is_null: true }\n        metadata_content_flag: { _is_null: true }\n        nft_contract_content_flag: { _is_null: true }\n      }\n      order_by: { minted_timestamp: desc },\n       offset: $offset,\n       limit: $limit\n    ) {\n      id: token_id\n      createdAt: minted_timestamp\n      media\n      title\n      description\n      metadata_id\n    }\n    mb_views_nft_tokens_aggregate(where: {minter: {_eq: $accountId}, nft_contract_id: {_eq: $contractAddress}, burned_timestamp: {_is_null: true}}) {\n      aggregate {\n      count\n      }\n    }\n  }\n"): (typeof documents)["\n  query minsta_fetch_feed_minted_tokens(\n    $accountId: String!\n    $contractAddress: String\n    $limit: Int\n    $offset: Int\n  ) {\n    token: mb_views_nft_tokens(\n      where: {\n        minter: { _eq: $accountId }\n        nft_contract_id: { _eq: $contractAddress }\n        burned_timestamp: { _is_null: true }\n        metadata_content_flag: { _is_null: true }\n        nft_contract_content_flag: { _is_null: true }\n      }\n      order_by: { minted_timestamp: desc },\n       offset: $offset,\n       limit: $limit\n    ) {\n      id: token_id\n      createdAt: minted_timestamp\n      media\n      title\n      description\n      metadata_id\n    }\n    mb_views_nft_tokens_aggregate(where: {minter: {_eq: $accountId}, nft_contract_id: {_eq: $contractAddress}, burned_timestamp: {_is_null: true}}) {\n      aggregate {\n      count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery minsta_fetch_firstToken($accountId: String!, $contractAddress: String) {\n  token: mb_views_nft_tokens(where: {minter: {_eq: $accountId}, nft_contract_id: {_eq: $contractAddress}, \n    burned_timestamp: {_is_null: true}, metadata_content_flag: {_is_null: true}, nft_contract_content_flag: {_is_null: true}}, order_by: {minted_timestamp: desc}, limit: 1, offset: 0) {\n    id: token_id\n    createdAt: minted_timestamp\n    media\n    title\n    description\n    metadata_id\n  }\n}\n"): (typeof documents)["\nquery minsta_fetch_firstToken($accountId: String!, $contractAddress: String) {\n  token: mb_views_nft_tokens(where: {minter: {_eq: $accountId}, nft_contract_id: {_eq: $contractAddress}, \n    burned_timestamp: {_is_null: true}, metadata_content_flag: {_is_null: true}, nft_contract_content_flag: {_is_null: true}}, order_by: {minted_timestamp: desc}, limit: 1, offset: 0) {\n    id: token_id\n    createdAt: minted_timestamp\n    media\n    title\n    description\n    metadata_id\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;