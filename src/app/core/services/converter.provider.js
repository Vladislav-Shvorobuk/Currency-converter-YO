
export default function (app) {
  app
     .provider('convertService', convertService);

     function convertService() {
      let URL = '';
      this.setURL = url => (URL = url);
    
      this.$get = ['$http', function($http) {
        return {
          loadList: () => {
            const list = {};
            $http.get(URL)
              .then(({ data }) => {
                data.forEach(item => {
                  list[item.ccy] = item;
                });
              });
            return list;
          },
    
          convert: args => {
            const { list, currencyFrom, currencyTo, fee, givenAmount } = args;
            const dataFrom = list[currencyFrom];
            const dataTo = list[currencyTo];
    
            if (currencyFrom === 'UAH') {
              const result = givenAmount / dataTo.sale;
    
              return result - ((result / 100) * fee);
            }
    
            if (currencyTo === 'UAH') {
              const result = givenAmount * dataFrom.buy;
    
              return result - ((result / 100) * fee);
            }
    
            const result = givenAmount * dataFrom.buy / dataTo.sale;
    
            return result - ((result / 100) * fee);
          }
        };
      }];
    }
}








