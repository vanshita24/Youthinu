import '../styles/globals.css';
import 'keen-slider/keen-slider.min.css';
import 'react-image-crop/dist/ReactCrop.css';
import 'shaka-player/dist/controls.css'; /* Shaka player CSS import */

import { Provider } from 'urql';
import { client, ssrCache } from '../utils/urqlClient';
import { ProvideAuth } from '../hooks/use-auth';

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <ProvideAuth>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </ProvideAuth>
  );
}

export default MyApp;
