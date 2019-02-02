"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
describe('helpers/logger', () => {
    it('should run logging methods', () => {
        logger_1.default.error('An error has occured!');
        logger_1.default.info('Earth is flat');
        logger_1.default.success('You are not dead :)');
        logger_1.default.warn('You will die one day :(');
    });
});
//# sourceMappingURL=logger.test.js.map