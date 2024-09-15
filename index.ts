interface IStudent{
    name:string,
    email:string,
    age:Date,
    score:number,
}

const students: IStudent[] = [
    {
        name:"budi",
        email: "budi@gmail.com",
        age: new Date("1991-05-02"),
        score: 60
    },
    {
        name:"amir",
        email: "amir@gmail.com",
        age: new Date("1995-02-05"),
        score: 80
    },
    {
        name:"eka",
        email: "eka@gmail.com",
        age: new Date("1992-01-01"),
        score: 40
    }
]

function calculateAge(date: Date){
    const today = new Date();
    const diff = today.getTime() - date.getTime();

    const age = new Date(diff);
    console.log(age);
    return Math.abs(age.getUTCFullYear() - 1970);
}

function calculate(arr: IStudent[]){
    const result: {
        score:{
            highest: number,
            lowest: number,
            average: number,
        },
        age:{
            highest: number,
            lowest: number,
            average: number,
        };
    } = {
        score:{
            highest: 0,
            lowest: 0,
            average: 0,
        },
        age:{
            highest: 0,
            lowest: 0,
            average: 0,
        },
    };

    const scores: number [] = [];
    const ages: number[]=[];

    for(let i = 0; i < arr.length; i++){
        scores.push(arr[i].score);
        ages.push(calculateAge(arr[i].age));
    }
    console.log(scores);

    result.score.highest = Math.max(...scores);
    result.score.lowest = Math.min(...scores);
    result.score.average = 
    scores .reduce((a:number, b:number)=> a+b)/ arr.length;

    result.age.highest = Math.max(...ages);
    result.age.highest = Math.min(...ages);
    result.age.average = 
    ages .reduce((a:number, b:number)=> a+b)/ arr.length;
    
    return result;
}

console.log(calculate(students));


// No. 2

interface Iproduct{
   name : string,
   price : number, 
}

interface ITransaction{
    products:{product: Iproduct; qty:number}[];
}

class Product implements Iproduct{
    name;
    price;

    constructor(paramName: string, paramPrice:number){
        this.name = paramName;
        this.price = paramPrice;
    }
}

class Transaction implements ITransaction{
    #total = 0;
    products : {
        product: Iproduct;
        qty:number;
    }[];

    constructor(){
        this.#total = 0;
        this.products = [];
    }


    addToCart(product: Product, qty:number){
        this.#total += product.price * qty;
        this.products.push({
            product,qty,
        });
    }
    showTotal(){
        return this.#total;
    }

    checkOut(){
        const currProduct: {
            product:Iproduct;
            qty:number;
        }[] = [...this.products];
        this.#total = 0;
        this.products = [];
        return currProduct;
    }
}

const newTransaction = new Transaction();
newTransaction.addToCart(new Product("kulkas", 5000), 5);
console.log(newTransaction.showTotal());
newTransaction.addToCart(new Product("tv", 7000), 6);
console.log(newTransaction.showTotal());
console.log(newTransaction.checkOut());