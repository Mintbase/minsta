import type {
  QueryObserverResult,
  UseQueryOptions,
} from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { graphQLService, graphqlQLServiceNew } from './graphqlService'

interface UseGraphQlQueryResult {
  data: any
  error: any
  isLoading: boolean
  refetch: () => Promise<QueryObserverResult<unknown, unknown>>
  isFetching: boolean
  status: 'error' | 'success' | 'loading'
}

export interface GQLQueryOptions {
  queryName: string
  query: string
  variables: Record<string, any>
  queryOpts?: any
  queryParams?: any[]
}

export const useGraphQlQuery = ({
  queryName,
  query,
  variables,
  queryOpts = {},
  queryParams = [],
}: GQLQueryOptions): UseGraphQlQueryResult => {
  const queryObj =
    queryParams.length > 0 ? [queryName, ...queryParams] : [queryName]

  const { data, error, isLoading, refetch, isFetching, status } = useQuery(
    queryObj,
    () => graphqlQLServiceNew({ query, variables }),
    queryOpts
  )

  return { data, error, isLoading, refetch, isFetching, status }
}
