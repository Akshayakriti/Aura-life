import axios from 'axios';

const API_KEY = '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'; // Replace with your actual OpenAI API key

export async function getAIResponse(prompt) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt: prompt,
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.9,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching AI response:', error);
        throw error;
    }
}
