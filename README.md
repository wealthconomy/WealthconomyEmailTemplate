# Wealthconomy Email Templates Suite 📧

Production-ready, responsive, beautifully branded transactional, marketing, compliance, and notification HTML email templates for **Wealthconomy**. Built with table-based email layouts, high-conversion typography, dynamic `{{variable}}` handlebars interpolation, and full cross-client compatibility.

---

## 📁 Repository Structure

```
WealthconomyEmailTemplate/
├── templates/
│   ├── portfolio/                 # 🌱 Portfolio & Wealth Savings (WealthFlex, WealthGoal, WealthFix, WealthFlow, WealthFam, WealthGroup)
│   │   ├── portfolio-created.html
│   │   ├── portfolio-deposit.html
│   │   └── portfolio-matured.html
│   ├── admin/                     # 👑 Admin Team Management
│   │   └── admin-access-granted.html
│   ├── compliance/                # ⚠️ Risk & Policy Compliance
│   │   ├── account-strike.html
│   │   └── account-suspended.html
│   ├── newsletter/                # 📬 Marketing & Broadcasts
│   │   ├── newsletter-welcome.html
│   │   └── newsletter-issue.html
│   ├── auth/                      # 🔐 Authentication & Onboarding
│   │   ├── welcome-registration.html
│   │   ├── otp-verification.html
│   │   ├── password-reset.html
│   │   └── password-changed.html
│   ├── wallet/                    # 💳 Deposits, Payouts & P2P Transfers
│   │   ├── deposit-successful.html
│   │   ├── deposit-pending.html
│   │   ├── withdrawal-requested.html
│   │   ├── withdrawal-successful.html
│   │   ├── transfer-sent.html
│   │   └── transfer-received.html
│   ├── referral/                  # 🎁 Growth & Commission Earnings
│   │   ├── referral-signup.html
│   │   └── referral-bonus.html
│   ├── security/                  # 🛡️ Account Protection Alerts
│   │   ├── new-device-login.html
│   │   └── two-factor-enabled.html
│   ├── kyc/                       # 📑 Identity Compliance Workflows
│   │   ├── kyc-submitted.html
│   │   ├── kyc-approved.html
│   │   └── kyc-action-required.html
│   ├── notifications/             # 📊 Statements & Support
│   │   ├── account-statement.html
│   │   └── support-ticket.html
│   └── index.html                 # 📱 Interactive Preview Dashboard
├── assets/                        # Brand logos & icons
├── examples/                      # Node.js backend integration scripts
│   ├── send-with-nodemailer.js
│   └── send-with-resend.js
├── package.json                   # Local dev server commands
├── index.html                     # Root redirect entry
└── README.md                      # Complete documentation & variable reference
```

---

## 🎨 Design System & Brand Palette

| Token | Hex Code | Purpose |
|---|---|---|
| **Primary Deep Teal** | `#155D5F` | Primary brand headers, badges, primary action buttons |
| **Dark Teal (Gradient)** | `#0D4244` | Header depth, footer background, hover state |
| **Accent Gold** | `#FFCF65` | Highlights, badges, secondary buttons |
| **Warm Gold / Amber** | `#D97706` | High-contrast status badges & alerts |
| **Text Primary (Dark)** | `#1A1A1A` | Main headings and body text |
| **Text Slate / Muted** | `#454C59` / `#64748B` | Secondary descriptions, timestamps, metadata |
| **Surface / Outer BG** | `#F4F6F8` / `#F8FAFC` | Email background container |
| **Card White** | `#FFFFFF` | Center email container box |
| **Success Emerald** | `#10B981` | Successful deposits, approvals, savings confirmations |
| **Destructive Red** | `#EF4444` / `#DC2626` | Suspensions, strikes, security lock |

---

## 📧 Templates & Variable Reference

All templates use double curly braces `{{variable_name}}` for dynamic content interpolation.

---

### 1. 🌱 Portfolio & Wealth Savings (`templates/portfolio/`)

#### `portfolio-created.html`
Sent when a user activates or starts saving in a Wealth Type (e.g. WealthFlex, WealthGoal, WealthFix, WealthFlow, WealthFam, WealthGroup).
* **Variables:**
  - `{{user_name}}`: User's name.
  - `{{wealth_type}}`: Type of plan (e.g. `WealthFlex`, `WealthGoal`, `WealthFix`, `WealthFlow`, `WealthFam`, `WealthGroup`).
  - `{{plan_title}}`: User's custom goal name or portfolio title (e.g. `Emergency Fund 2026`).
  - `{{initial_deposit}}`: Starting deposit amount.
  - `{{currency}}`: Currency symbol (e.g. `₦`, `$`, `USD`).
  - `{{saving_mode}}`: Saving mode (`Interest`, `Impact`, or `Mixed`).
  - `{{interest_rate}}`: Expected APY / yield percentage (e.g. `12.5% p.a.`).
  - `{{target_or_maturity}}`: Target amount or maturity date.
  - `{{start_date}}`: Plan activation date.
  - `{{portfolio_url}}`: Link to view portfolio in app.

