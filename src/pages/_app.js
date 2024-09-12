export default function App({ Component, pageProps }) {
    return (
        <div>
            <span>global-layout</span>

            <Component {...pageProps} />
        </div>
    )
}