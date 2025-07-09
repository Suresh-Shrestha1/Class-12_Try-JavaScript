var n=prompt("Enter any numder");
var rev=0; digit=n;
while(n!=0)
{
	var m=n%10;
	rev=rev*10+m;
	n=n/10;
}
if(digit==rev)
document.write(digit+" is palindrome no");
else
document.write(digit+" is not palindrome no");