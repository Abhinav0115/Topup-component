// Import the ThemeProvider component from the Material UI library.
import { ThemeProvider } from "@mui/material/styles";
// Import the custom Material UI theme from the MUI-Theme file.
import { MUItheme } from "@/components/theme/MUI-Theme";
// Import the TopUp component from the components folder.
import TopUp from "@/components/Top-up";

export default function Home() {
    return (
        // Wraped the TopUp component with the custom Material UI theme with the ThemeProvider component.
        <ThemeProvider theme={MUItheme}>
            <div className=" my-20 ">
                {/* Render the TopUp component that contains the top-up section. */}
                <TopUp />
            </div>
        </ThemeProvider>
    );
}

// Please refer to the README.md file for the documentation of the code.
