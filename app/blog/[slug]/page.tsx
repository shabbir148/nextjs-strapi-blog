import { fetchPostBySlug } from '../../lib/strapi'; // for blog/[slug]/page.tsx
import { RichText } from '../../components/blocks/RichtText';
import { ImageBlock } from '../../components/blocks/ImageBlock';
import { QuoteBlock } from '../../components/blocks/QuoteBlock';
import { API_URL } from '../../lib/strapi'
import styles from './BlogPage.module.css';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await fetch(`${API_URL}/posts`).then(res => res.json());
  return posts.data.map((post) => ({ slug: post.slug }));
}

export const revalidate = 60; // ISR

export default async function BlogPage({ params }: Props) {
    const post = await fetchPostBySlug(params.slug);
    const { title, author, content } = post;
  
    const renderBlock = (block) => {
      switch (block.__component) {
        case 'content.rich-text':
          return <RichText key={`${block.id}_1`} content={block.body} />;
        case 'content.image-block':
          return <ImageBlock key={`${block.id}_2`} src={block.image.url} alt={block.image.alternativeText} />;
        case 'content.quote-block':
          return <QuoteBlock key={`${block.id}_3`} quote={block.quote} author={block.author} />;
        default:
          return null;
      }
    };
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.author}>By {author}</p>
        <div className={styles.content}>{content.map(renderBlock)}</div>
      </div>
    );
  }
  
