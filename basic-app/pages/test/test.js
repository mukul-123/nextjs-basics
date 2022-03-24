import Image from 'next/image'
import Head from 'next/head'
import { getAllPosts } from "../../lib/posts"
import Link from 'next/link'
import Layout from '../components/Layout';

export default function Test({allPostsData}){
    const imgUrl="/images/profile.jpg";
    return <Layout>
            <section>
            <Image
                src="/images/profile.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
              />
                {allPostsData.map((obj,k) => {
                    return <ul key={k}>
                      <li><Link href={`/test/${obj.params.id}`}>{obj.params.id}</Link></li>
                  </ul>
                })}
                </section>
            </Layout>
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getAllPosts()
  return {
    props: {
      allPostsData
    }
  }
}