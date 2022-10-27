function getHeader() : any {
  return {
    headers: { Authorization: `Bearer ${window.sessionStorage.getItem("token")}` }
  }
}

export default getHeader;
