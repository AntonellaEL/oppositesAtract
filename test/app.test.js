import { describe, it, expect } from "vitest"; 
import { isLove } from "./app.js";

describe('isLove', () => {
    it('debería devolver true si Timmy tiene 1 pétalo y Sarah tiene 4 pétalos', () => {
        expect(isLove(1, 4)).toBe(true);
    });

    it('debería devolver false si Timmy tiene 2 pétalos y Sarah tiene 2 pétalos', () => {
        expect(isLove(2, 2)).toBe(false);
    });

    it('debería devolver true si Timmy tiene 0 pétalos y Sarah tiene 1 pétalo', () => {
        expect(isLove(0, 1)).toBe(true);
    });

    it('debería devolver false si Timmy tiene 0 pétalos y Sarah tiene 0 pétalos', () => {
        expect(isLove(0, 0)).toBe(false);
    });
   
    
});
