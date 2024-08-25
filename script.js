function generateExplanation() {
    const request = document.getElementById('trickRequest').value.toLowerCase();
    const keyPhrase = request.match(/how to (.+)/);

    if (keyPhrase && keyPhrase[1]) {
        const reformattedPrompt = `Pretend you're a master magician and illusionist. Summarize how a magician can ${keyPhrase[1]}.`;
        document.getElementById('result').innerText = reformattedPrompt;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid request like "Explain how to make a card disappear".';
    }
}
