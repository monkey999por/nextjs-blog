import Script from "next/script";
import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>{
                        alert('test');
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                        
                    }
                />

            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}