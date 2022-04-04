import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import { IPosts } from '../interfaces'
import {getPosts} from '../services'
import {FeaturedPosts} from '../sections'


interface HomeProps {
  posts: IPosts[]
}

const Home: NextPage<HomeProps> = ({posts}) => {
  
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.node.createdAt} post={post.node} />
          ))}
        </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget/>
          <Categories/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async() => {
  
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
