"use client";
import { useTheme } from "@/context/ThemeToggle";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const { setInput, input } = useTheme();
  const [loading, setLoading] = React.useState(false);

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
    // toast.error("An error occurred. Please try again.");
    console.log("ref: ", loading);
    setLoading(true);

    // simulate API call delay
    // setTimeout(() => {
    //   setLoading(false);
    //   // handle response...
    // }, 2000);
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        toast.success("Your message has been sent successfully!");
        setInput({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        setLoading(false);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Box
        component="form"
        // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        className="block w-full lg:max-w-[650px] lg:relative lg:-top-14 "
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
          Got any Project or Gig?
        </h1>
        <div className=" flex flex-col gap-3">
          <div className="block md:flex md:flex-row gap-3">
            <TextField
              className=" dark:text-white w-full mb-3 md:mb-0 "
              id="outlined-basic"
              name="fullName"
              label="Name"
              variant="outlined"
              value={input.fullName || ""}
              onChange={handleInput}
            />
            <TextField
              className=" w-full mb-3 md:mb-0"
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              value={input.email || ""}
              onChange={handleInput}
            />
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            name="message"
            value={input.message || ""}
            multiline
            rows={4}
            className="col-span-2 w-full"
            onChange={handleInput}
          />
          <div className="col-span-2">
            <Button
              variant="contained"
              className="bg-custom-gradient w-[151px]"
              endIcon={<SendIcon />}
              onClick={submit}
            >
              {loading ? (
                <ClipLoader color="#fff" size={25} />
              ) : (
                "Let's Connect"
              )}
            </Button>
          </div>
          <ToastContainer />
        </div>
      </Box>
    </>
  );
}
