import Script from "next/script";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import layout from "../../components/layout";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First post</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </Layout>
        </>
    )
}