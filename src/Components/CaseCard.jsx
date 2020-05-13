import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


const CaseCard = ({ ...caseName }) => {
  const currentCase = caseName.caseName;
  const createSlug = (caseName) => (`${caseName}-case-study`);

  return (
    <div className="case_card">
      <h3 className="case_card_client">

        <FormattedMessage id={`${currentCase}.section.1.title`} />

      </h3>
      <p>
        |
        {' '}
        <Link to={`works/${createSlug(currentCase)}`}>
          <FormattedMessage id="to_case" />
        </Link>
        {' '}
        |
      </p>
    </div>
  );
};

export default CaseCard;