#### `portfolio-deposit.html`
Sent when a user adds a top-up or automated recurring contribution to a savings plan.
* **Variables:**
  - `{{user_name}}`: User's name.
  - `{{amount}}`: Contribution amount credited.
  - `{{currency}}`: Currency code.
  - `{{plan_title}}`: Plan name.
  - `{{wealth_type}}`: Wealth Type.
  - `{{tx_id}}`: Contribution transaction reference.
  - `{{new_portfolio_balance}}`: Updated balance of this specific savings portfolio.
  - `{{interest_earned}}`: Accrued interest / WealthPact impact amount.
  - `{{goal_target}}`: Goal target amount.
  - `{{progress_percentage}}`: Progress toward goal (e.g. `75%`).
  - `{{portfolio_url}}`: Dashboard link.

#### `portfolio-matured.html`
Sent when a fixed-term savings plan matures or a goal target is reached.
* **Variables:**
  - `{{user_name}}`: User's name.
  - `{{wealth_type}}`: Wealth Type.
  - `{{plan_title}}`: Plan name.
  - `{{total_payout}}`: Total principal + returns paid to main wallet.
  - `{{currency}}`: Currency code.
  - `{{principal_saved}}`: Total capital saved.
  - `{{total_interest_earned}}`: Total interest / returns accrued.
  - `{{duration}}`: Duration of plan (e.g. `12 Months`).
  - `{{reinvest_url}}`: One-click link to roll over or reinvest in a new plan.

---

### 2. 👑 Admin Team Management (`templates/admin/`)

#### `admin-access-granted.html`
Sent when an administrator or staff member is invited to the admin dashboard.
* **Variables:**
  - `{{first_name}}`: Admin's first name.
  - `{{role}}`: Assigned admin role (e.g. `Super Admin`, `Compliance Officer`, `Support Manager`).
  - `{{email}}`: Login email.
  - `{{password}}`: Temporary generated password.
  - `{{admin_login_url}}`: Link to the admin login portal.

---

### 3. ⚠️ Risk & Compliance (`templates/compliance/`)

#### `account-strike.html`
Sent when an account incurs a policy warning or compliance strike.
* **Variables:**
  - `{{user_name}}`: User's name.
  - `{{user_email}}`: User's email.
  - `{{violation_type}}`: Policy violation category.
  - `{{date_issued}}`: Date of strike.
  - `{{strike_count}}`: Current strike number (e.g. `1` or `2`).
  - `{{max_strikes}}`: Maximum strikes allowed before suspension (e.g. `3`).
  - `{{strike_reason}}`: Specific reason description.
  - `{{appeal_url}}`: Link to submit an appeal.

#### `account-suspended.html`
Sent when an account is frozen or temporarily suspended.
* **Variables:**
  - `{{user_name}}`: User's name.
  - `{{case_id}}`: Compliance ticket / case reference ID.
  - `{{suspension_date}}`: Date of action.
  - `{{suspension_reason}}`: Summary of why action was taken.
  - `{{resolution_url}}`: Link to contact compliance and submit verification documents.

---

### 4. 📬 Newsletter & Marketing (`templates/newsletter/`)

#### `newsletter-welcome.html`
Sent immediately when a user subscribes from the website.
* **Variables:**
  - `{{subscriber_name}}`: Subscriber's name or email handle.
  - `{{website_url}}`: Link to explore Wealthconomy.
  - `{{unsubscribe_url}}`: One-click unsubscribe link.

#### `newsletter-issue.html`
Broadcast template for weekly or monthly newsletter editions.
* **Variables:**
  - `{{subscriber_name}}`: Subscriber's name.
  - `{{issue_number}}`: Issue count (e.g. `48`).
  - `{{issue_date}}`: Publication date.
  - `{{issue_preview_text}}`: Email preheader text.
  - `{{featured_tag}}`: Category tag (e.g. `Market Analysis`).
  - `{{featured_title}}`: Main article headline.
  - `{{featured_summary}}`: Article snippet.
  - `{{featured_article_url}}`: Link to full article on blog.
  - `{{fix_rate}}`: Current WealthFix rate (e.g. `14% p.a.`).
  - `{{flex_rate}}`: Current WealthFlex rate (e.g. `10% p.a.`).
  - `{{goal_rate}}`: Current WealthGoal bonus rate (e.g. `12% p.a.`).
  - `{{weekly_tip}}`: Pro wealth advice of the week.
  - `{{dashboard_url}}`: Platform CTA link.
  - `{{unsubscribe_url}}`: Unsubscribe link.

---

### 5. 🔐 Auth & Onboarding Templates (`templates/auth/`)

- `welcome-registration.html` (`{{user_name}}`, `{{user_email}}`, `{{account_id}}`, `{{dashboard_url}}`)
- `otp-verification.html` (`{{user_name}}`, `{{otp_code}}`, `{{action_name}}`, `{{expiry_minutes}}`, `{{ip_address}}`, `{{location}}`, `{{security_url}}`)
- `password-reset.html` (`{{user_name}}`, `{{user_email}}`, `{{reset_url}}`, `{{expiry_time}}`, `{{request_time}}`, `{{ip_address}}`)
- `password-changed.html` (`{{user_name}}`, `{{user_email}}`, `{{change_time}}`, `{{device_info}}`, `{{lock_account_url}}`)

