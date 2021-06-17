import { createMuiTheme } from '@material-ui/core/styles';
import { paletteGenerator } from './paletteGenerator';
import grey from '@material-ui/core/colors/grey'

const colors = {
  primary:    '#c3922e',
  secondary:  '#2A7F62',
  accent:     '#1C3144',
  neutral:    '#A2AEBB',
  info:       '#307AE7',
  success:    '#ECFFB0',
  alert:      '#FF9F1C',
  warn:       '#E94F37' 
}
const shades = grey;

let palette = paletteGenerator(colors, shades, 'default');
palette.primary.mainGradient = `radial-gradient(ellipse at 20% 30%, ${palette.accent.main}, ${palette.primary.main}`;
palette.primary.contrastText = palette.accent.main;
palette.secondary.contrastText = palette.neutral.main;
palette.background = { paper: palette.neutral.main };

const defaultFont = ['Montserrat', 'sans-serif']
const headerFont = ['Montserrat', 'Arial Black', ...defaultFont]

export default createMuiTheme({
  themeName: "Main Theme",
  palette: { ...palette },
  typography: {
    defaultFont: defaultFont.join(', '),
    headerFont: headerFont.join(', '),
    body: {
      fontFamily: defaultFont.join(', ')
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: 'red'
      }
    },
    MuiInput: {
      underline: {
        color: 'white'
      }
    },
    MuiFilledInput: {
      underline: {
        color: 'white'
      }
    },
    MuiInputLabel: {
      root: {
        color: 'white',
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        color: palette.accent[400],
        '&$checked': {
          color: palette.accent[400]
        }
      },
      colorPrimary: {
        color: palette.accent[400],
        '&$checked': {
          color: palette.accent[400]
        }
      }
    },
    MuiSlider: {
      root: {
        height: 8,
      },

      colorPrimary: {
        color: palette.accent[500],

        '& .MuiSlider-active': {
          borderColor: palette.accent[500]
        },

        '& .MuiSlider-markActive': {
          backgroundColor: palette.accent[100]
        }
      },

      colorSecondary: {
        color: palette.accent[500],

        '& .MuiSlider-active': {
          borderColor: palette.accent[500]
        },

        '& .MuiSlider-markActive': {
          backgroundColor: palette.accent[300]
        }
      },

      mark: {
        backgroundColor: palette.secondary.main,
        height: 5,
        width: 1
      },

      markActive: {
        height: 3
      },

      thumb: {
        height: 24,
        width: 24,

        borderWidth: 2,
        borderStyle: 'solid',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },

      thumbColorPrimary: {
        borderColor: palette.accent[600],
        color: palette.accent[600],
      },

      thumbColorSecondary: {
        borderColor: palette.accent[600],
        color: palette.accent[600],

        '&:hover': { boxShadow: 'none' },
        focusVisible: { boxShadow: 'none' },
      },

      valueLabel: {
        left: 'calc(-50% + 4px)',

        '& > span > span': {
          color: 'white'
        }
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
        borderLeft: `4px solid ${palette.accent[500]}`,
        borderRight: `4px solid ${palette.accent[500]}`,

        '.MuiSlider-colorSecondary &': {
          borderColor: palette.accent[500]
        }
      },
    }
  },
});