import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import PureIcon from '../../style/Icons';

export function ExpansionDecor(Child: React.ComponentType<any>, title: string) {
  return class extends React.PureComponent<{}> {
    render() {
      return (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<PureIcon iconType="ChevronDown" color="secondary" />}
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
