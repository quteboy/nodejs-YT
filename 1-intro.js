const amount = 9;
if (amount < 10) {
  console.log("Small number");
} else {
  console.log("Large number");
}
console.log(`Hey its my first node app`)
console.log(__dirname)
setInterval(()=>{
console.log('Hello world')
},1000)

/**
 *  ! Global No variable
 *  ? __dirname = path to current directory
 *  ? __filename = file name
 *  ? require = function to use modules (commonJS)
 *  ? module = info about current module (file)
 *  ? process = infor about env where programm is being executed 
 */