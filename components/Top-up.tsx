"use client";
// Import the required components from the MUI library.
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useState } from "react";

// Label for the switch button. This label will be used to set the aria-label attribute of the switch button.
const label = { inputProps: { "aria-label": "Auto Top-up Switch" } };

// Values for the marks on the slider.
const MarkValue: number[] = [5, 10, 15, 20, 25, 30];

// Labels for the marks on the slider.
const MarkLabels: string[] = [
    "500 credits",
    "1200 credits",
    "1700 credits",
    "2500 credits",
    "3900 credits",
    "5000 credits",
];

// Create the marks for the slider. Each mark will display the value and the label.
const marks: {
    value: number;
    label: JSX.Element;
}[] = MarkValue.map((value: number, index: number) => ({
    value,
    label: (
        <pre style={{ fontFamily: "inherit" }}>
            <span className="font-bold"> ${value}</span>
            <br />
            <span className="text-xs font-normal text-gray-600">
                {MarkLabels[index]}
            </span>
        </pre>
    ),
}));

// Component to display the top-up section.
const TopUp = () => {
    // State to store the switch button status.
    const [checked, setChecked] = useState<boolean>(true);
    // State to store the top-up value.
    const [topupValue, setTopupValue] = useState<number>(10);

    // Function to handle the change of the switch button.
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    // Function to handle the change of the top-up amount in the slider.
    const handleTopupChange = (event: any, newValue: number | number[]) => {
        setTopupValue(newValue as number);
    };

    // Function to handle the purchase of the top-up when user click on the confirm button.
    const handlePurchase = (event: any) => {
        // Get the index of the top-up value in the MarkValue array
        let index = MarkValue.indexOf(topupValue);

        // Log the credit purchase of the top-up value.
        console.log("Auto purchase of", MarkLabels[index], "confirmed.");
    };

    return (
        <div className="bg-white w-[50%] mx-auto text-black rounded-md  p-3 px-6">
            <div className=" font-bold text-lg p-0 flex justify-start items-center mb-2 md:mb-0">
                <span>Setup Auto Top-up </span>
                <Switch
                    {...label}
                    onChange={handleChange}
                    checked={checked}
                    className="text-green-500"
                />
            </div>

            {/* when switch is checked, display the top-up section. Otherwise, hide it.  */}
            {checked && (
                <div className=" flex flex-col gap-3">
                    <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                        className="text-gray-600"
                    >
                        Once the Credit goes below a minimum threshold{" "}
                        <span className="text-purple-600 font-bold ">50</span>,
                        we will auto-purchase{" "}
                        <span className="text-purple-600 font-bold">1200</span>{" "}
                        credits and add them to your account.{" "}
                        {/* Convert the below span text to a clickable link. */}
                        <span
                            className="text-gray-500 underline cursor-pointer font-semibold"
                            onClick={() => console.log("learn more clicked")}
                        >
                            Learn more
                        </span>{" "}
                    </Typography>
                    <div>
                        <Slider
                            aria-label="Top up amount"
                            defaultValue={10}
                            getAriaValueText={(value) => `${value} credits`}
                            value={topupValue}
                            onChange={handleTopupChange}
                            step={null}
                            size="medium"
                            min={4.6}
                            max={33.5}
                            marks={marks}
                            className="text-purple-600"
                        />
                    </div>
                    <div className="mt-8 mb-3">
                        <Button
                            variant="contained"
                            onClick={handlePurchase}
                            className="bg-purple-700 hover:bg-purple-600 shadow-sm hover:shadow-none text-white px-2 rounded-lg"
                        >
                            Confirm auto-purchase
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopUp;
