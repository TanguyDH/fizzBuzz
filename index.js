function fizzBuzz(N) {
    for (var i = 1; i <= N; i++) {
        var output = '';
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        console.log(output || i);
    }
}
// Example :
fizzBuzz(100);
