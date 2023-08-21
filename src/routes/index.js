import React, { useState } from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import Index from "../pages/home";
import Guest from "../pages/guest";
import Error from "../pages/error"
import PDF from "../components/pdf/pdf";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/home/Amanda&Miguel" element={<Index />} />
        <Route path="/guest/:id" element={<Guest />} />
        <Route path="/pdf/:id" element={<PDF />} />
        <Route path="/*" element={<Error />} />
      </RoutesDom>
    </BrowserRouter>
  );
}