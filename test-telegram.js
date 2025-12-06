#!/usr/bin/env node

/**
 * Test script for Telegram notification integration
 * 
 * This script sends a test notification to verify your Telegram bot setup.
 * 
 * Usage:
 *   node test-telegram.js
 * 
 * Prerequisites:
 *   - Set TELEGRAM_BOT_TOKEN environment variable
 *   - Set TELEGRAM_CHAT_ID environment variable
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function testTelegramNotification() {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('❌ Error: Missing environment variables');
    console.error('   Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID');
    console.error('\nExample:');
    console.error('   export TELEGRAM_BOT_TOKEN="your_bot_token"');
    console.error('   export TELEGRAM_CHAT_ID="your_chat_id"');
    console.error('   node test-telegram.js');
    process.exit(1);
  }

  console.log('🚀 Testing Telegram notification...\n');

  const testMessage = `
🎯 *Test Demo Access Request*

This is a test notification from your NEXUS FX demo request system.

👤 *Name:* John Doe
📱 *Telegram:* @johndoe
📧 *Email:* john.doe@example.com

⏰ *Submitted at:* ${new Date().toLocaleString('en-US', { 
    timeZone: 'UTC',
    dateStyle: 'full',
    timeStyle: 'long'
  })}

✅ If you see this message, your Telegram bot is configured correctly!
  `.trim();

  const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: testMessage,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Failed to send Telegram notification');
      console.error('   Status:', response.status);
      console.error('   Error:', JSON.stringify(data, null, 2));
      process.exit(1);
    }

    console.log('✅ Success! Test notification sent to Telegram');
    console.log('   Message ID:', data.result.message_id);
    console.log('   Chat ID:', data.result.chat.id);
    console.log('\n💡 Check your Telegram to confirm you received the message.');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testTelegramNotification();
