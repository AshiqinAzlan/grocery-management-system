import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AppWrapper,
  Container,
  Form,
  Title,
  Input,
  Button,
  Paragraph,
} from "./FPStyles"; // Ensure this import path matches your project structure
import "../../Styles/ResetPassword.css"; // Adjust the path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function ResetPassword() {
  const { token } = useParams(); // Extract the token from URL params
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState({});
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });

    // Clear specific field error when user types
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prevShow) => ({
      ...prevShow,
      [field]: !prevShow[field],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check for empty and invalid input in password fields
    if (!passwords.password.trim()) {
      newErrors.password = "New Password is required";
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(passwords.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.";
    }

    if (!passwords.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm New Password is required";
    } else if (passwords.password !== passwords.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous error messages

    if (!validateForm()) {
      return; // Stop the form submission if validation fails
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/reset/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: passwords.password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error details:", errorData);
        setErrors({ global: "Failed to reset password." });
        return;
      }

      setSuccessModalVisible(true);
    } catch (error) {
      console.error("Error:", error);
      setErrors({ global: "Error resetting password." });
    }
  };

  return (
    <AppWrapper>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Reset Your Password</Title>
          <Paragraph>Please enter your new password.</Paragraph>

          {/* New Password Field */}
          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            <Input
              type={showPasswords.password ? "text" : "password"}
              name="password"
              placeholder="New Password"
              value={passwords.password}
              onChange={handleChange}
              className={`input-field ${errors.password ? "error" : ""}`}
              style={{ paddingRight: "40px" }} // Padding for the eye icon
            />
            <FontAwesomeIcon
              icon={showPasswords.password ? faEyeSlash : faEye}
              onClick={() => togglePasswordVisibility("password")}
              style={{
                position: "absolute",
                right: "10px",
                top: "40%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#949494",
                pointerEvents: "auto",
              }}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <Input
              type={showPasswords.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={passwords.confirmPassword}
              onChange={handleChange}
              className={`input-field ${errors.confirmPassword ? "error" : ""}`}
              style={{ paddingRight: "40px" }} // Padding for the eye icon
            />
            <FontAwesomeIcon
              icon={showPasswords.confirmPassword ? faEyeSlash : faEye}
              onClick={() => togglePasswordVisibility("confirmPassword")}
              style={{
                position: "absolute",
                right: "10px",
                top: "40%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#949494",
                pointerEvents: "auto",
              }}
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          {errors.global && (
            <Paragraph className="error-message">{errors.global}</Paragraph>
          )}
          <Button type="submit">Reset Password</Button>
        </Form>
        {successModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <p>✔️ Your password has been reset successfully!</p>
              <Button onClick={() => navigate("/login")}>OK</Button>
            </div>
          </div>
        )}
      </Container>
    </AppWrapper>
  );
}

export default ResetPassword;
