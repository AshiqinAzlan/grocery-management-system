import React, { useState, useEffect, useRef } from "react";
import {
  AppWrapper,
  Container,
  Form,
  Title,
  Paragraph,
  Button,
} from "./FPStyles"; // Ensure this import path matches your project structure
import { useNavigate } from "react-router-dom";

function VerificationSuccess() {
  const [verificationStatus, setVerificationStatus] = useState(null);
  const requestMadeRef = useRef(false); // Use ref to track if request has been made
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      "useEffect triggered with requestMade:",
      requestMadeRef.current
    ); // Log to check when useEffect is triggered

    if (requestMadeRef.current) {
      console.log("Request already made, skipping effect.");
      return; // Skip the effect if the request has already been made
    }

    // Immediately set the ref to true to prevent any subsequent invocations
    requestMadeRef.current = true;
    console.log("Request marked as made immediately");

    // Extract the token from the URL
    const pathParts = window.location.pathname.split("/");
    const token = pathParts.length > 2 ? pathParts[2] : null; // Extract token

    console.log("Token sent to backend:", token); // Log the token for debugging

    if (!token) {
      console.log("Token is missing from the URL");
      setVerificationStatus("failed"); // Set status to failed if token is missing
      return;
    }

    // If a token is present and request has not been made, proceed with verification
    const verifyEmail = async (token) => {
      try {
        console.log("Making API call to verify email"); // Debug log before making the API call

        const response = await fetch(
          `http://localhost:5000/api/auth/verify/${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response status:", response.status); // Log the response status
        const responseData = await response.json();
        console.log("Response data:", responseData); // Log the response data

        if (response.ok) {
          setVerificationStatus("success");
          console.log("Email verified successfully");
          // Remove setTimeout to prevent automatic navigation
        } else {
          setVerificationStatus("failed");
          console.error("Verification failed:", responseData);
        }
      } catch (error) {
        console.error("Error during verification:", error);
        setVerificationStatus("error");
      } finally {
        console.log("Verification attempt completed.");
      }
    };

    verifyEmail(token);
  }, [navigate]); // Only depend on navigate to minimize unnecessary effect calls

  const handleProceed = () => {
    if (verificationStatus === "success") {
      navigate("/inventory", { replace: true }); // Redirect to the inventory page after successful verification
    } else {
      navigate("/verify"); // Redirect back to verify page if failed or error occurred
    }
  };

  return (
    <AppWrapper>
      <Container>
        <Form>
          {verificationStatus === "success" ? (
            <>
              <Title>Email Verified Successfully!</Title>
              <Paragraph>
                Your email has been verified successfully. Please click "OK" to
                proceed.
              </Paragraph>
            </>
          ) : verificationStatus === "failed" ? (
            <>
              <Title>Verification Failed</Title>
              <Paragraph>
                Verification failed. The token may be invalid or expired.
              </Paragraph>
            </>
          ) : verificationStatus === "error" ? (
            <>
              <Title>Verification Error</Title>
              <Paragraph>
                An error occurred during verification. Please try again later.
              </Paragraph>
            </>
          ) : (
            <Paragraph>Verifying your email...</Paragraph>
          )}
          {verificationStatus !== null && (
            <Button onClick={handleProceed}>OK</Button>
          )}
        </Form>
      </Container>
    </AppWrapper>
  );
}

export default VerificationSuccess;
