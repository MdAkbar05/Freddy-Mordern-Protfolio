import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Services = ({ title, desc }) => {
  return (
    <Card className="min-w-72 w-96 shadow-none bg-[#F5F9FE]">
      <CardBody>
        <Typography className="mb-2 text-base font-bold text-[#02164F] fontMontreal">
          {title}
        </Typography>
        <Typography className="text-[#02164F] fontMontreal">{desc}</Typography>
      </CardBody>
    </Card>
  );
};

export default Services;
