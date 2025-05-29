export const ImageBlock = ({ src, alt }: { src: string; alt?: string }) => (
    <img
      src={`http://localhost:1337${src}`}
      alt={alt}
      style={{
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '24px 0',
        display: 'block',
      }}
    />
  );
  