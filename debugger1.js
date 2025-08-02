// 

function test() {
    console.log('This is a test function');
    // Uncaught ReferenceError: x is not defined
    x = y + 5;
}

test();