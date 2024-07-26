function prime(a)
{
        if(a==0||a==1)
        {
            console.log("Neither composite or prime");
            return;
        }
        for(let x=2;x<a;x++)
        {
            if(a%x==0)
            {
                console.log("It is not prime number");
                return;
            }
        }
        console.log("It is prime number");
}
let n= prompt("Enter the number ");
prime(5);