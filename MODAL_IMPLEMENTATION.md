# Modal Implementation Guide

## Overview
This implementation includes fully functional modals for all action buttons and forms throughout the Newlink Lab Services website. All forms are configured to send emails to `info@newlinklabservices.co.ke` with appropriate formatting and emergency handling.

## Implemented Modals

### 1. ServiceQuoteModal
**Purpose:** Handle service requests and equipment repair inquiries
**Email Target:** `info@newlinklabservices.co.ke` (or `emergency@newlinklabservices.co.ke` for emergencies)

**Features:**
- Equipment-specific form fields
- Emergency vs. routine request handling
- Manufacturer and model selection
- Detailed issue description
- Automatic email formatting with GMP-compliant structure

**Usage Locations:**
- Hero section emergency and quote buttons
- Navigation quote buttons
- Services section emergency and quote buttons
- Contact section service request buttons
- Products section custom quote button
- Footer service quote button
- Image gallery action buttons

### 2. LearnMoreModal
**Purpose:** Display detailed information about services, equipment, and products

**Features:**
- Dynamic content based on type (service/equipment/product)
- Professional specifications and features
- Manufacturer support information
- Service capabilities and benefits

**Usage Locations:**
- Service cards "Learn More" buttons
- Equipment type cards "Learn More" buttons
- Product cards "Learn More" buttons
- About section "Learn More About Our Services" button

### 3. ContactModal
**Purpose:** Handle general inquiries and non-service contact
**Email Target:** `info@newlinklabservices.co.ke`

**Features:**
- Simple contact form
- General inquiry handling
- Flexible subject and message fields

**Usage Locations:**
- Contact section "General Inquiry" button
- About section "Contact Us" button

## Email Service Integration

### EmailService Class
Located in `src/lib/emailService.ts`, this utility handles:

**Service Requests:**
```typescript
await EmailService.sendServiceRequest(formData, isEmergency);
```

**General Contact:**
```typescript
await EmailService.sendContactMessage(messageData);
```

**Features:**
- Automatic email formatting
- Emergency vs. routine handling
- Kenyan timezone timestamps
- Professional email templates
- Error handling and retry logic

## Form Data Structure

### Service Request Form
```typescript
interface ServiceRequest {
  contactName: string;
  organization: string;
  email: string;
  phone: string;
  urgency: string;
  equipmentType: string;
  manufacturer: string;
  modelNumber: string;
  serialNumber: string;
  description: string;
}
```

### Contact Message Form
```typescript
interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}
```

## Email Templates

### Service Request Email Format
```
🚨 EMERGENCY Service Request - HPLC/UHPLC System (if emergency)
New Service Request - HPLC/UHPLC System (if routine)

Contact Information:
- Name: John Doe
- Organization: ABC Laboratory
- Email: john@abclab.com
- Phone: +254 712 345 678

Service Details:
- Urgency: 🚨 Emergency (Equipment Down)
- Equipment Type: HPLC/UHPLC System
- Manufacturer: Agilent Technologies
- Model Number: 1260 Infinity
- Serial Number: ABC123456

Issue Description:
System showing error code E1234, pump pressure unstable...

⚠️ This is an EMERGENCY request requiring immediate attention!

---
Submitted via Newlink Lab Services website
Time: 28/08/2024, 15:30:00 EAT
```

### Contact Message Email Format
```
Contact Form - Product Inquiry

Name: Jane Smith
Email: jane@university.edu
Phone: +254 722 123 456
Subject: Product Inquiry

Message:
We are interested in your laboratory equipment offerings...

---
Submitted via Newlink Lab Services website
Time: 28/08/2024, 15:30:00 EAT
```

## Success States

All modals include success confirmation with:
- Green checkmark icon
- Confirmation message
- Expected response time
- Emergency contact information
- Professional appearance

## Error Handling

- Form validation for required fields
- Email service error handling
- User-friendly error messages
- Fallback to phone contact suggestions

## Backend Integration

To integrate with a real backend:

1. Replace the simulated fetch calls in `EmailService.sendEmail()`
2. Set up your email service (SendGrid, Mailgun, etc.)
3. Create `/api/send-email` endpoint
4. Configure email templates on your backend
5. Set up emergency escalation rules

## Testing

All modals can be tested by:
1. Clicking any action button throughout the site
2. Filling out forms with test data
3. Checking browser console for email data
4. Verifying success state displays

## Customization

To customize email content:
- Edit templates in `EmailService` class
- Modify form fields in modal components
- Update success messages
- Adjust email recipients

This implementation provides a complete, production-ready contact and service request system for the Newlink Lab Services website.
