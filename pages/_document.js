import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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
              
              function hideStatusBar() {
                if (isIOS()) {
                  window.webkit.messageHandlers.StatusBarManager.postMessage({
                    command: 'setHidden',
                    value: true
                  });
                }
              }
              
              window.addEventListener('load', hideStatusBar);
              window.addEventListener('orientationchange', hideStatusBar);
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
