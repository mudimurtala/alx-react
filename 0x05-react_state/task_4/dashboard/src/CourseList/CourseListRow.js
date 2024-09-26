import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseListRow.css';

const CourseListRow = ({ textFirstCell, isHeader, textSecondCell }) => {
    const [isChecked, setIsChecked] = useState(false);
    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <tr className={isChecked ? 'rowChecked' : ''}>
            <td>
                {isHeader ? (
                    textFirstCell
                ) : (
                    <>
                        <input 
                            type="checkbox" 
                            checked={isChecked} 
                            onChange={handleCheckboxChange} 
                        />
                        {textFirstCell}
                    </>
                )}
            </td>
            {isHeader ? <th>{textSecondCell}</th> : <td>{textSecondCell}</td>}
        </tr>
    );
};

CourseListRow.propTypes = {
    textFirstCell: PropTypes.string.isRequired,
    isHeader: PropTypes.bool,
    textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: '',
};

export default CourseListRow;
