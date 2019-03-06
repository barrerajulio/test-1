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
}
