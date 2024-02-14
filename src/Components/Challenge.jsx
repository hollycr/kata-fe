import { useState } from 'react';

export default function Challenge({ challengeData }) {

    const [userInput, setUserInput] = useState()

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:9090/run-test/1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body : JSON.stringify({ userInput }) 
        })
        const { result: {outcome} } = await response.json();
        console.log(outcome);
    }

    return (
        <>
        <h1>{challengeData.name}</h1>
        <p>{challengeData.description}</p>
        <form onSubmit={onSubmit}>
            <textarea onChange={(event) => setUserInput(event.target.value)}></textarea>
            <button>Submit!</button>
        </form>
        </>
    )
}

