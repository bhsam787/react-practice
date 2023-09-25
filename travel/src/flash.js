import { useState } from "react";
import "./styles.css";

export default function Flash() {
    return (
        <div className="App">
            <FlashCards />
        </div>
    );
}

const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript"
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components"
    },
    {
        id: 8832,
        question: "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX"
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "Props"
    },
    {
        id: 9103,
        question: "How to give components memory?",
        answer: "useState hook"
    },
    {
        id: 2002,
        question:
            "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element"
    }
];

function FlashCards() {
    const [selected, setSelected] = useState(null)
    function divClick(e, item) {
        setSelected(item.id !== selected ? item.id : item.id);
        console.log('selected', selected)
        console.log('item', item.id)
    }
    return (
        <div className="flashcards">
            {questions.map((item) => (<FlashCard item={item} key={item.id} selected={selected} divClick={divClick} />))}
        </div>
    );
}
function FlashCard({ item, selected, divClick }) {
    return (
        <div className={item.id == selected && 'selected'} onClick={((e) => { divClick(e, item) })}>
            <p>{item.id == selected ? item.answer : item.question}</p>
        </div>
    );

}

