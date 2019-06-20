//The request was invalid.
const BadRequest = (headers,code=0) => {
  return {
    statusCode:400,
    headers,
    body: JSON.stringify({
      data:null,
      error_code:code,
      message:'La consulta fue inválida',
      success:false
    })
  }
}

export { BadRequest }
