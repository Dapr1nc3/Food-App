import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./componets/Navbar/Navagation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/logIn";
import Profile from "./pages/Profile";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache, ApolloProvider } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql", // 3001?
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Navigation showLogOut={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
};

export default App;
