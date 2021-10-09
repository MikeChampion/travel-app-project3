import React from "react";
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import Modal from "react-modal";
import Itinerary from "./components/Itinerary";
import Login from "./components/Login";
import AdminContext from "./context/AdminContext";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

Modal.setAppElement('#root')

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <ApolloProvider client={client}>
            <AdminContext.Provider value={React.useState(false)}>
                <Router>
                    <main className="flex flex-col items-center w-full">
                        <Navbar />
                        <Switch >
                            <Redirect exact from="/" to="/activities"></Redirect>
                            <Route path="/activities" component={Activity}></Route>
                            <Route path="/itinerary" component={Itinerary}></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/logout" component={Activity}></Route>
                        </Switch>
                    </main>
                </Router>
            </AdminContext.Provider>
        </ApolloProvider>
    );
}

export default App;
