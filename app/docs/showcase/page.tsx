"use client";

import { useState } from "react";
import { Button } from "@/app/components/inputs/Button";
import { TextInput } from "@/app/components/inputs/TextInput";
import { Card } from "@/app/components/display/Card";
import styles from "./page.module.css";

export default function ShowcasePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Design System Showcase</h1>
        <p className={styles.subtitle}>
          See all components working together in a realistic contact form scenario
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <Card
            title="Contact Us"
            description="Get in touch with our team. We'd love to hear from you!"
            variant="stroked"
            layout="vertical"
            mediaType="icon"
            icon="📧"
            actions={
              <div className={styles.formActions}>
                <Button 
                  variant="subtle" 
                  size="small" 
                  onClick={handleReset}
                  disabled={isSubmitting}
                >
                  Reset
                </Button>
                <Button 
                  type="submit" 
                  size="small"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            }
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <TextInput
                  id="name"
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  state={errors.name ? "error" : "default"}
                  errorMessage={errors.name}
                />
                <TextInput
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  state={errors.email ? "error" : "default"}
                  errorMessage={errors.email}
                />
              </div>
              
              <div className={styles.formRow}>
                <TextInput
                  id="company"
                  label="Company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
                <TextInput
                  id="role"
                  label="Job Title"
                  placeholder="Enter your job title"
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                />
              </div>
              
              <TextInput
                id="message"
                label="Message"
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                state={errors.message ? "error" : "default"}
                errorMessage={errors.message}
                helperText="Please provide details about your project, timeline, and any specific requirements."
              />
            </form>
          </Card>
        </div>

        <div className={styles.componentsSection}>
          <h2 className={styles.sectionTitle}>Component Examples</h2>
          
          <div className={styles.componentGrid}>
            <Card
              title="Button Variants"
              description="Different button styles for various use cases"
              layout="vertical"
              mediaType="icon"
              icon="🔘"
              actions={
                <div className={styles.buttonExamples}>
                  <Button size="small" variant="primary">Primary</Button>
                  <Button size="small" variant="neutral">Neutral</Button>
                  <Button size="small" variant="subtle">Subtle</Button>
                </div>
              }
            />
            
            <Card
              title="Input States"
              description="Text inputs in different states"
              layout="vertical"
              mediaType="icon"
              icon="📝"
              actions={
                <div className={styles.inputExamples}>
                  <TextInput
                    id="example-default"
                    placeholder="Default state"
                    size="small"
                  />
                  <TextInput
                    id="example-error"
                    placeholder="Error state"
                    state="error"
                    errorMessage="This field has an error"
                    size="small"
                  />
                  <TextInput
                    id="example-disabled"
                    placeholder="Disabled state"
                    state="disabled"
                    size="small"
                  />
                </div>
              }
            />
            
            <Card
              title="Card Layouts"
              description="Cards with different layouts and media"
              layout="horizontal"
              mediaType="icon"
              icon="🎨"
              actions={<Button size="small">Learn More</Button>}
            />
          </div>
        </div>

        {isSubmitted && (
          <div className={styles.successSection}>
            <Card
              title="Message Sent!"
              description="Thank you for reaching out. We'll get back to you within 24 hours."
              variant="stroked"
              layout="horizontal"
              mediaType="icon"
              icon="✅"
              actions={
                <Button 
                  variant="subtle" 
                  size="small" 
                  onClick={handleReset}
                >
                  Send Another
                </Button>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
} 