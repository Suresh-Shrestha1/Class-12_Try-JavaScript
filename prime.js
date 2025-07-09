var n=prompt("Enter any number:");
var i; count=0;
for(i=1; i<=n; i=i+1)
{
	if(n%i==0)
	count=count+1;
}
if(count==2)
document.write(n+" is prime no");
else
document.write(n+" is not prime no");