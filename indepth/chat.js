const Groq = require('groq-sdk');
const readline = require('readline');

const groq = new Groq({
    apiKey: "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"
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your message: ', async (message) => {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [{ role: "user", content: message }],
        "model": "llama-3.3-70b-versatile",
        "temperature": 1,
        "max_completion_tokens": 1024,
        "top_p": 1,
        "stream": true,
        "stop": null
    });

    for await (const chunk of chatCompletion) {
        const content = chunk.choices[0]?.delta?.content || '';
        for (const char of content) {
            process.stdout.write(char);
        }
    }

    rl.close();
});
    