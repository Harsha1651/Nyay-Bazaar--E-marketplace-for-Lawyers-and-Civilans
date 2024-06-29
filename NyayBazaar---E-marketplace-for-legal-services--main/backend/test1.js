import GptClient from 'gpt4free-client';

async function generateText() {
    // Create chat completion
    const completion = await GptClient.create({
        model: 'gpt-4-0613',
        temperature: 0.7,
        systemPrompt: 'You are powerful AI assistant\n',
        messages: [
            {
                role: 'system',
                messages: 'hello world'
            }
        ]
    });
    
    // Get generated text
    const generatedText = await completion;
    
    console.log(generatedText);
}

generateText();