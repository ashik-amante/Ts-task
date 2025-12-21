interface Vehicle{
    startEngine():void;
    stopEngine(): void;
    move():void
}

class Car1 implements Vehicle{
    startEngine(): void {
        console.log('Engine start');
    }
    stopEngine(): void {
        console.log('stop engine');
    }
    move(): void {
        console.log('move the car');
    }
    test():void {
        console.log('emni dilam');
    }
}

const toyota = new Car1()
toyota.startEngine()

// abstract
// idea

abstract class Car2{
    startEngine(): void {
        
    }
    stopEngine(): void {
        console.log('stop engine');
    }
    move(): void {
        console.log('move the car');
    }
    test():void {
        console.log('emni dilam');
    }
}

 class Toyota extends Car2{
    startEngine(): void {
        console.log('Engine start');
    }
     stopEngine(): void {
        console.log('stop engine');
    }
    move(): void {
        console.log('move the car');
    }
    test():void {
        console.log('emni dilam');
    }
}