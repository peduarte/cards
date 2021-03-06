import ReactSelect from 'react-select'
import { lighten } from 'polished'

import { theme as themeBase } from '@/theme'

export const SearchableSelect = ({ bg, color, ...props }) => {
  const secondaryColor = lighten(0.1, bg)
  const theme = () => {
    return {
      borderRadius: 4,
      colors: {
        primary: color,
        primary75: secondaryColor,
        primary50: secondaryColor,
        primary25: secondaryColor,
        danger: '#DE350B',
        dangerLight: '#FFBDAD',
        neutral0: bg,
        neutral5: color,
        neutral10: color,
        neutral20: color,
        neutral30: color,
        neutral40: color,
        neutral50: color,
        neutral60: color,
        neutral70: color,
        neutral80: color,
        neutral90: color
      },
      spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 }
    }
  }

  const fontStyle = {
    fontFamily: themeBase.fonts.sans,
    fontSize: themeBase.fontSizes[1]
  }

  const styles = {
    singleValue: (provided) => ({
      ...provided,
      ...fontStyle
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '2px 8px'
    }),
    menu: (provided) => ({
      ...provided,
      ...fontStyle,
      minWidth: '170px',
      zIndex: 3
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    control: (provided, { isFocused }) => ({
      ...provided,
      opacity: isFocused ? 1 : 0.75,
      cursor: 'pointer',
      boxShadow: 'none'
    })
  }

  return <ReactSelect styles={styles} theme={theme} {...props} />
}
