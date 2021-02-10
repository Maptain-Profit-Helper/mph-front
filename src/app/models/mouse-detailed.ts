export class MouseDetailed {

    constructor(public name: string, public avg: number, public min: number, public max: number, public location: string ) {
        this.name = name;
        this.avg = avg;
        this.min = min;
        this.max = max;
        this.location = location;
    }
}
