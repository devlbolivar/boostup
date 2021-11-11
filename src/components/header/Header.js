import { Header as HeaderSm, Icon } from "semantic-ui-react";

export default function Header() {
  return (
    <HeaderSm as="h2">
      <Icon name="chart bar" />
      <HeaderSm.Content>
        Covid19
        <HeaderSm.Subheader>Pandemic Histogram</HeaderSm.Subheader>
      </HeaderSm.Content>
    </HeaderSm>
  );
}
