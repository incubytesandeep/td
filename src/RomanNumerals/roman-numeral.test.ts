import { describe, it, expect } from 'vitest';
import { romanToInt, intToRoman } from './roman-numeral';

const romanToIntCases: [string, number][] = [
    ["", 0],
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
    ["II", 2],
    ["XIV", 14],
    ["MMMCMXCIX", 3999],
    ["XCIX", 99],
    ["MCMXC", 1990]
];

describe('Roman Numeral Converter', () => {
    it.each(romanToIntCases)('should convert %s to %d', (romanString, num) => {
        expect(romanToInt(romanString)).toBe(num);
    });
});

const intToRomanCases: [number, string][] = [
    [0, ""],
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
    [2, "II"],
    [14, "XIV"],
    [3999, "MMMCMXCIX"],
    [99, "XCIX"],
    [1990, "MCMXC"]
];

describe('Number to Roman Converter', () => {
    it.each(intToRomanCases)('should convert %d to %s', (num, romanString) => {
        expect(intToRoman(num)).toBe(romanString);
    });
});