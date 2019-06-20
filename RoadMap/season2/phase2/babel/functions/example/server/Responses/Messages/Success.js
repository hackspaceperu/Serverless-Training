/*const Success = (res, message, data) => {
  res.status(200)
  res.json({
    data      : data || '',
    error_code: null,
    message,
    success   : true
  })
}*/
const Success = (headers, data) => {
  return {
    statusCode:200,
    headers,
    body: JSON.stringify({
      data,
      error_code:null,
      message:'OK',
      success:true
    })
  }
}

export { Success }
