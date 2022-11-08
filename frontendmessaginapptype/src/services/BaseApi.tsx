function getHeader(): any {
  return {
    headers: { "Authorization": `Bearer ${window.sessionStorage.getItem("token")}`, 'Access-Control-Allow-Credentials': true }
  }
}

export default getHeader;
