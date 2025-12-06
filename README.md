# NEXUS FX - All-in-One Brokerage Platform

The future of Forex brokerage. Launch your fully licensed brokerage or trade with institutional-grade tools.

## What is NEXUS FX?

**NEXUS FX is a trading platform software provider, not a trading service.** We empower entrepreneurs and businesses to become their own trading platform operators by providing a complete, institutional-grade white-label brokerage solution.

### Our Mission

To democratize access to professional trading infrastructure by providing a turnkey brokerage platform that enables anyone to launch and operate their own Forex brokerage—without needing technical expertise, developers, or complex infrastructure.

### Core Value Proposition

- **Become an Operator, Not Just a Trader**: NEXUS FX transforms you from a market participant into a market maker, giving you the tools to run your own brokerage business.
- **Zero Technical Barrier**: Launch your brokerage with no coding required. We handle updates, security, and infrastructure so you can focus on growing your business.
- **Complete Solution**: Everything you need is included—from dealing desk and price feeds to CRM, KYC, and payment processing.

### Guiding Principles

1. **Accessibility**: Professional-grade trading infrastructure should be available to everyone, not just large institutions.
2. **Simplicity**: Complex technology should be delivered through simple, user-friendly solutions.
3. **Independence**: Our customers should have full control and ownership of their brokerage operations.
4. **Reliability**: Mission-critical trading systems require 99.99% uptime and sub-10ms execution.

## Everything Included

When you purchase from NEXUS FX, you gain instant access to the full institutional-grade white label Forex brokerage solution:

### Full Feature Set

- **B-Book Dealing Desk** - "God Mode" order/intervention, manage PnL, set spreads, custom slippage
- **Real-Time Price Feeds** - FX, Gold, Indices across 50+ assets
- **Complete Admin Panel** - Control risk, orders, and client management
- **CRM & KYC Integration** - Manage leads, documents, verification, assign agents
- **Crypto Deposit/Withdrawal** - USDT/ERC20, TRC20 integration to your wallet
- **No Code Required** - Launch instantly with zero development
- **Reporting Tools** - Deposit history and full trade audit trails

### White-Label Integration

- Full SaaS/white-label integration (ready for your own branding/logo/colors)
- Backend integration with NEXUS FX admin controls
- Enterprise-level server/cloud deployment or dedicated server setup
- Custom risk engine, price/fee logic, and operator overrides
- Priority support & updates (especially for Lifetime license holders)

### Why Choose NEXUS FX?

- We handle updates, security, and hosting for you
- Focus on sales: you don't need developers, servers, or DevOps
- Scale at your pace: from Professional to one-time Lifetime access

## Getting Started

### Development

```bash
cd frontend
npm install
npm run dev
```

### Production Build

```bash
cd frontend
npm run build
npm run preview
```

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3
- Framer Motion
- Lucide React Icons

## Telegram Notification Setup

This project integrates with Telegram Bot API to send instant notifications when customers submit demo access requests.

### Prerequisites

1. A Telegram account
2. Access to create a Telegram bot via @BotFather

### Step-by-Step Setup

#### 1. Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Start a chat and send the command `/newbot`
3. Follow the prompts to:
   - Choose a name for your bot (e.g., "NEXUS FX Notifications")
   - Choose a username for your bot (must end in 'bot', e.g., "nexusfx_notifications_bot")
4. **Save the Bot Token** - You'll receive a token that looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

#### 2. Get Your Chat ID

**Option A: Using @userinfobot**
1. Search for **@userinfobot** on Telegram
2. Start a chat and it will send you your user ID
3. Your Chat ID is the number it provides

**Option B: Using @RawDataBot**
1. Search for **@RawDataBot** on Telegram
2. Start a chat or forward any message to it
3. It will show your Chat ID in the response

**For Group Notifications:**
1. Create a group in Telegram
2. Add your bot to the group (search by username)
3. Send any message in the group
4. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
5. Look for the `"chat":{"id":` field - this is your group Chat ID (will be negative for groups)

#### 3. Configure Environment Variables

**For Local Development:**
1. Copy `.env.example` to `.env` in the `frontend` directory
2. Add your Telegram credentials:
   ```bash
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

**For Vercel Deployment:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `TELEGRAM_BOT_TOKEN`: Your bot token from BotFather
   - `TELEGRAM_CHAT_ID`: Your chat/user ID
4. Redeploy your project for changes to take effect

#### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Open the application in your browser
3. Click "Get Demo Access" button
4. Fill out the form with test data
5. Submit the form
6. Check your Telegram - you should receive a notification with the form data

### Security Considerations

- **Never commit** your `.env` file to version control (it's already in `.gitignore`)
- Keep your bot token secure - anyone with access can send messages as your bot
- Use environment variables for all sensitive configuration
- Consider rate limiting if your application gets high traffic
- For production, consider using a dedicated chat group for notifications

### Notification Format

When a demo request is submitted, you'll receive a Telegram message with:
- 👤 Customer's Full Name
- 📱 Telegram ID
- 📧 Email Address
- ⏰ Submission timestamp (UTC)

### Troubleshooting

**Bot not sending messages?**
- Verify your `TELEGRAM_BOT_TOKEN` is correct
- Ensure your `TELEGRAM_CHAT_ID` is correct
- Check that you've started a chat with the bot (send `/start` to your bot)
- For group notifications, ensure the bot is still a member of the group

**Getting "Chat not found" error?**
- You must initiate a conversation with the bot first (send `/start`)
- For groups, add the bot and ensure it has permission to send messages

**Messages not in the correct language?**
- The notification messages support all Unicode characters including Arabic, Chinese, Bengali, and Khmer
- Ensure your Telegram client is updated to the latest version

## License

All rights reserved. © NEXUS FX