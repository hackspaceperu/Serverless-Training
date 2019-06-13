const NotFound = (res, message, code = 0) => {
    res.status(404)
    res.json({
      data      : null,
      error_code: code,
      message,
      success   : false
    })
  }

export { NotFound }