import Link from 'next/link';
import { fetchPosts } from './lib/strapi';
import styles from './page.module.css';

export const revalidate = 60;

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
