var text = 'Tudo Bem? Meu nome é Rodolfo Bandeira!';

var myName = 'Rodolfo';

var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < (i + myName.length); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length < 1) {
    console.log("Your name wasn't found!");   
} else {
    console.log(hits);   
}

