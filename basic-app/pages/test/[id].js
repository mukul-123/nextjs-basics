import {getAllPosts} from "../../lib/posts";
import {getPostById} from "../../lib/posts";
import Layout from "../components/Layout";
import Date from "../components/Date";

export default function TestId({postData}){
    return <Layout>
            <section>
                  <ul>
                  <li>{postData.title}</li>
                  <li>{postData.id}</li>
                    <li><Date dateString={postData.date}/></li>
                    {/* <li>{postData.date}</li> */}
                  </ul>
                </section>
              </Layout>
  }

export async function getStaticPaths() {
    const paths = getAllPosts()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
      const postData = getPostById(params)
      return {
        props: {
          postData
        }
      }
  }