module.exports = {
  getHashQuery() {
    const result = {}
    const query = window.location.hash.split('?')[1]
    if (query) {
      const kvs = query.split('&')
      kvs.forEach(ele => {
        let kv = ele.split('=')
        result[kv[0]] = kv[1]
      })
    }
    return result
  },

  getSearchQuery() {
    const result = {}
    const search = window.location.search.replace('?', '')
    if (search) {
      const kvs = search.split('&')
      kvs.forEach(ele => {
        let kv = ele.split('=')
        result[kv[0]] = kv[1]
      })
    }
    return result
  }
}
