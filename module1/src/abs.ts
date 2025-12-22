interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void
}

class Car1 implements Vehicle {
    startEngine(): void {
        console.log('Engine start');
    }
    stopEngine(): void {
        console.log('stop engine');
    }
    move(): void {
        console.log('move the car');
    }
    test(): void {
        console.log('emni dilam');
    }
}

const getCar= (param: Vehicle)=>{
    param.startEngine()
    param.stopEngine()  
    param.move()
}
const toyota = new Car1()
getCar(toyota)

// abstract
// idea

abstract class Car2 {
    abstract startEngine(): void
    abstract stopEngine(): void
    abstract move(): void
    test(): void {
        console.log('emni dilam');
    }
}

class Toyota extends Car2 {
    startEngine(): void {
        console.log('Engine start');
    }
    stopEngine(): void {
        console.log('stop engine');
    }
    move(): void {
        console.log('move the car');
    }
    test(): void {
        console.log('emni dilam');
    }
}


