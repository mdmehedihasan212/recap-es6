const bank = owner => {
    balance = 0;
    return amount => {
        balance += amount;
        return balance;
    }
}
const ownBank = bank('sonuz');
console.log(ownBank(500));