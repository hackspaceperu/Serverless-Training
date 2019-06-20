const InternalServerError = (headers, code = 5) => {
  return {
    statusCode:500,
    headers,
    body: JSON.stringify({
      data:null,
      error_code:code,
      message:'Internal server error',
      success:false
    })
  }
} 

export { InternalServerError }