import React from 'react';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import bot from '../../assets/imgs/bot.png';
import cyborg from '../../assets/imgs/cyborg.png';
import human from '../../assets/imgs/human.png';


function localeDate(dateString) {
  const createdDate = new Date(Date.parse(dateString));
  return createdDate.toString();
}

function botOrHuman(botScore) {
  if (botScore >= 0.7) {
    return <img className="avatar float-right" src={human} alt="human" />;
  }

  if (botScore >= 0.4) {
    return <img className="avatar float-right" src={cyborg} alt="cyborg" />;
  }

  return <img className="avatar float-right" src={bot} alt="bot" />;
}


const FeedbackTile = props => (
  <li className="card mb-2 d-inline-block d-flex">
    <div className="card-body">
      <p className="card-text">{props.comment}</p>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="text-muted">{props.email || __('Anonymous')}</div>
            <small className="text-muted">{localeDate(props.created)}</small>
          </div>
          <div className="col-2">
            <span>{botOrHuman(props.botScore)}</span>
          </div>
        </div>
      </div>
    </div>
  </li>
);

FeedbackTile.propTypes = {
  email: PropTypes.string,
  created: PropTypes.string,
  comment: PropTypes.string,
  botScore: PropTypes.number,
};

FeedbackTile.defaultProps = {
  email: 'bryan.robitaille@da-an.ca',
  created: 'Some date and time',
  comment: 'This is the default text',
  botScore: 0,
};

export default LocalizedComponent(FeedbackTile);
