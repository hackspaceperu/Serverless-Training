//The requested resource was not found.
const NotFound = (headers, code = 0) => {
  return {
    statusCode:200,
    headers,
    body: JSON.stringify({
      data:null,
      error_code:code,
      message:'The requested resource was not found.',
      success:false
    })
  }
}

export { NotFound }