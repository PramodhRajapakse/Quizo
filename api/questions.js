import axios from 'axios';

export default async function handler(req, res) {
  const { category } = req.query;

  try {
    const response = await axios.get('https://quizapi.io/api/v1/questions', {
      headers: {
        'X-Api-Key': process.env.QUIZ_API_KEY
      },
      params: { category }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API Proxy Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: 'Something went wrong' });
  }
}
