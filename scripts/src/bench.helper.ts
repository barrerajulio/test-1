/**
 * @export
 */
export class BenchHelper {
    protected time: number = 0;

    /**
     * Esta función fue extraída de la liga: https://stackoverflow.com/questions/1003855/how-can-i-benchmark-javascript-code
     *
     * Figure out how long it takes for a method to execute.
     * @param {Function} method
     * @param {number} iterations
     * @param {any[]} args
     * @param {*} context
     * @returns {number}
     * @memberof BenchHelper
     */
    public bench(method: Function, iterations: number, args: any[], context: any): number {    
        this.time = 0
        const result = [];
        let i = 0;
        this.timer('start');
        while (i < iterations) {
            result.push(method.apply(context, args));
            i++;
        }
        const execTime = this.timer('stop');
        if ( typeof console === "object") {
            console.log('Mean execution time was: ', execTime / iterations);
            console.log('Sum execution time was: ', execTime);
            console.log('Result of the method call was: ', result[0]);
        }
        return execTime;  
    }

    /**
     * @protected
     * @param {string} action
     * @returns {number}
     * @memberof BenchHelper
     */
    protected timer(action: string): number {
        var d = Date.now();
        if (this.time < 1 || action === 'start') {
            this.time = d;
            return 0;
        } else if (action === 'stop') {
            let t = d - this.time;
            this.time = 0;
            return t;
        }
        return d - this.time;
    }
}
