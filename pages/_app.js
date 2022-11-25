import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import user from '../reducers/user';
import tweet from '../reducers/tweet';
import hashtag from '../reducers/hashtag';
 

const store = configureStore({
  reducer: {user, tweet, hashtag},
 });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
