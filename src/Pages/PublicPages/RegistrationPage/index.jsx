import { useState } from "react";

import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegistrationPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChange = (event) => {
        switch (event.target.id) {
            case username:
                setUsername(event.target.value)
                break;
            case email:
                setEmail(event.target.value)
                break;
            case password:
                setPassword(event.target.value)
                break;
            default:
                break;
        }
    }

  return (
        <Box>
            <Typography component="h2">
                Sign up
            </Typography>
            <Box component="form">
                <TextField 
                    onChange = {onChange}
                    id="username"
                    label="Your name"
                    name="username"
                    autoComplete="name"
                    required
                />
                <TextField 
                    onChange = {onChange}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    required
                />
                <TextField 
                    onChange = {onChange}
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