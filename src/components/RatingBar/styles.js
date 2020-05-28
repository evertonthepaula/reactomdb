import styled, { css } from 'styled-components';

import { Progress } from 'antd';

const colors = {
  default: css`
    background-color: var(--color-blue);
    stroke: var(--color-blue);
  `,

  low: css`
    background-color: var(--color-red);
    stroke: var(--color-red);
  `,

  medium: css`
    background-color: var(--color-yellow);
    stroke: var(--color-yellow);
  `,

  high: css`
    background-color: var(--color-blue);
    stroke: var(--color-blue);
  `,
};

const Graph = styled(Progress)`
  margin-bottom: 24px;

  .ant-progress-bg {
    ${(props) => colors[props.color || 'default']}
  }
  .ant-progress-inner:not(.ant-progress-circle-gradient)
    .ant-progress-circle-path {
    ${(props) => colors[props.color || 'default']}
  }
`;

export default Graph;
