/**
 * Wealthconomy Email Template - Resend API Integration Example
 * 
 * Instructions:
 * 1. npm install resend handlebars
 * 2. Set your RESEND_API_KEY in environment variables.
 * 3. Run: node send-with-resend.js
 */

const { Resend } = require('resend');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const resend = new Resend(process.env.RESEND_API_KEY || 're_your_api_key');

/**
 * Render and send template via Resend API
 */
async function sendResendEmail({ category, templateName, to, subject, data }) {
  try {
    const templatePath = path.join(__dirname, '..', 'templates', category, `${templateName}.html`);
    const sourceHtml = fs.readFileSync(templatePath, 'utf8');

    const template = handlebars.compile(sourceHtml);
    const renderedHtml = template({
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

    const response = await resend.emails.send({
      from: 'Wealthconomy <notifications@wealthconomy.com>',
      to: [to],
      subject,
      html: renderedHtml,
    });

    console.log(`✅ Resend Email [${templateName}] dispatched to ${to}:`, response);
    return response;
  } catch (error) {
    console.error(`❌ Resend dispatch failed for [${templateName}]:`, error);
    throw error;
  }
}

module.exports = { sendResendEmail };
