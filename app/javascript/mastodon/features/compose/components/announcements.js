import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import IconButton from '../../../components/icon_button';

export default class Announcements extends React.PureComponent {

  static propTypes = {
    announcements: ImmutablePropTypes.list.isRequired,
    visible: PropTypes.bool.isRequired,
    toggleVisibility: PropTypes.func.isRequired,
  }

  render () {
    const { announcements, visible, toggleVisibility } = this.props;
    const caretClass = visible ? 'fa fa-caret-down' : 'fa fa-caret-up';

    return (
      <div className='compose-announcements'>
        <div className='compose__extra__header'>
          <i className='fa fa-bell' />
          お知らせ
          <button className='compose__extra__header__icon' onClick={toggleVisibility} >
            <i className={caretClass} />
          </button>
        </div>
        { visible && (
          <ul>
            {announcements.map((announcement, idx) => (
              <li key={idx}>
                <div className='announcements__icon'>
                  <IconButton
                    animate
                    icon='check-circle-o'
                    title='announcement-icon'
                    activeStyle={{ color: '#ca8f04' }}
                  />
                </div>
                <div
                  className='announcements__body'
                  dangerouslySetInnerHTML={{ __html: announcement.get('contentHtml') }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

}
