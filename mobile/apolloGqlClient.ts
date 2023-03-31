import { ApolloClient, InMemoryCache } from "@apollo/client";
import ExpoConstants from "expo-constants";
import invariant from "invariant";

const expoHostUri = (
  ExpoConstants.expoConfig as { hostUri?: unknown } | undefined
)?.hostUri;

invariant(
  typeof expoHostUri === "string",
  "Expo config did not have a `hostUri` field!"
);

// The GraphQL port is configured in `src/index.ts` on the server.
const URL = `http://${expoHostUri.split(":")[0]}:4000/`;

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

export default client;
