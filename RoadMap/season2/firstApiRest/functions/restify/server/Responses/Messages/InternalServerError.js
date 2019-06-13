const InternalServerError = (res, message, code = 5) => {
    res.status(500)
    res.json({
      data      : null,
      error_code: code,
      message,
      success   : false
    })
  }
  
  export { InternalServerError }