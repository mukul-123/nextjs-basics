import {getAllPosts} from "../../lib/posts";
import {getPostById} from "../../lib/posts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Date from "../components/Date";

export default function TestId({postData}){
    return <>
            <Header/>
            <section>
                  <ul>
                  <li>{postData.title}</li>
                  <li>{postData.id}</li>
                    <li><Date dateString={postData.date}/></li>
                    {/* <li>{postData.date}</li> */}
                  </ul>
                </section>
              <Footer/>
            </>
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