// Returns an array of children objects that each contain name of article and route of article

export function computeFiles(ancestors, children) {
  ancestors = ancestors.join('')
  const files = []
  children.forEach((child) => {
    files.push({
      name: child.charAt(0).toUpperCase() + child.slice(1),
      path: ancestors + child
    })
  })
  return files
}
