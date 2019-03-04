

function converterController ($scope, convertService, currency){
  'ngInject';
  $scope.currency = currency;
  $scope.currencyFrom = currency[0];
  $scope.currencyTo = currency[1];
  $scope.list = convertService.loadList();
  $scope.givenAmount;
  $scope.receivedAmount;
  $scope.fee = '0';
  $scope.convert = convertService.convert;

  $scope.revert = () => {
    const temp = $scope.currencyFrom;
    $scope.currencyFrom = $scope.currencyTo;
    $scope.currencyTo = temp;
  };

  $scope.$watchGroup(['currencyFrom', 'currencyTo', 'fee', 'givenAmount'], () => {
    if (!$scope.list[$scope.currencyFrom] && !$scope.list[$scope.currencyTo]) {
      return;
    }
    $scope.receivedAmount = convertService.convert(
      { list: $scope.list,
        currencyFrom: $scope.currencyFrom,
        currencyTo: $scope.currencyTo,
        fee: $scope.fee[0],
        givenAmount: $scope.givenAmount });
  });
}

export default converterController;