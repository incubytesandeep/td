export function romanToInt(romanString: string): number {

    const romanToNumeral:  Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;
    for (let i = 0; i < romanString.length; i++) {
        if((i+1)<romanString.length && romanToNumeral[romanString[i]] < romanToNumeral[romanString[i+1]]){
            total = total - romanToNumeral[romanString[i]] + romanToNumeral[romanString[i+1]];
            i++;
        } else {
            total = total + romanToNumeral[romanString[i]];
        }
    }
    return total;
}

export function intToRoman(numericNumber: number): string {
    const nums: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10,9, 5,4, 1];
    const romanDigits: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result: string = "";
    for(let i = 0; i < nums.length; i++) {
        while(nums[i] <= numericNumber){
            result += romanDigits[i];
            numericNumber -= nums[i];
        }
    }
    return result;
}