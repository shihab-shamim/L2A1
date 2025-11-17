


const formatValue =(value:string | number |boolean):string | number |boolean=>{
    if(typeof value === "string") return value.toUpperCase();
     if(typeof value === "number") return value *10 ;
     if(typeof value === "boolean") return !value ;
     return value;

}



const getLength =(value:string | unknown[]):number=>{
    if(typeof value ==="string") return value.length
    if(Array.isArray(value)) return value.length
    return 0;

}






class Person {
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }

    getDetails():string{
      return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}






const filterByRating =(value:{title:string,rating:number}[]):{title:string,rating:number}[]=>{
  
    value.forEach(item => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(`Invalid rating '${item.rating}' for "${item.title}". Rating must be between 0 and 5.`);
    }
  });

  return value.filter(item => item.rating >= 4);


}







 
const filterActiveUsers  =(value:{id: number, name: string, email: string, isActive: boolean}[]):{id: number, name: string, email: string, isActive: boolean}[]=>{

     const result=value.filter(item=>item.isActive ===true)
    return result


}






interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


const printBookDetails =(value:Book):void=>{
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value?.publishedYear}, Available: ${value.isAvailable?'Yes':'No'}`);

}




const getUniqueValues =(arr1:Array<number |string>,arr2:Array<number |string>):Array<number |string>=>{
   const result:Array<number |string> = [];

    const allValues = [...arr1, ...arr2];

    for (let i = 0; i < allValues.length; i++) {
        const value = allValues[i];
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === value) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(value);
        }
    }

    return result;

}



const calculateTotalPrice =(value:{name:string,price:number,quantity:number,discount?:number}[])=>{
      return value.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    const discountedTotal = product.discount
      ? productTotal * (1 - product.discount / 100)
      : productTotal;
    return total + discountedTotal;
  }, 0);

}





