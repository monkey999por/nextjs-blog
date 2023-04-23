import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const a = new Array().forEach;

  return {
    props: {
      allPostsData,
    },
  };
}
const testF = async (id: string) => {
  return id === "hello" ? id : "not hello";
};
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const AlwaysSuspend: React.VFC = () => {
  throw sleep(1000);
};

const ErrorComponent = (): JSX.Element => {
throw new Error("throw error");
}

// デフォルトでエクスポートしたものがページに反映される
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ErrorBoundary>
        <ErrorComponent></ErrorComponent>
      </ErrorBoundary>
      <AlwaysSuspend/>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {console.log(allPostsData)}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <Date dateString={date}></Date>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
