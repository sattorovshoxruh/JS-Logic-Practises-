/* 1. Cups */
let cup1 = "cola", cup2 = "fanta", empty = "empty";

function cupper(cup1, cup2, empty) {
    empty = cup1;
    cup1 = cup2;
    cup2 = empty;

    console.log(cup1, cup2);
}

cupper(cup1, cup2);