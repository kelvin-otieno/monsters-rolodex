import React from "react";
import { Card } from "../card/card";

export const CardList = (props) => {
  return props.list.map((item) => (
    <Card name={item.name} email={item.email} key={item.id} count={item.id} />
  ));
};
