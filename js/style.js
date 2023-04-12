let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]

let bnm = []
let str = ``


let ask_1 = confirm(`Приветствуем вас в нашем авто салоне`)
if (ask_1) {
    let ask_2 = prompt(`Какую марку машины хотите`)
    for (let i = 0; i < cars.length; i++) {
        if (ask_2 === cars[i].company) {
            bnm.push(cars[i])
        }
    }
    if (bnm.length !== 0) {
        for (let i = 0; i < bnm.length; i++) {
            str += `/ ` + bnm[i].model
        }
        let ask_3 = prompt(`выбирите ` + str)
        let ask_4 = confirm(`model- ` + bnm[ask_3 - 1].model + ` / company- ` + bnm[ask_3 - 1].company + ` / price- ` + bnm[ask_3 - 1].price + ` / ` + ` engineForce- ` + bnm[ask_3 - 1].engineForce + ` /  Хотите купить?`)
        if (ask_4) {
            let ask_5 = prompt(`укажите свой баланс $`)
            if (ask_5 === bnm[ask_3 - 1].price) {
                confirm(`Поздравляю с покупкой: ` + bnm[ask_3 - 1].model + `.  Приходите ещё.`)
            }
            else if (ask_5 > bnm[ask_3 - 1].price) {
                confirm(`Поздравляю с покупкой: ` + bnm[ask_3 - 1].model + `. остаток средств равен: ` + (ask_5 - bnm[ask_3 - 1].price) + `$.  Приходите ещё.`)
            }
            else if (ask_5 <= 0) { alert(`сумма не одекватна`) }
            else { alert(`недостаточно средств`) }
        }
        else { alert(`Приходите еще`) }
    }
    else {
        alert(`Нет такой марки`);
    }
}
else { alert(`Приходите еще`) }

