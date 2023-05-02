import { Toaster } from 'react-hot-toast';

function ToasterProvider({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default ToasterProvider;
