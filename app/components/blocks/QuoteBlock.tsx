export const QuoteBlock = ({ quote, author }: { quote: string; author: string }) => (
    <blockquote
      style={{
        borderLeft: '4px solid #6b7280', // muted grayish blue border
        paddingLeft: '16px',
        margin: '24px 0',
        fontStyle: 'italic',
        color: '#374151', // dark gray text
        backgroundColor: '#f9fafb', // very light gray bg
        borderRadius: '4px',
      }}
    >
      <p style={{ margin: '10px 0 8px 0', fontSize: '1.125rem' }}>"{quote}"</p>
      <footer style={{ margin: '0 10px 8px 0' ,textAlign: 'right', fontWeight: '600', color: '#4b5563' }}>— {author}</footer>
    </blockquote>
  );
  