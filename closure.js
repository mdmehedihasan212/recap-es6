const bank = owner => {
    balance = 0;
    return {
        deposite: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}
const ownBank = bank('sonuz');
console.log(ownBank.deposite(10000));
console.log(ownBank.withdraw(9500));