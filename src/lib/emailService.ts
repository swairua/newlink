// Email service utility for handling form submissions
// In a real implementation, this would integrate with your backend API

export interface EmailData {
  to: string;
  subject: string;
  body: string;
  isEmergency?: boolean;
}

export interface ServiceRequest {
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

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export class EmailService {
  private static readonly DEFAULT_EMAIL = "info@newlinklabservices.co.ke";
  private static readonly EMERGENCY_EMAIL = "emergency@newlinklabservices.co.ke";

  /**
   * Send a service request email
   */
  static async sendServiceRequest(request: ServiceRequest, isEmergency = false): Promise<boolean> {
    const emailData: EmailData = {
      to: isEmergency ? this.EMERGENCY_EMAIL : this.DEFAULT_EMAIL,
      subject: `${isEmergency ? "🚨 EMERGENCY" : ""} Service Request - ${request.equipmentType}`,
      body: this.formatServiceRequestEmail(request, isEmergency),
      isEmergency
    };

    return this.sendEmail(emailData);
  }

  /**
   * Send a general contact message
   */
  static async sendContactMessage(message: ContactMessage): Promise<boolean> {
    const emailData: EmailData = {
      to: this.DEFAULT_EMAIL,
      subject: `Contact Form - ${message.subject || "General Inquiry"}`,
      body: this.formatContactMessageEmail(message)
    };

    return this.sendEmail(emailData);
  }

  /**
   * Send email (would integrate with backend in real implementation)
   */
  private static async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      // In a real implementation, this would call your backend API
      console.log("Sending email:", emailData);
      
      // Simulate API call
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      return response.ok;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  }

  /**
   * Format service request email body
   */
  private static formatServiceRequestEmail(request: ServiceRequest, isEmergency: boolean): string {
    return `
${isEmergency ? "⚠️ EMERGENCY SERVICE REQUEST ⚠️" : "New Service Request"}

Contact Information:
- Name: ${request.contactName}
- Organization: ${request.organization}
- Email: ${request.email}
- Phone: ${request.phone}

Service Details:
- Urgency: ${request.urgency}
- Equipment Type: ${request.equipmentType}
- Manufacturer: ${request.manufacturer}
- Model Number: ${request.modelNumber || "Not specified"}
- Serial Number: ${request.serialNumber || "Not specified"}

Issue Description:
${request.description}

${isEmergency ? "⚠️ This is an EMERGENCY request requiring immediate attention!" : ""}

---
Submitted via Newlink Lab Services website
Time: ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })} EAT
    `;
  }

  /**
   * Format contact message email body
   */
  private static formatContactMessageEmail(message: ContactMessage): string {
    return `
New Contact Form Submission:

Name: ${message.name}
Email: ${message.email}
Phone: ${message.phone || "Not provided"}
Subject: ${message.subject || "General Inquiry"}

Message:
${message.message}

---
Submitted via Newlink Lab Services website
Time: ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })} EAT
    `;
  }

  /**
   * Get auto-response message based on urgency
   */
  static getAutoResponseMessage(isEmergency: boolean): string {
    if (isEmergency) {
      return "Your emergency service request has been received. Our team will contact you within 2 hours. For immediate assistance, call +254 780 165 490.";
    }
    return "Thank you for your service request. We will respond within 4 hours during business hours.";
  }
}
