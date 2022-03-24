import Image from 'next/image'
import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllPosts } from "../../lib/posts"
import Link from 'next/link'

export default function Test({allPostsData}){
    const imgUrl="/images/profile.jpg";
    return <>
            <Header/>
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
              <Footer/>
            </>
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