export const RichText = ({ content }: { content: string }) => (
    <div
      style={{
        lineHeight: 1.6,
        color: '#bdb7b7',
        fontSize: '1rem',
        fontFamily: 'Georgia, serif',
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
  