module.exports = app => {
  if (!app.router.route('/heath')) return;

  app.router.get('/heath', ctx => {
    ctx.body = 'hi~, i\'m ok';
  });
};