import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css';

// Return a list of possible value for id
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.id}</title>
            </Head>
            <article>
            <h1>{postData.title}</h1><br />
            <div className={utilStyles.lightText}><Date dateString={postData.date}></Date></div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}