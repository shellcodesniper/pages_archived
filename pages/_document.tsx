import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { CookiesProvider } from 'react-cookie';
import cookies from 'next-cookies';

class SandMoodDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    const cookie = cookies(context);
    console.log('document InitialProp COOKIE');
    console.log(cookie);
    return { ...initialProps, cookie }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/favicons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
          <script src="https://cdn.bootpay.co.kr/js/bootpay-3.3.1.min.js" type="application/javascript"></script>
        </Head>
        <CookiesProvider>
          <body className="d-flex flex-column h-100">
            <Main />
          </body>
        </CookiesProvider>
        <NextScript />
      </Html>
    )
  }
}

export default SandMoodDocument;
