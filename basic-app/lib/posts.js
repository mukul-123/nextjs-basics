import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'pages/posts')

export function getAllPosts() {

  const fileNames = fs.readdirSync(postsDirectory)

  // Get file names under /posts
  return fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    var id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    var fullPath = path.join(postsDirectory, fileName)
    var fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    var matterResult = matter(fileContents)
      // Combine the data with the id
      return {
        params:{
          id,
          ...matterResult.data
        }
      }
  })
}

export function getPostById(params){
  let id=params.id;
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}