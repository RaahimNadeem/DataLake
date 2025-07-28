'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>500</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Something went wrong!</p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                marginRight: '1rem',
                cursor: 'pointer'
              }}
            >
              Try again
            </button>
            <a 
              href="/" 
              style={{
                backgroundColor: '#666',
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
      </body>
    </html>
  )
} 