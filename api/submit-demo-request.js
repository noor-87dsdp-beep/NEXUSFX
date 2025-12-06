/**
 * Vercel Serverless Function to handle demo access requests
 * and send notifications to Telegram
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Validates the incoming form data
 */
function validateFormData(data) {
  const errors = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Invalid or missing name');
  }

  if (!data.telegram || typeof data.telegram !== 'string' || data.telegram.trim().length === 0) {
    errors.push('Invalid or missing Telegram ID');
  }

  if (!data.email || typeof data.email !== 'string' || !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push('Invalid or missing email address');
  }

  return errors;
}

/**
 * Sends a message to Telegram using the Bot API
 */
async function sendTelegramNotification(formData) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Telegram configuration missing. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables.');
  }

  const message = `
🎯 *New Demo Access Request*

👤 *Name:* ${formData.name}
📱 *Telegram:* ${formData.telegram}
📧 *Email:* ${formData.email}

⏰ *Submitted at:* ${new Date().toLocaleString('en-US', { 
    timeZone: 'UTC',
    dateStyle: 'full',
    timeStyle: 'long'
  })}
  `.trim();

  const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const response = await fetch(telegramApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Telegram API error: ${response.status} - ${JSON.stringify(errorData)}`);
  }

  return await response.json();
}

/**
 * Main handler for the serverless function
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    // Parse and validate request body
    const formData = req.body;
    
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationErrors,
      });
    }

    // Send Telegram notification
    await sendTelegramNotification(formData);

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Demo request submitted successfully',
    });

  } catch (error) {
    console.error('Error processing demo request:', error);
    
    // Return error response
    return res.status(500).json({
      success: false,
      error: 'Failed to process demo request',
      message: error.message,
    });
  }
}
