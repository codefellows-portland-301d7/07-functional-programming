articleView.renderIndexPage = function() {
  Article.allArticles.forEach(function(a) {
    if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
      $('#category-filter').append(a.toHtml($('#category-filter-template')));
    };
    if($('#author-filter option:contains("'+ a.author + '")').length === 0) {
      $('#author-filter').append(a.toHtml($('#author-filter-template')));
    };
    $('#articles').append(a.toHtml($('#article-template')));
  });
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
Article.fetchAll(articleView.renderIndexPage);
