import React from 'react';
import UpcomingBatchesData from './UpcomingBatchesData';
import { Link } from 'react-router-dom';
import styles from './UpComing.module.css'; // CSS module for styling

function UpComingBatch() {
    return (
        <> 
            <div className={styles.heading}>
                <h1>Upcoming Batches</h1>
            </div>
            <div className={styles.UpComingBatch}>
                <table className={styles.BatchTable}>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Duration</th>
                            <th>Fees</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UpcomingBatchesData.map((upcoming, index) => (
                            <tr key={index}>
                                <td>{upcoming.Course_Name}</td>
                                <td>{upcoming.Duration}</td>
                                <td>{upcoming.Fees}</td>
                                <td>{upcoming.Contact}</td>
                                <td>
                                    {/* Link to the course details page */}
                                    <Link to={`/course/${upcoming.id}`}>
                                        <button className={styles.SeeMoreButton}>
                                            {upcoming.UpcomingBatchesButton}
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UpComingBatch;
