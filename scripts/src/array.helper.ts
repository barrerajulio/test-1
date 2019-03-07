/**
 * Utilidad para el manejo de arreglos
 * @export
 */
export class ArrayHelper {
    /**
     * Filtra los valores repetidos y devuelve valores únicos, el mejor performance lo tiene la programación funcional con
     * forEach solo después de 
     * ```
     * interface Set<T> { }
     * ```
     * la cual solo esta disponible a partir del ECMA Script 6 al igual que forEach, se declaran ambas funciones con fines
     * didacticos
     * @memberof ArrayHelper
     */
    public unique(useSet: boolean, ...items: any[]): any[] {
        if (useSet === true) {
            return Array.from(new Set(items));
        }
        const uniques: any[] = [];
        items.forEach((item) => {
            if (uniques.includes(item) === false) {
                uniques.push(item)
            }
        });
        return uniques;
    }

    /**
     * Dada un arreglo de elementos, buscamos la secuencia numerica ascendente más larga, es decir
     * si tuvieramos [1, 2, 3, 4, 1, 3, 4, 5, 6, 7], la secuencia devuelte debe ser [3, 4, 5, 6, 7]
     * @param {any[]} items
     * @returns {any[]}
     * @memberof ArrayHelper
     */
    public largestSequence(...items: any[]): any[] {
        let previousNumber = Number.MIN_VALUE;
        let currentSequence: any[] = [];
        let maxSequence = currentSequence;
        items.forEach((current) => {
            currentSequence = this.getCurrentSequence(currentSequence, previousNumber, current);
            previousNumber = current;
            if (maxSequence.length < currentSequence.length) {
                maxSequence = currentSequence;
            }
        });
        return maxSequence;
    }

    /**
     * Devuelve la secuencia concatenando el valor actual solo si este es consecutivo a previousNumber
     * @protected
     * @param {any[]} currentSequence
     * @param {number} previousNumber
     * @param {number} current
     * @returns {any[]}
     * @memberof ArrayHelper
     */
    protected getCurrentSequence(currentSequence: any[], previousNumber: number, current: number): any[] {
        if (previousNumber + 1 !== current) {
            return [current];
        }
        currentSequence.push(current);
        return currentSequence;
    }
}
