export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Page Not Found</p>
        <a 
          href="/" 
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '0.5rem'
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  )
} 