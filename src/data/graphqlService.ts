import type { Network } from '@mintbase-js/sdk'
import { mbjs } from '@mintbase-js/sdk'
import { nearEndpoints } from './network'

export type GqlFetchResult<T> = {
  data?: T
  error?: string
}

export const graphQLService = async ({
  query,
  variables,
  network,
}: {
  query: any
  variables?: Record<string, unknown>
  network?: Network
}) => {
  try {
    const nearNet = network

    const data = await graphQlFetch(query, variables, network).then(
      async (data: Response) => {
        const res = await data.json()
        return res.data
      }
    )

    return { data }
  } catch (error) {
    console.log(error, 'error')
    return { error: `Query Error: ${error}` }
  }
}

export const graphQlFetch = async (
  query:string,
  variables:any,
  network?: Network, 
): Promise<Response> => {

  const net = network ??  mbjs.keys.network
  const isTestnet = net === 'testnet'

  const baseUrl = isTestnet
    ? nearEndpoints.testnet.graph
    : nearEndpoints.mainnet.graph

  const res = fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
    headers: {
      'content-type': 'application/json',
      'mb-api-key': 'omni-site',
    },
  })

  return await res
}
