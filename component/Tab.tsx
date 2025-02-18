import { useTheme } from "@/context/ThemeToggle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export default function CenteredTabs() {
  // const [value, setValue] = React.useState(0);
  const { handleChange, value } = useTheme();

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   console.log("newValue: ", newValue);
  //   setValue(newValue);
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        sx={{ fontSize: "25px" }}
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Frontend" />
        <Tab label="Backend" />
      </Tabs>
    </Box>
  );
}
