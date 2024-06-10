import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        </Head>
        <body>
          <Main />
          <div id="modal-root"></div>
          <NextScript />
          {/* Disable pinch zooming */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('gesturestart', function (e) {
                  e.preventDefault();
                });
              `,
            }}
          />
          {/* iOS Status Bar Style Handling */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function isIOS() {
                  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                }

                function setStatusBarStyle() {
                  if (isIOS()) {
                    var statusBarStyle = 'default';

                    if (navigator.userAgent.match(/OS (\\d+)_(\\d+)/)) {
                      var majorVersion = parseInt(RegExp.$1, 10);
                      if (majorVersion >= 13) {
                        statusBarStyle = 'dark-content';
                      } else {
                        statusBarStyle = 'black-translucent';
                      }
                    }

                    var metaTag = document.createElement('meta');
                    metaTag.name = 'apple-mobile-web-app-status-bar-style';
                    metaTag.content = statusBarStyle;
                    document.getElementsByTagName('head')[0].appendChild(metaTag);
                  }
                }

                window.onload = setStatusBarStyle;
              `,
            }}
          />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
