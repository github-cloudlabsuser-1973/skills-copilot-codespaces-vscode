// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript

// Path: index.js

import React, { useState } from 'react';

const ReverseSentence = () => {
    const [sentence, setSentence] = useState('');

    const handleSentenceChange = (event) => {
        setSentence(event.target.value);
    };

    const reverseSentence = (sentence) => {
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    return (
        <div>
            <input value={sentence} onChange={handleSentenceChange} />
            <p>{reverseSentence(sentence)}</p>
        </div>
    );
}

export default ReverseSentence;


const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
];

// As an illustration, pull names out of the data array

const names = data.reduce((acc, curr) => {
    return acc.concat(curr.map(item => item.name));
}, []);
console.log(names); // ['John', 'Jane', 'Bob']]
