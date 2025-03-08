import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTimetable.css';

const CreateTimetable = () => {
  const navigate = useNavigate();
  const [timetableData, setTimetableData] = useState({
    course: '',
    semester: '',
    section: '',
    schedule: Array(8).fill(Array(5).fill('')) // Initialize with empty strings for each time slot and day
  });

  // Add notification state
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: ''
  });

  // Add update mode state
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  // Show notification helper function
  const showNotification = (message, type) => {
    setNotification({
      show: true,
      message,
      type
    });
    setTimeout(() => {
      setNotification({
        show: false,
        message: '',
        type: ''
      });
    }, 3000);
  };

  const handleInputChange = (timeIndex, dayIndex, value) => {
    const newSchedule = timetableData.schedule.map((row, rowIndex) =>
      rowIndex === timeIndex
        ? row.map((cell, cellIndex) =>
            cellIndex === dayIndex ? value : cell
          )
        : row
    );

    setTimetableData({
      ...timetableData,
      schedule: newSchedule
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!timetableData.course || !timetableData.semester || !timetableData.section) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    console.log('Timetable Data:', timetableData);
    showNotification('Timetable saved successfully!', 'success');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!timetableData.course || !timetableData.semester || !timetableData.section) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    console.log('Updated Timetable Data:', timetableData);
    showNotification('Timetable updated successfully!', 'success');
  };

  return (
    <div className="create-timetable">
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
          {notification.message}
        </div>
      )}

      <div className="timetable-header">
        <h1>{isUpdateMode ? 'Update Timetable' : 'Create New Timetable'}</h1>
        <div className="header-actions">
          <button 
            onClick={() => setIsUpdateMode(!isUpdateMode)} 
            className="toggle-btn"
          >
            <i className={`fas ${isUpdateMode ? 'fa-plus' : 'fa-edit'}`}></i>
            {isUpdateMode ? 'Create New' : 'Update Existing'}
          </button>
          <button onClick={() => navigate('/admin')} className="back-btn">
            <i className="fas fa-arrow-left"></i>
            Back to Dashboard
          </button>
        </div>
      </div>

      <div className="timetable-form">
        <div className="form-controls">
          <input
            type="text"
            placeholder="Course Name"
            value={timetableData.course}
            onChange={(e) => setTimetableData({...timetableData, course: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Semester"
            value={timetableData.semester}
            onChange={(e) => setTimetableData({...timetableData, semester: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Section"
            value={timetableData.section}
            onChange={(e) => setTimetableData({...timetableData, section: e.target.value})}
            required
          />
        </div>

        <div className="timetable-grid">
          <table>
            <thead>
              <tr>
                <th>Time/Day</th>
                {days.map(day => <th key={day}>{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, timeIndex) => (
                <tr key={time}>
                  <td className="time-slot">{time}</td>
                  {days.map((day, dayIndex) => (
                    <td key={`${day}-${time}`}>
                      <input
                        type="text"
                        placeholder="Enter subject"
                        value={timetableData.schedule[timeIndex][dayIndex]}
                        onChange={(e) => handleInputChange(timeIndex, dayIndex, e.target.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="timetable-actions">
          <button 
            className="save-btn" 
            onClick={isUpdateMode ? handleUpdate : handleSubmit}
          >
            <i className={`fas ${isUpdateMode ? 'fa-sync-alt' : 'fa-save'}`}></i>
            {isUpdateMode ? 'Update Timetable' : 'Save Timetable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTimetable; 