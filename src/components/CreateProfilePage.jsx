import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";

const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledPaper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.secondary.light,
  boxShadow: theme.shadows[2],
  borderRadius: theme.spacing(2),
}));

const steps = ["Basic Info", "Location & Contact", "Uploads"];

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    sakaSelf: "",
    sakaMama: "",
    sakaDadi: "",
    sakaNani: "",
    dob: "",
    height: "",
    education: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    email: "",
    mobile: "",
    fatherMobile: "",
    fatherOccupation: "",
    motherOccupation: "",
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  const validateStep = () => {
    let newErrors = {};

    if (activeStep === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.dob) newErrors.dob = "Date of birth is required";
    }

    if (activeStep === 1) {
      if (!formData.email.includes("@")) newErrors.email = "Invalid email";
      if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Invalid primary contact number";
      // if (!formData.fatherMobile.match(/^\d{10}$/)) newErrors.fatherMobile = "Invalid father's mobile number";
    }

    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateStep();
    console.log(">/", validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setActiveStep((prev) => prev + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async() => {
    console.log("Form Submitted:", formData);
    // alert("Form submitted successfully!");
      try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
    } else {
      alert("Error: " + result.error);
    }
  } catch (err) {
    alert("Something went wrong! " + err.message);
  }
  };

  return (
    <PageContainer>
      <StyledPaper>
        <Typography variant="h5" gutterBottom>
          Registration Form
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form>
          {activeStep === 0 && (
            <Grid2 container spacing={2} mt={1}>
              <Grid2 xs={12} sm={4}><TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={!!errors.firstName} helperText={errors.firstName} fullWidth /></Grid2>
              <Grid2 xs={12} sm={4}><TextField label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={4}><TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={!!errors.lastName} helperText={errors.lastName} fullWidth /></Grid2>
              <Grid2 xs={12} sm={3}><TextField label="Saka (Self)" name="sakaSelf" value={formData.sakaSelf} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={3}><TextField label="Saka (Mama)" name="sakaMama" value={formData.sakaMama} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={3}><TextField label="Saka (Dadi)" name="sakaDadi" value={formData.sakaDadi} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={3}><TextField label="Saka (Nani)" name="sakaNani" value={formData.sakaNani} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={4}><TextField label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} InputLabelProps={{ shrink: true }} error={!!errors.dob} helperText={errors.dob} fullWidth /></Grid2>
              <Grid2 xs={12} sm={4}><TextField label="Height" name="height" value={formData.height} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={4}><TextField label="Education" name="education" value={formData.education} onChange={handleChange} fullWidth /></Grid2>
            </Grid2>
          )}

          {activeStep === 1 && (
            <Grid2 container spacing={2} mt={1}>
              <Grid2 xs={12} sm={3}><TextField label="City" name="city" value={formData.city} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={3}><TextField label="State" name="state" value={formData.state} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={3}><TextField label="Country" name="country" value={formData.country} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={3}><TextField label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={6}><TextField label="Email" name="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} fullWidth /></Grid2>
              <Grid2 xs={12} sm={6}><TextField label="Primary Contact Number" name="mobile" value={formData.mobile} onChange={handleChange} error={!!errors.mobile} helperText={errors.mobile} fullWidth required /></Grid2>
              {/* <Grid2 xs={12} sm={6}><TextField label="Father's Mobile Number" name="fatherMobile" value={formData.fatherMobile} onChange={handleChange} error={!!errors.fatherMobile} helperText={errors.fatherMobile} fullWidth /></Grid2> */}
              <Grid2 xs={12} sm={6}><TextField label="Father's Occupation" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} fullWidth /></Grid2>
              <Grid2 xs={12} sm={6}><TextField label="Mother's Occupation" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} fullWidth /></Grid2>
            </Grid2>
          )}

          {activeStep === 2 && (
            <Grid2 container spacing={2} mt={1} alignItems="center">
              <Grid2 xs={12} sm={6}>
                <Button variant="outlined" component="label" fullWidth>
                  Upload Photo
                  <input type="file" hidden accept="image/*" onChange={handlePhotoChange} />
                </Button>
                {photoPreview && (
                  <Box mt={1}>
                    <img src={photoPreview} alt="Preview" style={{ maxHeight: 100, marginTop: 10 }} />
                  </Box>
                )}
              </Grid2>
              <Grid2 xs={12} sm={6}>
                <Button variant="outlined" component="label" fullWidth>
                  Upload Biodata (PDF/DOC)
                  <input type="file" hidden accept=".pdf,.doc,.docx" />
                </Button>
              </Grid2>
            </Grid2>
          )}

          <Box mt={4} display="flex" justifyContent="space-between">
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext} color="primary">
                Next
              </Button>
            )}
          </Box>
        </form>
      </StyledPaper>
    </PageContainer>
  );
}
