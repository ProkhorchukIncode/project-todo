import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {

  return (
    <Container>
        <Box>
            <Typography component="h2">
                Sign in
            </Typography>
            <Box component="form">
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
                    Sign in
                </Button>
            </Box>
        </Box>
    </Container>
  );
}

export default LoginPage