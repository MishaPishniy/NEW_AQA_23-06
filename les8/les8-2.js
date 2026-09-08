function devide (a,b) {
    return a + b
}

try {
    const result = devide(10,2)
    console.log(result)
}

catch(error){
    console.log(`Помилка: ${error.message}`)
}

finally{
    console.log("Finish")
}