---

### 6. 💳 Wallet & Transaction Templates (`templates/wallet/`)

- `deposit-successful.html` (`{{user_name}}`, `{{amount}}`, `{{currency}}`, `{{new_balance}}`, `{{transaction_id}}`, `{{payment_method}}`, `{{fee}}`, `{{transaction_url}}`)
- `deposit-pending.html` (`{{user_name}}`, `{{amount}}`, `{{currency}}`, `{{confirmations_count}}`, `{{required_confirmations}}`, `{{tx_hash}}`, `{{status_url}}`)
- `withdrawal-requested.html` (`{{user_name}}`, `{{amount}}`, `{{currency}}`, `{{destination_label}}`, `{{destination_account}}`, `{{reference_id}}`, `{{fee}}`, `{{net_amount}}`, `{{cancel_url}}`)
- `withdrawal-successful.html` (`{{user_name}}`, `{{amount}}`, `{{currency}}`, `{{destination_label}}`, `{{destination_account}}`, `{{tx_hash}}`, `{{completed_time}}`, `{{remaining_balance}}`, `{{statement_url}}`)
- `transfer-sent.html` (`{{recipient_name}}`, `{{recipient_identifier}}`, `{{amount}}`, `{{currency}}`, `{{tx_id}}`, `{{note}}`, `{{new_balance}}`, `{{receipt_url}}`)
- `transfer-received.html` (`{{sender_name}}`, `{{sender_identifier}}`, `{{amount}}`, `{{currency}}`, `{{tx_id}}`, `{{note}}`, `{{new_balance}}`, `{{wallet_url}}`)

---

### 7. 🎁 Referral & Rewards (`templates/referral/`)

- `referral-signup.html` (`{{user_name}}`, `{{referred_user_name}}`, `{{referred_user_email}}`, `{{total_referrals}}`, `{{total_bonus_earned}}`, `{{referral_link}}`, `{{referral_dashboard_url}}`)
- `referral-bonus.html` (`{{user_name}}`, `{{bonus_amount}}`, `{{currency}}`, `{{referred_user_name}}`, `{{event_type}}`, `{{commission_rate}}`, `{{updated_balance}}`, `{{wallet_url}}`)

---

### 8. 🛡️ Security Alerts (`templates/security/`)

- `new-device-login.html` (`{{user_name}}`, `{{device_info}}`, `{{browser}}`, `{{ip_address}}`, `{{location}}`, `{{login_time}}`, `{{lock_account_url}}`)
- `two-factor-enabled.html` (`{{user_name}}`, `{{two_factor_method}}`, `{{activation_time}}`, `{{ip_address}}`, `{{security_settings_url}}`)

---

### 9. 📑 KYC Verification (`templates/kyc/`)

- `kyc-submitted.html` (`{{user_name}}`, `{{tier_level}}`, `{{document_type}}`, `{{submission_date}}`, `{{estimated_review_time}}`, `{{kyc_status_url}}`)
- `kyc-approved.html` (`{{user_name}}`, `{{tier_level}}`, `{{daily_withdrawal_limit}}`, `{{monthly_deposit_limit}}`, `{{dashboard_url}}`)
- `kyc-action-required.html` (`{{user_name}}`, `{{rejection_reason}}`, `{{resubmit_url}}`)

---

### 10. 📊 Statements & Support (`templates/notifications/`)

- `account-statement.html` (`{{user_name}}`, `{{statement_period}}`, `{{closing_balance}}`, `{{currency}}`, `{{growth_percentage}}`, `{{total_deposits}}`, `{{total_withdrawals}}`, `{{yield_earnings}}`, `{{referral_earnings}}`, `{{transaction_count}}`, `{{download_pdf_url}}`)
- `support-ticket.html` (`{{user_name}}`, `{{ticket_id}}`, `{{ticket_subject}}`, `{{ticket_status}}`, `{{agent_name}}`, `{{agent_message}}`, `{{update_time}}`, `{{ticket_url}}`)

---

## 📱 Live Preview Dashboard

Preview all 23 email templates with device switcher (Desktop / Mobile), category tabs, and copy tools:

```bash
# Start local preview server
npm run dev
# Or
npx serve templates
```

Or open `templates/index.html` in your browser.

---

## 🔒 Email Client Compatibility

Tested and optimized for:
- ✅ Apple Mail (iOS 15+, macOS)
- ✅ Gmail (Desktop Web, Android, iOS)
- ✅ Microsoft Outlook (Windows 2016+, Mac, Web)
- ✅ Yahoo Mail & ProtonMail
- ✅ Dark mode and light mode client rendering

---

## 📄 License & Ownership

© 2026 Wealthconomy Inc. All rights reserved.
