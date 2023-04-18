// When we add script tag in the html:

// Way 1:When we use script tag at the top of the html body:
//Here in this case this html will go the browser, then it will parse and read line by line, now in a line it have to load a file, then when it load then it stop parsing and now it execute but half of the line is not parsed so, it will give error in later process.
{/* <script src="./index.js"></script */}

// Way 2:When we use script tag at the bottom of the html body:
//Here in this case html file will be parsed completely then loading and execute the file not now this task get syncronouse means like it will run step by step which will take time allot to completely execute the file.
{/* <script src="./index.js"></script */}

// Way 3: When parsing and loading with the help of async function:
// Here in this case parsing and loading both are going at the same pace because we are make this syncronous function async but when loading will get complete then it will stop parsing and Execute, But the problem is till now half of the file is parsed and it execute so it may give error.
{/* <script src="./index.js" async></script */}

// Way 4: When parsing and loading with the help of defer which is advanced and more efficient way;
// Here in this case parsing and loading both will run parallely and it will load the file execute the file but it will not stop parsing and execute parallely.
{/* <script src="./index.js" defer></script */}


