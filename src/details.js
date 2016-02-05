module.exports = function(info) {
  var page = tabris.create('Page', {
    title: info,
    topLevel: false
  });

console.log('hello');

  return page;
};
