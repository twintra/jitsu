import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Jitsu</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap"
                    rel="stylesheet"
                />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}