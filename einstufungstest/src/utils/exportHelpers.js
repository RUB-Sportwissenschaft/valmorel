export function getSafeName(name) {
  return name ? name.replace(/\s+/g, '-') : 'anonym'
}

export function getDownloadFilename(name, level) {
  return `ski-einstufung-${getSafeName(name)}-level-${level}`
}
