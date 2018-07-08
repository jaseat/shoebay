import * as React from 'react';
//material-ui
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
//custom
import PureIcon from '../../style/Icons';

export function ExpansionDecor(Child: React.ComponentType<any>, title: string) {
  return class extends React.PureComponent<{}> {
    render() {
      return (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<PureIcon iconType="ChevronDown" />}
          >
            <Typography variant="subheading">{title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Child {...this.props} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    }
  };
}
