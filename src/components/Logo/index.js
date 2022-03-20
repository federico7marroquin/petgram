import { Svg } from './styles'
import { Link } from 'react-router-dom'

export const Logo = (props) => (
  <Link to='/' >
    <Svg
      width={370.906}
      height={117.2}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="64.547 16.4 370.906 117.2"
      style={{
        background: '0 0',
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient id="b" x1={-0.414} x2={1.414} y1={0.093} y2={0.907}>
          <stop offset={0} stopColor="#1380ca" />
          <stop offset={1} stopColor="#ff7484" />
        </linearGradient>
        <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius={5}
            result="outline"
          />
          <feComposite operator="out" in="outline" in2="SourceAlpha" />
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          d="M29.46-4.18q-2.56 2.59-6.07 4-3.5 1.4-6.98 1.4-3.48 0-4.7-.61L9.82 10.98-2.56 12.2l8.42-43.31 9.94-1.04-.79 4.21q2.56-4.33 7.87-4.33 5.97 0 9.14 3.84 2.81 3.48 2.81 8.79 0 5.31-1.4 9.09-1.41 3.78-3.97 6.37ZM15.68-21.29 12.44-3.42q1.28 1.1 2.87 1.1t2.5-.61q.92-.61 1.59-1.83 1.83-3.29 3.29-13.3.43-2.92.43-5.79t-.64-3.78q-.64-.92-1.86-.92-3.72 0-4.94 7.26ZM63.2-10.31q1.52 1.04 1.52 3.33 0 2.28-1.16 3.75-1.16 1.46-3.05 2.44-3.9 2.01-8.11 2.01-4.21 0-6.68-.92-2.47-.91-4.12-2.62-3.23-3.23-3.23-9.15 0-9.21 5-14.82 5.37-6.04 14.7-6.04 5.8 0 8.66 2.44 2.14 1.83 2.14 4.82 0 10.74-18.54 10.74-.25 1.58-.25 2.92 0 2.81 1.25 3.88 1.25 1.06 3.57 1.06t4.79-1.06q2.47-1.07 3.51-2.78Zm-12.45-6.65q4.33 0 6.83-2.68 2.51-2.56 2.51-6.65 0-1.4-.52-2.17-.52-.76-1.56-.76t-1.92.4q-.89.39-1.8 1.74-2.26 3.05-3.54 10.12ZM71.92-6.1q0-1.65.85-5.79l3.24-16.47h-3.6l.24-1.84q7.32-2.19 14.4-7.56h2.93l-1.47 6.65h4.76l-.55 2.75h-4.7l-3.11 16.47q-.79 3.78-.79 5.06 0 2.93 2.56 3.54-.61 2.07-2.8 3.29-2.2 1.22-5.31 1.22-3.11 0-4.88-1.95T71.92-6.1Zm25.13-19.4q2.08-2.93 5.22-4.88 3.14-1.95 6.98-1.95 3.84 0 5.67 1.22l11.96-1.22-4.15 23.42q-2.13 11.96-6.65 16.66-4.33 4.45-12.75 4.45-6.4 0-10.06-2.01-3.66-2.02-3.66-5.37 0-2.5 1.89-3.94 1.89-1.43 4.82-1.43 2.56 0 4.51 1.16 1.16.61 1.71 1.46-1.4 1.22-1.4 3.24 0 2.62 2.44 2.62 4.09 0 6.4-9.64.67-2.62 1.22-5.24-2.74 3.35-8.96 3.35-4.33 0-6.84-2.07-2.5-2.08-2.5-6.96 0-3.05 1.04-6.49 1.04-3.45 3.11-6.38Zm7.93 13.06q0 4.14 2.14 4.14 1.46 0 2.86-1.58 1.1-1.28 1.53-3.17l3.11-15.68q-.31-.06-.61-.18-.61-.25-1.4-.25-3.72 0-5.92 6.1-1.71 4.76-1.71 10.62Zm43.37-4.7q2.2-3.9 2.2-7.87 0-2.62-1.89-2.62-1.47 0-2.99 2.5-1.59 2.5-2.08 5.73L140.42 0 127.8 1.22l6.22-32.33 10.06-1.22-1.1 6.16q2.99-6.16 9.7-6.16 3.54 0 5.46 1.83t1.92 5.58q0 3.75-2.47 6.13t-6.68 2.38q-1.83 0-2.56-.73Zm15.34 15.31q-1.43-1.59-2.07-4.09-.64-2.5-.64-6.58 0-4.09 1.4-7.81 1.41-3.72 3.97-6.41 5.24-5.61 13.91-5.61 3.11 0 5.36 1.04l10.43-1.04-4.51 23.79q-.18.73-.18 2.07 0 1.35.82 2.2.82.85 2.04.98-.61 2.07-2.83 3.29-2.23 1.22-4.73 1.22-2.5 0-4.18-.95-1.68-.94-2.16-2.53-.98 1.53-3.05 2.5-2.08.98-4.85.98-2.78 0-5.04-.73-2.25-.73-3.69-2.32Zm12.87-24.77q-.7 1.1-1.31 2.96-.61 1.86-1.61 6.83-1.01 4.98-1.01 8.51 0 3.54.55 4.58t1.52 1.04q1.96 0 3.39-1.86 1.43-1.87 1.98-5.16l3.24-17.87q-1.29-1.1-2.78-1.1-1.49 0-2.38.49-.88.49-1.59 1.58Zm66.71 27.82q-7.38 0-7.38-5.73 0-2.5 1.06-7.35 1.07-4.85 1.44-6.81.85-4.45.85-5.85 0-3.11-2.32-3.11-1.52 0-2.98 2.1-1.47 2.11-2.14 6.32L228.02 0l-11.9 1.22 3.3-16.59q.55-2.75 1.03-5.86.49-3.11.49-3.6 0-2.8-2.07-2.8-1.4 0-2.93 2.07-1.52 2.08-2.38 6.35L209.84 0l-12.02 1.22 6.41-32.33 9.94-1.22-1.04 6.16q1.59-3.29 4.52-4.73 2.93-1.43 7.5-1.43 2.62 0 4.33 1.28t2.26 3.36q1.04-2.14 3.69-3.39t5.92-1.25q3.26 0 4.88.7 1.61.7 2.59 1.86 1.65 2.14 1.65 6.04 0 3.84-1.65 11.84-.85 3.9-.85 5.33 0 1.44.82 2.29.82.85 2.04.98-.61 2.07-2.71 3.29-2.11 1.22-4.85 1.22Z"
          fill="url(#b)"
          transform="translate(124.1 99.98)"
        />
      </g>
    </Svg>
  </Link>
)