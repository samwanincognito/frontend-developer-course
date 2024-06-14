import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useAlertContext } from "./context/alertContext";

const BookingForm = ({ tableNumber, eventType }) => {  
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    onSubmit: async (values) => {
      console.log(values);
       onOpen(
        "success",
        `Thanks for your submission, ${values.name}! We will get back to you shortly!\nTable Number: ${tableNumber}\nEvent Type: ${eventType}`
      );
      formik.setSubmitting(false);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      cardNumber: Yup.string().required("Required"),
      expirationDate: Yup.string().required("Required"),
      cvv: Yup.string().required("Required"),
    }),
  });

  return (
    <VStack w="1024px" p={32} alignItems="flex-start">
      <Heading as="h1" id="contactme-section">
        Book
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <Box mb={4}>
          <Heading as="h2" size="md">
            Information
          </Heading>
          <p>Table Number: {tableNumber}</p>
          <p>Event Type: {eventType}</p>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" name="name" {...formik.getFieldProps("name")} />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.cardNumber && formik.touched.cardNumber}
            >
              <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
              <Input
                id="cardNumber"
                name="cardNumber"
                type="text"
                {...formik.getFieldProps("cardNumber")}
              />
              <FormErrorMessage>{formik.errors.cardNumber}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.expirationDate && formik.touched.expirationDate
              }
            >
              <FormLabel htmlFor="expirationDate">Expiration Date</FormLabel>
              <Input
                id="expirationDate"
                name="expirationDate"
                type="text"
                {...formik.getFieldProps("expirationDate")}
              />
              <FormErrorMessage>
                {formik.errors.expirationDate}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.cvv && formik.touched.cvv}>
              <FormLabel htmlFor="cvv">CVV</FormLabel>
              <Input
                id="cvv"
                name="cvv"
                type="text"
                {...formik.getFieldProps("cvv")}
              />
              <FormErrorMessage>{formik.errors.cvv}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default BookingForm;
