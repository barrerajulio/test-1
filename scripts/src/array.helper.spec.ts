import { assert } from 'chai';
import { beforeEach, describe, it } from 'mocha';

import { ArrayHelper } from './array.helper';
import { BenchHelper } from './bench.helper';

describe ('ArrayHelper', () => {
    let subject: ArrayHelper;
    const benchHelper = new BenchHelper()
    beforeEach (() => {
        subject = new ArrayHelper();
    });
    /**
     * [ x ] Probar que se ejecute condicional para determinar uso de set o de forEach
     * [ x ] Ejecutar con función set
     * [ x ] Ejecutar con programación funcional forEach
     */
    describe ('filtro de elementos', () => {
        it ('haciendo uso de set', () => {
            const uniquesValues = subject.unique(true, 1, 3, 2, 3, 4, 5, 6, 'h', 's', 'c', 'h', 3, 6);
            assert.deepStrictEqual(uniquesValues, [1, 3, 2, 4, 5 ,6, 'h', 's', 'c']);
        });
        it ('haciendo uso de forEach', () => {
            const uniquesValues = subject.unique(false, 1, 3, 2, 3, 4, 5, 6, 'h', 's', 'c', 'h', 3, 6);
            assert.deepStrictEqual(uniquesValues, [1, 3, 2, 4, 5 ,6, 'h', 's', 'c']);
        });
        /**
         * Nota: Aunque la versión de node da el mismo rendimiento a ambas
         */
        it ('calculamos el performance para valorar que set es el de mejor rendimiento', () => {
            const timeEllapsedSetFn = benchHelper.bench(
                subject.unique,
                100, [true, 1, 3, 2, 3, 4, 5, 6, 'h', 's', 'c', 'h', 3, 6],
                subject
            );
            const timeEllapsedForEachFn = benchHelper.bench(
                subject.unique,
                100, [false, 1, 3, 2, 3, 4, 5, 6, 'h', 's', 'c', 'h', 3, 6],
                subject
            );
            assert.isTrue(timeEllapsedSetFn <= timeEllapsedForEachFn);
        })
    });
});
