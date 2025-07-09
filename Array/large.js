var num=[10,20,45,57,100,35,133,245,79,99];
var large=num[0];
for(var i=0; i<num.length; i=i+1)
{
	if(large<num[i])
		large=num[i];
}
document.write("The largest number among 10 different number is "+large);