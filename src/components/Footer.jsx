import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cn from 'classnames';

import { changeFilter, deleteAllTodos } from '../actions/todos';

class Footer extends Component {
   static propTypes = {
     activeFilter: PropTypes.string.isRequired,
     dispatch: PropTypes.func.isRequired,
   };

  filters = ['all', 'completed', 'active'];

  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <div className="btn-group">
          {this.filters.map((filter) => {
            const { activeFilter } = this.props;

            const className = cn('btn btn-default capitalize', {
              active: activeFilter === filter,
            });

            return (
              <button
                type="button"
                key={filter}
                className={className}
                onClick={() => dispatch(changeFilter(filter))}
              >{filter}
              </button>
            );
          })}
        </div>
        <div className="pull-right">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(deleteAllTodos())}
          >Delete all
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
