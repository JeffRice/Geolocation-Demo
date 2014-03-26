/**
 * GET /
 * Test page.
 */

exports.index = function(req, res) {
  res.render('test', {
    title: 'Test'
  });
};

