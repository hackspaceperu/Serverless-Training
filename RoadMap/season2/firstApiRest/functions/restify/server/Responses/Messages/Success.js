const Success = (res, message, data) => {
    res.status(200)
    res.json({
      data      : data || '',
      error_code: null,
      message,
      success   : true
    })
  }

export { Success }
  