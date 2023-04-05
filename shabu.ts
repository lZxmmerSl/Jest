export function calShabuPrice(person: number) : number{
    const shabuPrice: number = 340;
    if (person % 4 === 0) {
        let people = person / 4;
        let price = (person - people) * shabuPrice;
        let vat = shabuPrice * (10 / 100) * (person - people);
        let sum = price + vat;
        return sum;
    } else {
        let price = person * shabuPrice;
        let vat = shabuPrice * (10 / 100) * person;
        let sum = price + vat;
        return sum;
    }
}