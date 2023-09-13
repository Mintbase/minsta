import { constants } from "@/constants";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graph.mintbase.xyz/${constants.network}`,
  cache: new InMemoryCache(),
  headers: {
    "mb-api-key": "anon",
  },
});

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default DataProvider;
