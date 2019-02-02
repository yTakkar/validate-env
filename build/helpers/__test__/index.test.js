"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('helpers/index', () => {
    it('should return diff [elems present in first array1 but not in second]', () => {
        const d = index_1.diff([1, 2, 3, 4, 5], [1, 2, 3]);
        expect(d).toEqual([4, 5]);
        expect(index_1.diff([], [])).toEqual([]);
    });
    it('should return if the provided file exists or not', () => {
        expect(index_1.fileExists('example/.env.development')).toBe(true);
        expect(index_1.fileExists('example/.env.invalid')).toBe(false);
        expect(index_1.fileExists('helpers/logger.js')).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map