import React, { useState } from "react";
import { Box } from "@mui/material";
import Topbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  TextField,
  Grid,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import swal from "sweetalert";

const ManufacturerRecommendation = () => {
  const [regNumber, setRegNumber] = useState("");
  const [chassisFirstCode, setChassisFirstCode] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [engineOilServiceInterval, setEngineOilServiceInterval] = useState("");
  const [coolantReplacementInterval, setCoolantReplacementInterval] =
    useState("");
  const [
    transmissionFluidReplacementInterval,
    setTransmissionFluidReplacementInterval,
  ] = useState("");
  const [engineOilType, setEngineOilType] = useState("");
  const [transmissionFluidType, setTransmissionFluidType] = useState("");
  const [coolantType, setCoolantType] = useState("");
  const [oilFilter, setOilFilter] = useState("");
  const [wheelAlignmentInterval, setwheelAlignmentInterval] = useState("");
  const [engineIntervalError, setengineIntervalError] = useState(false);
  const [wheelAlignmentError, setWheelAlignmentError] = useState(false);
  const [coolantReplacementError, setCoolantReplacementError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      regNumber,
      chassisFirstCode,
      make,
      model,
      fuelType,
      engineOilServiceInterval,
      coolantReplacementInterval,
      transmissionFluidReplacementInterval,
      engineOilType,
      transmissionFluidType,
      coolantType,
      oilFilter,
      wheelAlignmentInterval
    );

    const manufacturerecommendation = {
      chassisFirstCode,
      make,
      model,
      fuelType,
      engineOilServiceInterval,
      coolantReplacementInterval,
      transmissionFluidReplacementInterval,
      engineOilType,
      transmissionFluidType,
      coolantType,
      oilFilter,
      wheelAlignmentInterval,
    };

    const response = await fetch(
      "https://car-care-360.onrender.com/api/manufacturerrecommendations/",
      {
        method: "POST",
        body: JSON.stringify(manufacturerecommendation),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      console.log("Error occured");
      console.log(response);
    }

    if (response.ok) {
      // setRegNumber("");
      setChassisFirstCode("");
      setMake("");
      setModel("");
      setFuelType("");
      setTransmissionFluidType("");
      setTransmissionFluidReplacementInterval("");
      setCoolantType("");
      setCoolantReplacementInterval("");
      setEngineOilType("");
      setEngineOilServiceInterval("");
      setOilFilter("");
      setwheelAlignmentInterval("");
      setOpen(true);
      swal("Registered manufacturer recommendation details!", "", "success");
    }
  };

  const handleIntervalChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      setEngineOilServiceInterval(inputValue);
      setengineIntervalError(false);
    } else {
      setengineIntervalError(true);
    }
  };
  const handleWheelAlignmentChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      setwheelAlignmentInterval(inputValue);
      setWheelAlignmentError(false);
    } else {
      setWheelAlignmentError(true);
    }
  };

  const handleCoolantReplacementChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      setCoolantReplacementInterval(inputValue);
      setCoolantReplacementError(false);
    } else {
      setCoolantReplacementError(true);
    }
  };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  return (
    <>
      <Topbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container>
            <div className="manufacturerecommendation__container">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="manufacturerecommendation__header">
                    <h2>Manufacturer Recommendation Details</h2>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                      {/* Register Number */}
                      {/* <Grid item xs={12} md={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Register Number"
                          variant="outlined"
                          value={regNumber}
                          onChange={(e) => setRegNumber(e.target.value)}
                          required
                        />
                      </Grid> */}
                      <Grid item xs={12} md={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Chassis First Code"
                          variant="outlined"
                          value={chassisFirstCode}
                          onChange={(e) => setChassisFirstCode(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Make"
                          variant="outlined"
                          value={make}
                          onChange={(e) => setMake(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Model"
                          variant="outlined"
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl
                          style={{ width: "100%" }}
                          variant="outlined"
                        >
                          <InputLabel>Fuel Type</InputLabel>
                          <Select
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                            label="Fuel Type"
                            required
                          >
                            <MenuItem value={"Gasoline"}>Gasoline</MenuItem>
                            <MenuItem value={"Diesel"}>Diesel</MenuItem>
                            <MenuItem value={"Electric"}>Electric</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Transmission Fluid Type"
                          variant="outlined"
                          value={transmissionFluidType}
                          onChange={(e) =>
                            setTransmissionFluidType(e.target.value)
                          }
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Transmission Fluid Replacement Interval"
                          variant="outlined"
                          value={transmissionFluidReplacementInterval}
                          onChange={(e) =>
                            setTransmissionFluidReplacementInterval(
                              e.target.value
                            )
                          }
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Coolant Type"
                          variant="outlined"
                          value={coolantType}
                          onChange={(e) => setCoolantType(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Coolant Replacement Interval"
                          variant="outlined"
                          value={coolantReplacementInterval}
                          onChange={handleCoolantReplacementChange}
                          error={coolantReplacementError}
                          helperText={
                            coolantReplacementError
                              ? "Please enter a valid integer."
                              : ""
                          }
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Engine Oil Type"
                          variant="outlined"
                          value={engineOilType}
                          onChange={(e) => setEngineOilType(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Engine Oil Service Interval"
                          variant="outlined"
                          value={engineOilServiceInterval}
                          onChange={handleIntervalChange}
                          error={engineIntervalError}
                          helperText={
                            engineIntervalError
                              ? "Please enter a valid integer."
                              : ""
                          }
                          required
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Oil Filter"
                          variant="outlined"
                          value={oilFilter}
                          onChange={(e) => setOilFilter(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={{ width: "100%" }}
                          label="Wheel Alignment Interval"
                          variant="outlined"
                          value={wheelAlignmentInterval}
                          onChange={handleWheelAlignmentChange}
                          error={wheelAlignmentError}
                          helperText={
                            wheelAlignmentError
                              ? "Please enter a valid integer."
                              : ""
                          }
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <div className="manufacturerecommendation__submitbtn">
                          <Button type="submit" variant="contained">
                            Submit
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ManufacturerRecommendation;
