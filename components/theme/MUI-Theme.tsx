"use client";
import { createTheme } from "@mui/material/styles";

// Create a custom Material UI theme with custom styles for the Switch, Slider, and Button components.
export const MUItheme = createTheme({
    components: {
        //Set the default Material UI theme for the Switch component
        MuiSwitch: {
            //Overrides the default style of the Switch component
            styleOverrides: {
                root: {
                    // Controls the size of the switch
                    height: 40,
                    width: 60,
                },
                switchBase: {
                    // Controls default (unchecked) color for the thumb
                    color: "#fff",
                    height: 39,
                    width: 43,
                },
                colorPrimary: {
                    "&.Mui-checked": {
                        // Controls checked color for the thumb
                        color: "#fff",
                    },
                    ":hover": {
                        color: "#2cae9d",
                    },
                },
                thumb: {
                    // Controls checked color for the thumb
                    color: "#ffffff",
                    height: 13,
                    width: 13,
                    border: "1px solid #747474",
                    marginRight: 3,
                },
                track: {
                    // Controls default (unchecked) color for the track
                    height: 16,
                    backgroundColor: "#2cae9d",
                    opacity: 0.4,
                    width: 40,
                    ".Mui-checked.Mui-checked + &": {
                        // Controls checked color for the track
                        opacity: 1,
                        backgroundColor: "#2cae9d",
                    },
                },
            },
        },

        //Set the default Material UI theme for the Slider component
        MuiSlider: {
            //Overrides the default style of the Slider component
            styleOverrides: {
                root: {
                    color: "#7931d6",
                },
                thumb: {
                    color: "#7931d6",
                    ":hover": {
                        BoxShadow: "0px 0px 0px 8px rgba(172, 126, 232, 0.16)",
                    },
                },
                track: {
                    color: "#7931d6",
                },
                rail: {
                    color: "#7931d6",
                },
                markLabel: {
                    color: "#000000",
                    transform: "translateX(-12%)",
                },
            },
        },
        //Set the default Material UI theme for the Button component
        MuiButton: {
            //Overrides the default style of the Button component
            styleOverrides: {
                root: {
                    color: "#fff",
                    textTransform: "initial",
                    backgroundColor: "rgb(126 34 206 / 100%)",
                    padding: "8px 8px",
                    borderRadius: "0.5rem",
                    boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                        backgroundColor: " rgb(147 51 234/ 100%)",
                    },
                },
            },
        },
    },
});
