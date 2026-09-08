class CoffeMashin {

    MakeCoffe() {
        this.#Water(),
        this.#Coffe()
        console.log("Кофе готово")
    }

    #Water(){
        console.log("Гріє воду")
    }

    #Coffe(){
        console.log("Меле каву")
    }
}

const coffe = new CoffeMashin()
coffe.MakeCoffe()