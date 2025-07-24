export function romanToInt(romanString: string): number {
    if (!romanString) return 0;

    const romanToNumeral: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let prev = 0;
    for (let i = romanString.length - 1; i >= 0; i--) {
        const curr = romanToNumeral[romanString[i]];
        if (curr < prev) {
            total -= curr;
        } else {
            total += curr;
        }
        prev = curr;
    }
    return total;
}

export function intToRoman(numericNumber: number): string {
    if (numericNumber <= 0) return "";

    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanDigits = [
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];

    let result = "";
    let n = numericNumber;
    for (let i = 0; i < nums.length; i++) {
        while (n >= nums[i]) {
            result += romanDigits[i];
            n -= nums[i];
        }
    }
    return result;
}