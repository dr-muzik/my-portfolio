"use client";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@/context/ThemeToggle";
import { ToastContainer, toast } from "react-toastify";
import React from "react";

export default function ContactForm() {
  const { setInput, input } = useTheme();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log("value: ", value);
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (data.success) {
        toast("Your message has been sent successfully!");
        setInput({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        toast("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast("An error occurred. Please try again.");
    }
  };

  return (
    <React.Fragment>
      <Box
        component="form"
        // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        className="grid gap-3 w-full lg:max-w-[650px] lg:relative lg:-top-14 "
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
          Got any Project or Gig?
        </h1>
        <div className="grid gap-3">
          <TextField
            className="md:col-span-1 col-span-2 dark:text-white "
            id="outlined-basic"
            name="fullName"
            label="Name"
            variant="outlined"
            value={input.fullName || ""}
            onChange={handleInput}
          />
          <TextField
            className="md:col-span-1 col-span-2"
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            value={input.email || ""}
            onChange={handleInput}
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            name="message"
            value={input.message || ""}
            multiline
            rows={4}
            className="col-span-2"
            onChange={handleInput}
          />
          <div className="col-span-2">
            <Button
              variant="contained"
              className="bg-custom-gradient"
              endIcon={<SendIcon />}
              onClick={submit}
            >
              Let's Connect
            </Button>
          </div>
          <ToastContainer />
        </div>
      </Box>
    </React.Fragment>
  );
}
