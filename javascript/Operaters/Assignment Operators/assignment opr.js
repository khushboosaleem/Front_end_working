// Let's Explore the Assignment Operators

// Operator  	 Example	            Same As
// =	         x = y	                x = y
// +=	         x += y	                x = x + y
// -=	         x -= y	                x = x - y
// *=	         x *= y	                x = x * y
// /=	         x /= y	                x = x / y
// %=	         x %= y	                x = x % y
// **=	         x **= y	            x = x ** y

let a = 5 
let b = 5

console.log(a+=b)  // 5 + 5 = 10 , a = 10
console.log(a)   // 10
console.log(a-=b)  // 10-5 = 5 , a = 5
console.log(a)  // 5
console.log(a*=b)  // 5*5 = 25, a = 25
console.log(a)   // 25
console.log(a/=b)  // 25/5 , a = 5
console.log(a)  // 5
console.log(a%=b)  // 5%5 = 0 , a = 0
console.log(a)   // 0
console.log(a**=b)  // 0**5 = 0 , a = 0
console.log(a)  // 0