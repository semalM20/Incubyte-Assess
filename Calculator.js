class StringCalculator {
    static add(numbers) {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            let match = numbers.match(/^\/\/(.+)\n(.*)/);
            if (match) {
                delimiter = new RegExp(match[1], "g");
                numbers = match[2];
            }
        }

        let numList = numbers.split(delimiter).map(Number);

        let negatives = numList.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return numList.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;
