import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function PlayersPresentation({ players }) {

  return (
<form className="container player"> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{color: "White"}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="nd" class="form-label" style={{color: "White"}}>Nội dung</label>
    <input type="text" class="form-control" id="nd" />
  </div>
  <div class="mb-3">
    <label for="nd" class="form-label" style={{color: "White"}}>Hình ảnh</label>
    <input type="file" class="form-control" id="nd" />
  </div>
  <div class="mb-3">
    <label for="nd" class="form-label" style={{color: "White"}}>SDT</label>
    <input type="number" class="form-control" id="nd" />
  </div>
  <div class="mb-3">
    <label for="nd" class="form-label" style={{color: "White"}}>Địa chỉ</label>
    <input type="text" class="form-control" id="nd" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" style={{color: "White"}}>Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}
