/**
 * Wealthconomy Email Template - Nodemailer Integration Example
 * 
 * Instructions:
 * 1. npm install nodemailer handlebars
 * 2. Set your SMTP credentials in environment variables or configuration.
 * 3. Run: node send-with-nodemailer.js
 */

const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

// 1. Configure the SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-email@wealthconomy.com',
    pass: process.env.SMTP_PASS || 'your-app-password',
  },
});

/**
 * Compile and send a Wealthconomy template
 * @param {string} category - Category folder ('auth', 'wallet', 'referral', 'security', 'kyc', 'notifications')
 * @param {string} templateName - Name of template file without .html (e.g., 'welcome-registration', 'deposit-successful')
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject line
 * @param {object} data - Dynamic variable payload to replace {{variables}}
 */
async function sendWealthconomyEmail({ category, templateName, to, subject, data }) {
  try {
    const templatePath = path.join(__dirname, '..', 'templates', category, `${templateName}.html`);
    const sourceHtml = fs.readFileSync(templatePath, 'utf8');

    // Compile with Handlebars
    const template = handlebars.compile(sourceHtml);
    const renderedHtml = template({
      // Default common branding links fallback
      dashboard_url: 'https://app.wealthconomy.com/dashboard',
      help_url: 'https://support.wealthconomy.com',
      privacy_url: 'https://wealthconomy.com/privacy',
      terms_url: 'https://wealthconomy.com/terms',
      twitter_url: 'https://x.com/wealthconomy',
      telegram_url: 'https://t.me/wealthconomy',
      linkedin_url: 'https://linkedin.com/company/wealthconomy',
      instagram_url: 'https://instagram.com/wealthconomy',
      ...data,
    });

    const info = await transporter.sendMail({
      from: '"Wealthconomy" <no-reply@wealthconomy.com>',
      to,
      subject,
      html: renderedHtml,
    });

    console.log(`✅ Email [${templateName}] sent successfully to ${to}. Message ID: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`❌ Failed to send email [${templateName}]:`, error);
    throw error;
  }
}

// Example Execution
async function runDemo() {
  console.log('Sending sample Wealthconomy Welcome & Deposit emails...');

  // Example 1: Send Welcome Email
  /*
  await sendWealthconomyEmail({
    category: 'auth',
    templateName: 'welcome-registration',
    to: 'user@example.com',
    subject: 'Welcome to Wealthconomy! 🚀',
    data: {
      user_name: 'Alex Johnson',
      user_email: 'user@example.com',
      account_id: 'WTH-984210',
    }
  });
  */

  // Example 2: Send Deposit Confirmed Email
  /*
  await sendWealthconomyEmail({
    category: 'wallet',
    templateName: 'deposit-successful',
    to: 'user@example.com',
    subject: 'Deposit Confirmed: +$5,000.00 USD Credited',
    data: {
      user_name: 'Alex Johnson',
      amount: '5,000.00',
      currency: 'USD',
      new_balance: '14,250.00',
      transaction_id: 'TXN-98402-991A',
      payment_method: 'Wire Transfer / Stripe',
      transaction_date: 'Oct 24, 2026 14:32 UTC',
      fee: '$0.00',
      transaction_url: 'https://app.wealthconomy.com/wallet/transactions/TXN-98402-991A'
    }
  });
  */
}

module.exports = { sendWealthconomyEmail };
