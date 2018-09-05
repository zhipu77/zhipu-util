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
  },

  updateSearchQuery(kv) {
    let searchStr = '?';
    const search = window.location.search.replace('?', '')
    if (search) {
      const temp = search.split('&')
      temp.forEach(ele => {
        kv[ele.split('=')[0]] ?
          null :
          kv[ele.split('=')[0]] = ele.split('=')[1]
      })
    }

    for (var key in kv) {
      searchStr += `${key}=${kv[key]}&`
    }

    return {
      search: searchStr.substr(0, searchStr.length - 1),
      href: window.location.protocol + '//' +
        window.location.host +
        window.location.pathname +
        searchStr.substr(0, searchStr.length - 1) +
        window.location.hash
    }
  },

  getCookie(name) {
    const match = document.cookie.match(new RegExp(`(^|;\\s*)(${name})=([^;]*)`));
    return (match ? decodeURIComponent(match[3]) : null);
  },

  setCookie(c_name, value, expiredays) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + '=' + escape(value) +
      ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString());
  }
}
