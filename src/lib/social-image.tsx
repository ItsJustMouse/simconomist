import { ImageResponse } from 'next/og';

export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

export const SOCIAL_IMAGE_ALT =
  'Simconomist — Market intelligence for Sim Companies';

export function socialImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0e13',
          color: '#e8ecf2',
          padding: '72px 80px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              background: '#ef9a33',
              color: '#1a1005',
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            S
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Simconomist
          </div>

          <div
            style={{
              display: 'flex',
              marginLeft: 12,
              padding: '8px 14px',
              border: '1px solid #35404f',
              borderRadius: 999,
              color: '#9aa5b4',
              fontSize: 18,
            }}
          >
            Public Beta
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: '-0.045em',
            }}
          >
            Market intelligence for Sim Companies.
          </div>

          <div
            style={{
              display: 'flex',
              maxWidth: 900,
              color: '#9aa5b4',
              fontSize: 27,
              lineHeight: 1.35,
            }}
          >
            Exchange prices, market history, analytics and transparent planning
            calculators.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 24,
            borderTop: '1px solid #232b37',
            fontSize: 20,
          }}
        >
          <div style={{ display: 'flex', color: '#ef9a33', fontWeight: 700 }}>
            simconomist.com
          </div>

          <div style={{ display: 'flex', color: '#6c7889' }}>
            Independent Sim Companies companion
          </div>
        </div>
      </div>
    ),
    SOCIAL_IMAGE_SIZE,
  );
}
