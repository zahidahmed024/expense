import { colors } from "@constants"

const fonts = {
    thin: 'Roboto-thin',
    light: 'Roboto-light',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    black: 'Roboto-Black',
}
const fontStyle = {
    h1: {
        fontFamily: fonts.bold,
        letterSpacing: 0.34,
        fontSize: 20,
        color: colors.text,
    },

    h3: {
        fontFamily: fonts.medium,
        letterSpacing: 0.34,
        fontSize: 18,
        color: colors.text,
    },
    h4: {
        fontFamily: fonts.medium,
        letterSpacing: 0.34,
        fontSize: 16,
        color: colors.text,
    },
    h5: {
        fontFamily: fonts.regular,
        letterSpacing: 0.34,
        fontSize: 14,
        color: colors.text,
    },
    h6: {
        fontFamily: fonts.regular,
        letterSpacing: 0.34,
        fontSize: 12,
        color: colors.text,
    },
}
export { fontStyle, fonts }