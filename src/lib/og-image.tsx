import satori, { type SatoriOptions } from 'satori'
import { SITE } from '../config'

function makeOgImage(siteTitle: string) {
  return (
    <div
      style={{
        background: '#fefbfb',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          right: '-1px',
          border: '4px solid #000',
          background: '#ecebeb',
          opacity: '0.9',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          margin: '2.5rem',
          width: '88%',
          height: '80%'
        }}
      />

      <div
        style={{
          border: '4px solid #000',
          background: '#fefbfb',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem',
          width: '88%',
          height: '80%'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px',
            width: '90%',
            height: '90%'
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              maxHeight: '84%',
              overflow: 'hidden'
            }}
          >
            {siteTitle}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '8px',
              fontSize: 28
            }}
          >
            <span>
              by <span style={{ color: 'transparent' }}>&quot;</span>
              <span style={{ overflow: 'hidden', fontWeight: 'bold' }}>
                {SITE.owner.name}
              </span>
            </span>

            <span style={{ overflow: 'hidden', fontWeight: 'bold' }}>
              {SITE.meta.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const { fontRegular, fontBold } = await (async () => {
  // Regular Font
  const fontFileRegular = await fetch(
    'https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf'
  )
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer()

  // Bold Font
  const fontFileBold = await fetch(
    'https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf'
  )
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer()

  return { fontRegular, fontBold }
})()

const options: SatoriOptions = {
  // debug: true,
  width: 1200,
  height: 630,
  // embedFont: true,
  fonts: [
    {
      name: 'IBM Plex Mono',
      data: fontRegular,
      weight: 400,
      style: 'normal'
    },
    {
      name: 'IBM Plex Mono',
      data: fontBold,
      weight: 600,
      style: 'normal'
    }
  ]
}

export async function generateOgImage(siteTitle: string = SITE.meta.title) {
  return satori(makeOgImage(siteTitle), options)
}
