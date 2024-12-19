import {describe, it, expect} from 'vitest';

import isLeapYear from "./leapYear.js";

describe('isLeapYear should', () => {
    it('return false if year not divisible by 4 and return true if year divisible by 4', () => {
        const yearDivisibleBy4 = 1992;
        const yearNotDivisibleBy4 = 1995;

        expect(isLeapYear(yearDivisibleBy4)).toBe(true);
        expect(isLeapYear(yearNotDivisibleBy4)).toBe(false);
    })

    it('return true if year divisible by 400', () => {
        const yearDivisibleBy400 = 2000;

        expect(isLeapYear(yearDivisibleBy400)).toBe(true);
    })

    it('return false if year divisible by 100 and not by 400', () => {
        const year = 1800;
        expect(isLeapYear(year)).toBe(false);
    })

    it('throw error if year is not a valid integer', () => {
        const year = 2024.1;
        expect(() => isLeapYear(year)).toThrow('Input must be valid integer');
    })


})