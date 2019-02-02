"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEnvConfig_1 = require("../getEnvConfig");
describe('helpers/getEnvConfig', () => {
    it('should return env entries from example/.env.development', () => {
        const envConfig = getEnvConfig_1.getEnvConfig('example/.env.development');
        const expected = {
            name: 'Faiyaz Shaikh',
            age: '20',
            city: 'Mumbai',
            gender: 'Male',
        };
        expect(envConfig).toEqual(expected);
    });
    it('should return env entries from example/.env.sample', () => {
        const envConfig = getEnvConfig_1.getEnvConfig('example/.env.sample');
        const expected = {
            name: '',
            age: '',
            city: '',
            gender: '',
            country: '',
        };
        expect(Object.keys(envConfig).includes('country')).toBeTruthy();
        expect(envConfig).toEqual(expected);
    });
    it('should return mismatched keys with a type', () => {
        const missing = ['country'];
        const extra = ['continent', 'collegeName'];
        const mismatched = getEnvConfig_1.mismatchedKeys(missing, extra);
        const getMismatchTypeByKey = (key) => mismatched.find(m => m.key === key).mismatchType;
        expect(getMismatchTypeByKey(missing[0])).toBe('missing');
        expect(getMismatchTypeByKey(extra[0])).toBe('extra');
        expect(getMismatchTypeByKey(extra[1])).toBe('extra');
        expect(getEnvConfig_1.mismatchedKeys([], [])).toEqual([]);
    });
});
//# sourceMappingURL=getEnvConfig.test.js.map