import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegistrationPage = () => {

  return (
        <Box>
            <Typography component="h2">
                Sign up
            </Typography>
            <Box component="form">
                <TextField 
                    id="name"
                    label="Your name"
                    name="name"
                    autoComplete="name"
                    required
                />
                <TextField 
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    required
                />
                <TextField 
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    required
                />
                <Button type="submit">
                    Sign up
                </Button>
            </Box>
        </Box>
  );
}

export default RegistrationPage