/**
 * Will truncate a text if it exceeds the maxLength
 * @param {string} text `string`
 * @param {number} maxLength `number`
 * @returns {string} Truncated text with ellipsis if it exceeds maxLength
 */
function truncateName(text, maxLength) {
  if (text.length <= maxLength) {
    return text
  }

  return text.slice(0, maxLength).concat('...')
}

export default truncateName
