class User { 

    #age;

    get age(){
        return this.#age
    }

    set age(value) {
        if (typeof value !== "number") {
            throw new Error ("Вік тільки число")
        }

        if(value < 0) {
            throw new Error ("Вік не може бути менше нуля")
        }

        this.#age = value
    }
}

const user = new User ()

try {
    user.age = "Число"
}
catch(error){

    console.log(error.message)
}

