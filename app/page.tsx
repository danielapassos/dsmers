import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Des Moiner
      </h1>
      <p className="mb-4">
  {`Discover the best of Des Moines, Iowa with Des Moiner, your go-to guide for events, restaurants, attractions, and local hidden gems. Whether you're a resident or visitor, we've got the inside scoop on what makes our city great. From the hottest happenings each weekend to exclusive deals and need-to-know tips, Des Moiner is your essential resource for exploring and falling in love with Des Moines. Join us as we showcase the heart of the Midwest!`}
</p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
