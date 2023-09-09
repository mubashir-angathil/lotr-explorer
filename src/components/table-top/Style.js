import customColors from '../../utils/helpers/constants/colors'

// Define a JavaScript object for styling properties related to table-top components
const tableTopStyle = {
  title: {
    fontSize: '1.8rem', // Title font size
    fontWeight: '700', // Title font weight (bold)
    textAlign: 'center', // Center-align the title text,
    background: customColors.textPrimary, // Background color primary,
    color: 'white' // Font color white
  },
  formLabel: {
    mr: 1.5, // Margin right (spacing)
    fontSize: '1rem',
    width: '4rem', // Width of the form label
    flexShrink: 0, // Prevent label from shrinking
    color: customColors.textSecondary, // Text color from customColors
    fontWeight: '700' // Label font weight (bold)
  },
  formFieldWrapper: {
    flex: 1, // Allow flexible expansion within its container
    display: 'flex', // Display as a flex container
    flexDirection: { xs: 'column', md: 'row' }, // Flex direction based on screen size
    alignItems: 'center' // Center-align the items within the container
  }
}

export default tableTopStyle
