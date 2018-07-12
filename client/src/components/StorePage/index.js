import StorePage from './StorePage';
import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';
import { nextPage, refreshPage } from '../../actions/page';

export default connect(
  state => ({
    filters: state.filter.filters,
    page: state.page.page,
  }),
  { addFilter, nextPage, refreshPage }
)(StorePage);
