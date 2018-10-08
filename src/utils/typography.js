import Typography from 'typography'
// import FairyGates from 'typography-theme-fairy-gates'
import Lincoln from 'typography-theme-lincoln'

// FairyGates.overrideThemeStyles = () => ({
//   'a.gatsby-resp-image-link': {
//     boxShadow: 'none',
//   },
// })

// delete FairyGates.googleFonts

Lincoln.overrideThemeStyles = () => ({
  body: {
    color: 'white',
    backgroundColor: '#000515',
  },
  'h1, h2, h3, h4, h5, h6, h7': {
    color: '#EA8859',
  },
  a: {
    color: '#EA8859',
    textShadow: 'none',
    textDecoration: 'none',
    backgroundImage: 'none',
  },
})

const typography = new Typography(Lincoln)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
