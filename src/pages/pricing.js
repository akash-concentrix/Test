import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import PricingCard from "src/sections/@dashboard/app/PricingCard";

export default function Pricing() {
  return (
    <>
      <PricingCard
        title="Weekly Sales"
        total={714000}
        icon={"ant-design:android-filled"}
      />
      <PricingCard
        title="Weekly Sales"
        total={714000}
        icon={"ant-design:android-filled"}
      />
      <PricingCard
        title="Weekly Sales"
        total={714000}
        icon={"ant-design:android-filled"}
      />
    </>
  );
}
