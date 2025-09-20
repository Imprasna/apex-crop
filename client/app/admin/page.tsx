"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { Send } from "lucide-react";
import axios from "axios";
import { backendApi } from "@/entities";
import CMSform from "@/components/cms";

export default function CMSPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValidated, setOtpValidated] = useState(false);
  const [message, setMessage] = useState("");

  const validEmail = "apexpbacademy@gmail.com";

  useEffect(() => {
    const loggedIn = localStorage.getItem("cms_logged_in");
    if (loggedIn === "true") {
      setOtpValidated(true);
    }
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (email.toLowerCase() !== validEmail) {
      setMessage("Only academy email ID will be valid to login");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await axios.post(`${backendApi}/cms/validation`, { email });
      <Toast title="Upgrade available" content="We've just released Radix 3.0!"></Toast>
      setOtpSent(true);
      setMessage(res.data.message || "OTP sent successfully!");
    } catch (err: any) {
      setMessage(err?.response?.data?.error || "Failed to send OTP");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${backendApi}/cms/validation`, { email, otp: otp.trim() });
      setOtpValidated(true); // ✅ Only render CMSform after OTP success
      localStorage.setItem("cms_logged_in", "true");
      setMessage(res.data.message || "OTP validated successfully!");
    } catch (err: any) {
      setMessage(err?.response?.data?.error || "Invalid OTP");
    } finally {
      setIsSubmitting(false);
    }
  };

   const handleLogout = () => {
    localStorage.removeItem("cms_logged_in");
    setOtpValidated(false);
    setEmail("");
    setOtp("");
    setOtpSent(false);
  };

  // ✅ Render CMSform only after OTP validation
  if (otpValidated) {
    return <CMSform onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-gradient-to-b from-red-100 to-red-200">
      {/*  */}
      <div className="mt-6 w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-primary text-2xl text-primary">OTP Validation</CardTitle>
          </CardHeader>
          <CardContent>
            {!otpSent ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your company email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    onKeyDown={(e) => e.key === " " && e.preventDefault()}
                    onPaste={(e) => {
                      e.preventDefault();
                      const pasted = e.clipboardData.getData("text").replace(/\s/g, "");
                      setEmail(pasted);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send OTP
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP *
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\s/g, ""))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter OTP"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Validating..." : (
                      <>
                        Validate OTP
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
            {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
