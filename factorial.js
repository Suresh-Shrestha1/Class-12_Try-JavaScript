var n=prompt("Enter any number");
var i, fact=1;
for(i=n; i>=1; i=i-1)
{
	fact=fact*i;
}
document.write("The factorial number of " +n+ " is " +fact);