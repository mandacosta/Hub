import React from "react";
import { StyledLoading } from "./style";

interface iLoadingProps {
  loading: string;
}

export const Loading = ({ loading }: iLoadingProps) => {
  return (
    <StyledLoading loading={loading}>
      <div></div>
    </StyledLoading>
  );
};
