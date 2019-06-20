//The request did not include an authentication token or the authentication token was expired.
const Unauthorized = (headers, code=0) => {
  return {
    statusCode:401,
    headers,
    body: JSON.stringify({
      data:null,
      error_code:code,
      message:'La consulta no incluye un token de autenticación o el token ha expirado',
      success:false
    })
  }
}

export { Unauthorized }