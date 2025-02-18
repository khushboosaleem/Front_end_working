let color = 'white';

switch(color){
    case 'red':
        console.log('Stop');
        break;
    case 'yellow':
        console.log('Slow down');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('Broken light')
}



// Use Switch Statment to print the day of the week using a number variable day values with 1 to 7

let day = 'jan';

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('This is not the day')
}

// alert("Something is wrong")

// console.error('This is an error meassage')
// console.warn('This is an warning meassage')

let first_name = prompt("Enter your first name: ");
console.log(first_name)

let last_name = prompt("Enter your last name: ");
console.log(last_name)

// console.log(`welcome ${first_name} ${last_name}`)

let mesg = `welcome ${first_name} ${last_name}`
alert(mesg)