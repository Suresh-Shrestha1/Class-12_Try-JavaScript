var a=prompt("Enter first number");
var b=prompt("Enter second number");
var c=prompt("Enter third number");
if((a>b&&a<c)||(a<b&&a>c))
document.write("The middle no is "+a);
else if((b>a&&b<c)||(b<a&&b>c))
document.write("The middle no is "+b);
else
document.write("The middle no is "+c);