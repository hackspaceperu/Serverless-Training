//The client did not have permission to access the requested resource.
const Forbidden = (headers, code=0) => {
  return {
    statusCode:403,
    headers,
    body: JSON.stringify({
      data:null,
      error_code:code,
      message:'El cliente no tiene permisos de acceso para este recurso',
      success:false
    })
  }
}

export { Forbidden }
