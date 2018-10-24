exports.error= app=>{
  app.on('error', (err, ctx) => {
    ctx.status = 200;
    ctx.body = 'error page';
  })
}