function sayhello(full_name) {
    console.log("Hello " + full_name)
}
sayhello("Abhishek")

var sayHello = new Function("full_name", "return console.log('Hello '+full_name)");

sayHello( "Abhishek Sharma")