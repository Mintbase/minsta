import { constants } from "@/constants";
import { graphqlQLServiceNew } from "@/data/graphqlService";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useReducer } from "react";
import { useMediaQuery } from "usehooks-ts";

const initialState = {
  items: [],
  offset: 1,
  isLoading: false,
  calledOffsets: [0],
  total: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    case "FETCH_RESET":
      return initialState;

    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_CALLED_OFFSETS":
      return {
        ...state,
        calledOffsets: [...state.calledOffsets, action.payload],
      };

    case "SET_OFFSET":
      return { ...state, offset: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const useInfiniteScrollGQL = (
  queryKey: any,
  isVisible: any,
  graphQLObj?: any
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const fetchNum = isDesktop ? 11 : 3;

  const fetchItems = async () => {
    dispatch({ type: "FETCH_START" });

    const variables = {
      limit: fetchNum,
      accountId: constants.proxyContractAddress,
      contractAddress: constants.tokenContractAddress,
      offset: state.offset === 1 ? 1 : (Number(state.offset) - 1) * fetchNum,
    };

    const data = await graphqlQLServiceNew({
      query: graphQLObj.query,
      variables: variables,
    }) as any


    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_OFFSET", payload: state.offset + 1 });
    dispatch({ type: "SET_CALLED_OFFSETS", payload: state.offset + 1 });
    dispatch({
      type: "SET_TOTAL",
      payload: data?.mb_views_nft_tokens_aggregate?.aggregate?.count,
    });

    dispatch({
      type: "FETCH_SUCCESS",
      payload: data?.token,
    });

    return data?.token;
  };

  // useInfiniteQuery

  const { data, fetchNextPage, isFetchingNextPage, error } = useInfiniteQuery(
    [queryKey, state.offset],
    fetchItems,
    {
      getNextPageParam: () => state.offset >= 0,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      enabled:
        !state.calledOffsets.includes(state.offset) || state.offset === 1,
    }
  );

  // need to do error treatment, for now will render an error message on screen

  useEffect(() => {
    if (error) {
      console.error(error);
      dispatch({ type: "SET_ERROR", payload: error });
    }
  }, [error]);

  const handleScroll = () => {
    const hasNewPage = state.items.length < state.total;

    if (!state.isLoading && isVisible && hasNewPage && !isFetchingNextPage) {
      const newOffset = state.offset + 1;
      if (!state.calledOffsets.includes(newOffset)) {
        fetchNextPage();
      }
    }
  };

  // scroll mechanism, detects if users reached bottom

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state.offset, isVisible]);

  const resetItemList = () => {
    dispatch({ type: "FETCH_RESET" });
  };

  const isMinthenInfiniteScrollNum = state.items.length < fetchNum;

  return {
    items: state.items,
    resetItemList,
    loadingItems:
      state.items.length < state.total && !isMinthenInfiniteScrollNum
        ? Array.from({ length: 1 }, (_) => ({ id: "" }))
        : null,
    total: state.total,
    error: state.error,
  };
};

export default useInfiniteScrollGQL;
