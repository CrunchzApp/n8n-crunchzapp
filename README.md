# 📡 CrunchzApp Integration for n8n

Easily connect CrunchzApp's WhatsApp messaging API to your n8n workflows.

---

## 🚀 What is CrunchzApp?

CrunchzApp is a powerful WhatsApp automation API for sending messages, OTPs, media, and more — ideal for marketing, alerts, and transactional communication.

Website: [https://crunchz.app](https://crunchz.app)

---

## 🔌 What You Can Do

| Feature                       | Endpoint                                 |
|------------------------------|------------------------------------------|
| Send Text Message            | `/api/send-message/text`                |
| Send Image                   | `/api/send-message/image`               |
| Send Video                   | `/api/send-message/video`               |
| Send Audio/Voice             | `/api/send-message/voice`               |
| Send Location                | `/api/send-message/location`            |
| Send Poll                    | `/api/send-message/poll`                |
| React to Message             | `/api/send-message/reaction`            |
| Star/Unstar Message          | `/api/send-message/star`                |
| Delete Message               | `/api/send-message/delete`              |
| Mark Message as Seen         | `/api/send-message/seen`                |
| Typing Indicator             | `/api/send-message/typing`              |
| Stop Typing Indicator        | `/api/send-message/stop-typing`         |
| List Contacts                | `/api/contact`                          |
| Get Contact Info             | `/api/contact/info`                     |
| Get Contact Picture          | `/api/contact/picture`                  |
| Request OTP Code             | `/api/otp/code/request`                 |
| Validate OTP Code            | `/api/otp/code/validate`                |
| Request OTP Login Link       | `/api/otp/link/request`                 |

---

## 🛠 How to Use in n8n

### 1. Add HTTP Request Node

- **Method**: `POST` / `GET` / `PUT` / `DELETE`  
- **URL**: Use CrunchzApp endpoint (e.g., `https://api.crunchz.app/api/send-message/text`)  
- **Authentication**: Set custom headers

### 2. Set Headers

| Key               | Value                                      |
|------------------|--------------------------------------------|
| `accept`         | `application/json`                         |
| `authorization`  | `Bearer YOUR_API_KEY_HERE`                 |
| `content-type`   | `application/json`                         |

### 3. Set JSON Body

Example for sending a text message:

```json
{
  "contact_id": "6281234567890@c.us",
  "message": "Hello from n8n + CrunchzApp!"
}
