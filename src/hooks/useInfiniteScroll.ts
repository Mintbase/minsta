import { constants } from '@/constants'
import { graphQLService } from '@/data/graphqlService'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useReducer } from 'react'

const initialState = {
  items: [],
  offset: 1,
  isLoading: false,
  calledOffsets: [0],
  total: null,
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        items: [...state.items, ...action.payload],
      }
    case 'FETCH_RESET':
      return initialState

    case 'SET_TOTAL':
      return { ...state, total: action.payload }
    case 'SET_CALLED_OFFSETS':
      return {
        ...state,
        calledOffsets: [...state.calledOffsets, action.payload],
      }

    case 'SET_OFFSET':
      return { ...state, offset: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

const useInfiniteScrollGQL = (queryKey: any, isVisible: any, graphQLObj?: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchItems = async () => {
    dispatch({ type: 'FETCH_START' })

    const variables = {
      limit: 11,
         accountId: constants.proxyContractAddress,
    contractAddress: constants.tokenContractAddress,
      offset:
        state.offset === 1
          ? 0
          : (Number(state.offset) - 1) * 11,
    }

    const { data } = await graphQLService({
      query: graphQLObj.query,
      variables: variables,
    })

    dispatch({ type: 'SET_LOADING', payload: false })
    dispatch({ type: 'SET_OFFSET', payload: state.offset + 1 })
    dispatch({ type: 'SET_CALLED_OFFSETS', payload: state.offset + 1 })
    dispatch({
      type: 'SET_TOTAL',
      payload: data?.minters_aggregate?.aggregate?.count,
    })

    dispatch({
      type: 'FETCH_SUCCESS',
      payload: data?.minter,
    })

    return data?.minter
  }

  // this will be refactored soon see line 109 comment
  const router = useRouter()

  // useInfiniteQuery

  const { data, fetchNextPage, isFetchingNextPage, error } = useInfiniteQuery(
    [queryKey, state.offset, router.query.text],
    fetchItems,
    {
      getNextPageParam: () => state.offset >= 0,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      enabled:
        !state.calledOffsets.includes(state.offset) || state.offset === 0,
    }
  )

  // need to do error treatment, for now will render an error message on screen

  useEffect(() => {
    if (error) {
      console.error(error)
      dispatch({ type: 'SET_ERROR', payload: error })
    }
  }, [error])

  const handleScroll = () => {
    const hasNewPage = state.items.length < state.total

    if (!state.isLoading && isVisible && hasNewPage && !isFetchingNextPage) {
      const newOffset = state.offset + 1
      if (!state.calledOffsets.includes(newOffset)) {
        fetchNextPage()
      }
    }
  }

  // scroll mechanism, detects if users reached bottom

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [state.offset, isVisible])

  const resetItemList = () => {
    dispatch({ type: 'FETCH_RESET' })
  }

  return {
    items: state.items,
    resetItemList,
    loadingItems:
      state.items.length < state.total
        ? Array.from({ length: 3 }, (_) => ({ id: '' }))
        : null,
    total: state.total,
    error: state.error,
  }
}

export default useInfiniteScrollGQL
