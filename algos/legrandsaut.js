let tab = 0;
let listOfPrimeNumber = [];

function nbrPremier(tab) {
    for(let i = 2; i < tab-1; i++){
        if(tab%i === 0){
            return false;
          } 
        }
        return true;
}



while (listOfPrimeNumber.length < 100) {
    tab ++
    if (nbrPremier(tab)) {
        listOfPrimeNumber.push(tab);
    }
    
}

console.log(listOfPrimeNumber);