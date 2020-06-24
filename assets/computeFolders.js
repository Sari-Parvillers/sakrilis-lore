// Returns array of object containing ancestor folders as well as their path

export function computeFolders(ancestors) {
  const folders = []
  let previousAncestors = ''
  ancestors.forEach((ancestor) => {
    folders.push({
      name: ancestor.charAt(0).toUpperCase() + ancestor.slice(1).slice(0, -1),
      path: previousAncestors + ancestor
    })
    previousAncestors += ancestor
  })
  folders[0].name = 'The Codex'
  return folders
}
