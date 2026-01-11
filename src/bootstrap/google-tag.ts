declare global {
  interface Window {
    dataLayer: any[]
  }
}

if (import.meta.env.VITE_MEASURE_ID) {
  const id = import.meta.env.VITE_MEASURE_ID
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  script.async = true
  script.onload = () => {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', id)
  }

  document.head.appendChild(script)
}
