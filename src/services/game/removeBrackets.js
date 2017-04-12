module.exports = (word) => {
  return word.replace(/([^A-Z*])/g, "", "")
}
