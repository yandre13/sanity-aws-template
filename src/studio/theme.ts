import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-sanity--primary': '#0099ff',
  '--my-sanity--white': '#fff',
  '--my-sanity--black': '#1a1a1a',
  '--my-sanity--red': '#ff0055',
  '--my-sanity--yellow': '#ffcc00',
  '--my-sanity--green': '#22cc88',
  '--my-sanity--gray': '#666',
}

export const mySanityTheme = buildLegacyTheme({
  '--black': props['--my-sanity--black'],
  '--white': props['--my-sanity--white'],

  '--gray': props['--my-sanity--gray'],
  '--gray-base': props['--my-sanity--gray'],

  '--component-bg': props['--my-sanity--black'],
  '--component-text-color': props['--my-sanity--white'],

  '--brand-primary': props['--my-sanity--primary'],

  '--default-button-color': props['--my-sanity--gray'],
  '--default-button-primary-color': props['--my-sanity--primary'],
  '--default-button-success-color': props['--my-sanity--green'],
  '--default-button-warning-color': props['--my-sanity--yellow'],
  '--default-button-danger-color': props['--my-sanity--red'],

  '--state-info-color': props['--my-sanity--primary'],
  '--state-success-color': props['--my-sanity--green'],
  '--state-warning-color': props['--my-sanity--yellow'],
  '--state-danger-color': props['--my-sanity--red'],

  '--main-navigation-color': props['--my-sanity--black'],
  '--main-navigation-color--inverted': props['--my-sanity--white'],

  '--focus-color': props['--my-sanity--primary'],
})
