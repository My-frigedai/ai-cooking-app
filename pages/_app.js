import '@/styles/globals.css'
import '@/styles/animations.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 背景の星アニメーション */}
      <div className="starry-bg">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <Component {...pageProps} />
    </>
  )
}
