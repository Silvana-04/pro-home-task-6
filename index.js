let i = 0; 
while (true){
  const message = prompt('Enter your message');
    i++; 

    if (message === 'break'){
        break;
    } else if (message === 'continue'){
        continue;
    }
    alert (i); 
}
