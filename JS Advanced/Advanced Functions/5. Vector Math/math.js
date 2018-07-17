let solution = (function solution() {
    function add(a, b) {
        return [a[0] + b[0], a[1] + b[1]];
    }
    function multiply(a, b) {
        return [a[0] * b, a[1] * b];
    }
    function length(a, b){
        return Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
    }
    function dot(a, b) {
        return (a[0] * b[0]) + (a[1] * b[1]);
    }
    function cross(a, b) {
        return (a[0] * b[1]) - (a[1] * b[0]);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
})();



console.log(solution.add([5.43, -1], [1, 31]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));


