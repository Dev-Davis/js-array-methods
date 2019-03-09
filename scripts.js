const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
//make a passenger object
const passenger = {
    name:name,
    wallet: wallet,
    isStruggling: isStruggling
};
//put people on the bus
if (seat === 'back') {
    struggleBus.push(passenger);
    } else if (seat === 'front') {
        struggleBus.unshift(passenger);
    }

};

const unloadPassenger = (bus, seat) => {
    //remove passenger from the bus
    //return the passenger object
    if(seat === 'front') {
        //shift returns the furst element at the array index
        return bus.shift();
    } else if (seat === 'back'){
            return bus.pop()
        }
};


const allAboard = (bus) => {
    //loop over passengers
    //given the bus consts 5 bucks
    //if passenger can afford it, charge them
    //if NOT, kick them off

    const busFare = 5;
    const validPassengers = [];

    bus.forEach((passenger) => {
        if (passenger.wallet >= busFare) {
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
        };
    });

    return(validPassengers);
}


const printToDom = (divId, texToPrint) => {
    selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = texToPrint;
}

const busBuilder = (bus) => {
    //build domString from bus parameter
    let domString = '';

    for(let i = 0; i < bus.length; i++) {
        domString += `<div class="bus-seat">`
        domString +=    `<h4>${bus[i].name}</h4>`
        domString +=    `<p>${bus[i].wallet}</p>`
        domString +=    `<p>${bus[i].isStruggling}</p>`
        domString += `</div>`
    }
    printToDom('the-bus', domString);
}

const init = () => {
    addPassenger('Michael', 3, true, 'front');
    addPassenger('Zoe', 4, false, 'back');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('Saul', 12, false, 'front');
    addPassenger('Matt1', 5, true, 'front');
    addPassenger('Matt2', 15, true, 'front');
    addPassenger('Matt3', 3, true, 'front');

    const firstPassenger = unloadPassenger(struggleBus, 'front');
    console.log(firstPassenger);

    const busPeople = allAboard(struggleBus);

    busBuilder(busPeople);


    console.log(struggleBus);
};
init();