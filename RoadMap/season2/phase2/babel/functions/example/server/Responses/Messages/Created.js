//A new resource was successfully created.
const Created = (headers, data) => {
  return {
    statusCode:201,
    headers,
    body: JSON.stringify({
      data:data || '',
      error_code:null,
      message:'Un nuevo recurso fue creado satisfactoriamente',
      success:true
    })
  }
}

export { Created }
