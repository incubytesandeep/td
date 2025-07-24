export default function isLeapYear(year: number): boolean | Error {
    if (!Number.isInteger(year)) {
        throw new Error('Input must be valid integer');
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}