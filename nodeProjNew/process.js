// console.log(process.argv)
process.stdout.write('Ask the question ');

process.stdin.on('data', function(ans){
   console.log(ans.toString()); 
})