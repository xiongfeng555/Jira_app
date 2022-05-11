import styled from "@emotion/styled";
import { Spin, Typography } from "antd";
import { DevTools } from "jira-dev-tool";
export const Row = styled.div<{ gap?: number | boolean; between?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  > * {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;

export const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FullPageLoading = () => (
  <FullPage>
    <Spin size="large" />
  </FullPage>
);

export const FullPageErrorFallback = ({
  error,
}: {
  error: Error | null;
}): any => {
  <FullPage>
    <DevTools />
    <Typography.Text type="danger">{error?.message}</Typography.Text>
  </FullPage>;
};
export const DisplayError = (error: any) => {
  if (error?.message) {
    return <Typography.Text type="danger">{error.message}</Typography.Text>;
  }
  return null;
};
