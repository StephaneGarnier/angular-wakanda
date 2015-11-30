angular.module('angular-wakanda-website')
  .controller('sidebarController', function ($scope, documentationFactory, $stateParams) {

    $scope.menuLinks = documentationFactory.docPagesLinks();

    $scope.isLinkActive = function (link) {

      if ($stateParams.subpage) {
        if (link.parentPage){
          return $stateParams.page === link.parentPage && $stateParams.subpage === link.page;
        }
        else {
          return false;
        }
      }
      else {
        return $stateParams.page === link.page;
      }
    };

    $scope.showSubList = function (link) {
      return $stateParams.page === link.page && link.children && link.children.length > 0;
    };

    $scope.hasArrow = function (link) {
      return link.children && link.children.length > 0;
    }
  });
