import './post.css'

export default function Post() {
  const post = {
    title: 'nitik',
    description: 'nitik',
    noOfLikes: '50',
    imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
  }
  return (
    <section>
      <article>
        <h3>{post.title}</h3>
      </article>
      <article>
        <img src={post.imageUrl} alt='' />
      </article>
      <article>
        <p>{post.description}</p>
      </article>
      <article>
        <div>
          <button className='btnCSS'>Like</button>
          <span>{post.noOfLikes}</span>
        </div>
        <div>
          <button className='btnCSS'>Add comment</button>
          <textarea />
        </div>
        <div>
          <button className='btnCSS'>Fetch Comments</button>
        </div>
      </article>
    </section>
  )
}
